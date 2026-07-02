#!/bin/bash
# ============================================================
# Первичная настройка VPS Cloud.ru для деплоя Arasaca
# Запускать ОДИН РАЗ от пользователя arasaca (с sudo-правами):
#   bash setup-server.sh
# Идемпотентный: можно запускать повторно.
# ============================================================
set -euo pipefail

# Чтобы apt не зависал на интерактивных вопросах (tzdata, needrestart и т.п.)
export DEBIAN_FRONTEND=noninteractive
export NEEDRESTART_MODE=a
export NEEDRESTART_SUSPEND=1

# ── 0. Параметры ──
APP_NAME="arasaca"
APP_USER="arasaca"
APP_DIR="/opt/arasaca"
DOMAIN="arasaca.ru"
NODE_VERSION="20"
LOG_DIR="/var/log/caddy"

echo "=========================================="
echo " Настройка VPS для $DOMAIN"
echo " (пользователь: $(whoami), sudo: $(command -v sudo >/dev/null 2>&1 && echo 'yes' || echo 'NO — нужен sudo')"
echo "=========================================="

# Проверка sudo
if ! command -v sudo >/dev/null 2>&1; then
  echo "ОШИБКА: sudo не установлен или нет прав. Этот скрипт требует sudo."
  exit 1
fi

# ── 1. Системные пакеты ──
echo "[1/7] Установка системных пакетов..."
sudo apt-get update -qq
sudo apt-get install -y -qq curl wget git ufw ca-certificates gnupg lsb-release unzip tar

# ── 2. Создание пользователя для приложения (если не существует) ──
echo "[2/7] Проверка пользователя $APP_USER..."
if ! id "$APP_USER" &>/dev/null; then
  sudo useradd -m -s /bin/bash "$APP_USER"
  echo "Пользователь $APP_USER создан"
else
  echo "Пользователь $APP_USER уже существует"
fi

# ── 3. Установка Bun + Node ──
echo "[3/7] Установка Bun и Node.js $NODE_VERSION..."
# Bun — в /usr/local/bin (доступен всем)
if ! command -v bun &>/dev/null; then
  curl -fsSL https://bun.sh/install | sudo bash
  sudo ln -sf /root/.bun/bin/bun /usr/local/bin/bun 2>/dev/null || true
fi
# Node через NodeSource
if ! command -v node &>/dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
  sudo apt-get install -y -qq nodejs
fi

# ── 4. Установка Caddy (авто-SSL, reverse proxy) ──
echo "[4/7] Установка Caddy..."
if ! command -v caddy &>/dev/null; then
  sudo apt-get install -y -qq debian-keyring debian-archive-keyring apt-transport-https
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
    | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
    | sudo tee /etc/apt/sources.list.d/caddy-stable.list >/dev/null
  sudo apt-get update -qq
  sudo apt-get install -y -qq caddy
fi

# ── 5. Директории приложения ──
echo "[5/7] Создание структуры директорий..."
sudo mkdir -p "$APP_DIR"/{releases,current}
sudo mkdir -p "$APP_DIR/db"
sudo mkdir -p "$LOG_DIR"
sudo chown -R "$APP_USER:$APP_USER" "$APP_DIR"
sudo chown -R "$APP_USER:$APP_USER" "$LOG_DIR" 2>/dev/null || true

# ── 6. Конфигурация Caddy ──
echo "[6/7] Настройка Caddy ($DOMAIN → localhost:3000)..."
sudo tee /etc/caddy/Caddyfile > /dev/null << CADDYEOF
{
  # Авто-HTTPS через Let's Encrypt
  email admin@$DOMAIN
}

$DOMAIN, www.$DOMAIN {
  # Редирект www → apex
  @www host www.$DOMAIN
  redir @www https://$DOMAIN{uri} permanent

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
    output file $LOG_DIR/$DOMAIN.log
    format json
  }
}
CADDYEOF

sudo systemctl enable caddy
sudo systemctl restart caddy || sudo systemctl start caddy

# ── 7. Systemd-сервис для приложения ──
echo "[7/7] Создание systemd-сервиса $APP_NAME..."
sudo tee /etc/systemd/system/${APP_NAME}.service > /dev/null << SVCEOF
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

sudo systemctl daemon-reload
sudo systemctl enable "$APP_NAME"

# ── Файрвол ──
echo "Настройка файрвола..."
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw --force enable || true

echo ""
echo "=========================================="
echo " ✓ VPS готов к деплою"
echo "=========================================="
echo ""
echo "Публичный IP: $(curl -s ifconfig.me 2>/dev/null || echo 'недоступен')"
echo "Bun:    $(command -v bun >/dev/null 2>&1 && bun --version || echo 'ОТСУТСТВУЕТ')"
echo "Node:   $(command -v node >/dev/null 2>&1 && node --version || echo 'ОТСУТСТВУЕТ')"
echo "Caddy:  $(command -v caddy >/dev/null 2>&1 && caddy version | head -1 || echo 'ОТСУТСТВУЕТ')"
echo "systemd $APP_NAME: $(sudo systemctl is-enabled $APP_NAME 2>/dev/null || echo 'не создан')"
echo ""
echo "Дальше: GitHub → Actions → 'Deploy to Cloud.ru' → Run workflow"
echo ""
