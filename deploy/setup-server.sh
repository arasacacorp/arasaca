#!/bin/bash
# ============================================================
# Первичная настройка VPS Cloud.ru для деплоя Arasaca
# Запускать ОДИН РАЗ на свежей Ubuntu 22.04/24.04 от root:
#   bash setup-server.sh
# ============================================================
set -euo pipefail

# Чтобы apt не зависал на интерактивных вопросах (tzdata и т.п.)
export DEBIAN_FRONTEND=noninteractive
export NEEDRESTART_MODE=a
export NEEDRESTART_SUSPEND=1

# ── 0. Параметры (поменяйте при необходимости) ──
APP_NAME="arasaca"
APP_USER="arasaca"
APP_DIR="/opt/arasaca"
DOMAIN="arasaca.ru"
NODE_VERSION="20"

echo "=========================================="
echo " Настройка VPS для $DOMAIN"
echo "=========================================="

# ── 1. Системные пакеты ──
echo "[1/7] Установка системных пакетов..."
apt-get update -qq
apt-get install -y -qq curl wget git ufw ca-certificates gnupg lsb-release

# ── 2. Создание пользователя для приложения ──
echo "[2/7] Создание пользователя $APP_USER..."
if ! id "$APP_USER" &>/dev/null; then
  useradd -m -s /bin/bash "$APP_USER"
  echo "Пользователь $APP_USER создан"
else
  echo "Пользователь $APP_USER уже существует"
fi

# ── 3. Установка Bun + Node ──
echo "[3/7] Установка Bun и Node.js $NODE_VERSION..."
if ! command -v bun &>/dev/null; then
  curl -fsSL https://bun.sh/install | bash
fi
if ! command -v node &>/dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
  apt-get install -y -qq nodejs
fi

# ── 4. Установка Caddy (авто-SSL, reverse proxy) ──
echo "[4/7] Установка Caddy..."
if ! command -v caddy &>/dev/null; then
  apt-get install -y -qq debian-keyring debian-archive-keyring apt-transport-https
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
    | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
    | tee /etc/apt/sources.list.d/caddy-stable.list
  apt-get update -qq
  apt-get install -y -qq caddy
fi

# ── 5. Директории приложения ──
echo "[5/7] Создание структуры директорий..."
mkdir -p "$APP_DIR"/{releases,current}
mkdir -p "$APP_DIR/db"
chown -R "$APP_USER:$APP_USER" "$APP_DIR"

# ── 6. Конфигурация Caddy ──
echo "[6/7] Настройка Caddy ($DOMAIN → localhost:3000)..."
cat > /etc/caddy/Caddyfile << CADDYEOF
{
  # Авто-HTTPS через Let's Encrypt
  email admin@$DOMAIN
}

$DOMAIN, www.$DOMAIN {
  # Редирект www → apex (или наоборот, по желанию)
  # @www host www.$DOMAIN
  # redir @www https://$DOMAIN{uri} permanent

  reverse_proxy localhost:3000 {
    header_up Host {host}
    header_up X-Real-IP {remote_host}
    header_up X-Forwarded-For {remote_host}
    header_up X-Forwarded-Proto {scheme}
  }

  # Сжатие
  encode gzip zstd

  # Кэш статики Next.js
  @static path /_next/static/*
  header @static Cache-Control "public, max-age=31536000, immutable"

  # Безопасность
  header {
    X-Content-Type-Options nosniff
    X-Frame-Options SAMEORIGIN
    Referrer-Policy strict-origin-when-cross-origin
    Strict-Transport-Security "max-age=31536000; includeSubDomains"
  }

  log {
    output file /var/log/caddy/$DOMAIN.log
    format json
  }
}
CADDYEOF

systemctl enable caddy
systemctl restart caddy

# ── 7. Systemd-сервис для приложения ──
echo "[7/7] Создание systemd-сервиса $APP_NAME..."
cat > /etc/systemd/system/${APP_NAME}.service << SVCEOF
[Unit]
Description=Arasaca Next.js (standalone)
After=network.target

[Service]
Type=simple
User=$APP_USER
WorkingDirectory=$APP_DIR/current
Environment=NODE_ENV=production
Environment=DATABASE_URL=file:$APP_DIR/db/custom.db
Environment=PORT=3000
Environment=HOSTNAME=127.0.0.1
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
SVCEOF

systemctl daemon-reload
systemctl enable "$APP_NAME"

# ── Файрвол ──
echo "Настройка файрвола..."
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

echo ""
echo "=========================================="
echo " ✓ VPS готов к деплою"
echo "=========================================="
echo ""
echo "Следующие шаги (всё в браузере, без терминала):"
echo "  1. На reg.ru создайте A-запись:"
echo "       arasaca.ru      → $(curl -s ifconfig.me)"
echo "       www.arasaca.ru  → $(curl -s ifconfig.me)  (или CNAME на arasaca.ru)"
echo "  2. Дождитесь обновления DNS (5-30 мин)."
echo "  3. В GitHub repo → Settings → Secrets → Actions добавьте:"
echo "       VPS_HOST     = $(curl -s ifconfig.me)"
echo "       VPS_USER     = root"
echo "       VPS_SSH_KEY  = содержимое .pem ключа из Cloud.ru"
echo "       VPS_PORT     = 22"
echo "       PROD_DOMAIN  = $DOMAIN"
echo "  4. В GitHub → Actions → 'Setup VPS (first run)' → Run workflow"
echo "     (этот шаг можно пропустить — он уже выполнен этим запуском)"
echo "  5. В GitHub → Actions → 'Deploy to Cloud.ru' → Run workflow"
echo "  Готово — сайт откроется на https://$DOMAIN"
echo ""
