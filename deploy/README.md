# Деплой Arasaca на Cloud.ru (через GitHub Actions)

Полная инструкция: от аренды VPS до автоматического деплоя по `git push`.

## Архитектура

```
GitHub (repo)  ──push──▶  GitHub Actions  ──ssh/scp──▶  VPS Cloud.ru
   ▲                                                          │
   │ я делаю git push                              Caddy (443) ──▶ Node :3000
   │                                              (авто-SSL)        (standalone server.js)
```

- **DNS**: reg.ru, A-запись `onreza.ru → IP_сервера` (без делегирования)
- **SSL**: Caddy автоматически через Let's Encrypt
- **Сборка**: GitHub Actions на `ubuntu-latest` (не нагружает VPS)
- **Релизы**: атомарные через симлинк `/opt/arasaca/current`, 5 последних версий
- **Перезапуск**: systemd-unit `arasaca.service`, auto-restart при падении

---

## Шаг 1. Аренда VPS на Cloud.ru

1. Зарегистрируйтесь на [cloud.ru](https://cloud.ru).
2. Создайте **виртуальную машину** (ECS):
   - ОС: **Ubuntu 22.04 LTS** (или 24.04)
   - Конфиг: **2 vCPU / 4 GB RAM / 40 GB SSD** (минимум для Next.js build на VPS; но сборка идёт в Actions, поэтому можно и 2 GB, если память нужна только под runtime)
   - Назначьте **эластичный публичный IP** (статический)
   - Сетевая безопасность: откройте порты **22 (SSH), 80, 443**
3. Сохраните: **публичный IP**, **имя пользователя** (по умолчанию `ubuntu` или `root`), **SSH-ключ** (Cloud.ru предложит загрузить публичный ключ при создании).

> Минимум для runtime: 1 vCPU / 2 GB RAM хватит, т.к. `next build` выполняется в GitHub Actions, а не на VPS.

---

## Шаг 2. Первичная настройка VPS

Подключитесь к VPS по SSH (с вашего компьютера) и запустите скрипт:

```bash
# если от root:
curl -fsSL https://raw.githubusercontent.com/arasacacorp/arasaca/main/deploy/setup-server.sh | bash

# либо вручную:
git clone https://github.com/arasacacorp/arasaca.git /tmp/arasaca
cd /tmp/arasaca
bash deploy/setup-server.sh
```

Скрипт сделает всё за один прогон:
- установит Bun, Node 20, Caddy, git, ufw
- создаст пользователя `arasaca` и директорию `/opt/arasaca`
- настроит Caddyfile (`onreza.ru` → `localhost:3000`, авто-SSL, gzip, кэш статики, security headers)
- создаст systemd-сервис `arasaca.service`
- откроет порты в файрволе

В конце скрипт выведет публичный IP и дальнейшие шаги.

---

## Шаг 3. Настройка DNS на reg.ru

В панели reg.ru → Домены → `onreza.ru` → DNS-серверы / Управление записями:

| Тип | Хост | Значение | TTL |
|-----|------|----------|-----|
| **A** | `@` (или пусто) | `IP_ВАШЕГО_VPS` | 600 |
| **A** (или CNAME) | `www` | `IP_ВАШЕГО_VPS` | 600 |

**Не нужно** делегировать DNS на Cloud.ru. **Не нужно** создавать ALIAS/ANAME — A-запись на apex работает на reg.ru всегда.

Проверка через 5–30 минут:
```bash
dig +short onreza.ru        # должен вернуть IP вашего VPS
dig +short www.onreza.ru
```

---

## Шаг 4. SSH-ключ для GitHub Actions

GitHub Actions будет подключаться к VPS по SSH. Нужен отдельный ключ (не ваш личный).

**На VPS** (или на вашем компьютере):
```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/gh_actions -N ""
```
Появятся два файла:
- `~/.ssh/gh_actions` — **приватный** (пойдёт в GitHub Secrets)
- `~/.ssh/gh_actions.pub` — **публичный** (пойдёт на VPS)

**Добавьте публичный ключ на VPS** пользователю `arasaca`:
```bash
# на VPS от root:
mkdir -p /home/arasaca/.ssh
cp /root/.ssh/gh_actions.pub /home/arasaca/.ssh/authorized_keys
chown -R arasaca:arasaca /home/arasaca/.ssh
chmod 700 /home/arasaca/.ssh
chmod 600 /home/arasaca/.ssh/authorized_keys
```

**Скопируйте приватный ключ** себе (он нужен для Step 5):
```bash
cat ~/.ssh/gh_actions   # вывести приватный ключ, скопировать полностью
```

---

## Шаг 5. GitHub Secrets

В репозитории `arasacacorp/arasaca`:

**Settings → Secrets and variables → Actions → New repository secret**

| Имя секрета | Значение |
|---|---|
| `VPS_HOST` | публичный IP VPS, напр. `194.67.x.x` |
| `VPS_USER` | `arasaca` |
| `VPS_SSH_KEY` | приватный ключ целиком (с `-----BEGIN…` и `-----END…`) |
| `VPS_PORT` | `22` |
| `PROD_DOMAIN` | `onreza.ru` |

---

## Шаг 6. Первый деплой

**Вариант A — автоматический** (по пушу в `main`):
```bash
git add . && git commit -m "add: Cloud.ru deploy config" && git push origin main
```
GitHub Actions запустится автоматически.

**Вариант B — ручной**:
GitHub repo → вкладка **Actions** → **Deploy to Cloud.ru** → **Run workflow** → выбрать ветку → Run.

### Что произойдёт в Actions:
1. Checkout кода
2. `bun install` + `bun run db:generate` + `bun run build` (standalone)
3. Упаковка bundle в `deploy.tar.gz` (standalone + public + static + prisma + db)
4. SCP-заливка на VPS в `/tmp/`
5. SSH: распаковка в `/opt/arasaca/releases/YYYYMMDDHHMMSS`, переключение симлинка `current`, `systemctl restart arasaca`, очистка старых релизов
6. Health-check `https://onreza.ru`

Логи — во вкладке Actions (зелёная галочка = ок).

---

## Шаг 7. Проверка

```bash
curl -I https://onreza.ru          # HTTP/2 200
curl -I https://www.onreza.ru      # HTTP/2 200 (или редирект)
systemctl status arasaca           # active (running)
journalctl -u arasaca -f           # логи Next.js
tail -f /var/log/caddy/onreza.ru.log   # логи доступа
```

---

## Ежедневная работа (как я буду деплоить)

После первоначальной настройки:
1. Вы просите меня внести правку.
2. Я редактирую код, делаю `git commit` + `git push`.
3. GitHub Actions **автоматически** собирает и катит на VPS.
4. Через ~3 минуты сайт обновлён. Я вижу статус в Actions.

Если нужны только ручные деплои — уберите `on: push:` из `.github/workflows/deploy.yml`, оставьте только `workflow_dispatch`.

---

## Откат

```bash
# на VPS: показать последние 5 релизов
ls -1dt /opt/arasaca/releases/* | head -5

# откатиться на предыдущий
ln -sfn /opt/arasaca/releases/20250101120000 /opt/arasaca/current
systemctl restart arasaca
```

---

## Файлы в репозитории

```
.github/workflows/deploy.yml   # CI/CD пайплайн
deploy/
  setup-server.sh              # первичная настройка VPS (запустить 1 раз)
  README.md                    # этот файл
next.config.ts                 # output: "standalone" — обязательно
```

## Частые вопросы

**Q: Почему не `pm2`?**
A: systemd делает то же самое (restart=always, логи в journalctl) и уже стоит в Ubuntu. Меньше зависимостей.

**Q: Что если `next build` падает в Actions из-за памяти?**
A: GitHub Actions даёт 7 GB RAM — должно хватать. Если нет — вынесите build на VPS (но это нагрузит его). Альтернатива: собирайте локально и заливайте артефакт.

**Q: Можно ли без GitHub Actions?**
A: Да, через webhook (push → curl на VPS → git pull + build + restart), но это менее надёжно: нет логов в GitHub, нет изоляции сборки. Actions — стандарт.

**Q: Cloud.ru vs Timeweb vs Selectel?**
A: Все три — IaaS, схема одинаковая. Cloud.ru — нормальный выбор. Сравните цены на 2 vCPU/4 GB в вашем регионе.
