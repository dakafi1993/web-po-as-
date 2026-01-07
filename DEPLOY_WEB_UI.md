# 🚀 Kompletní Railway Deployment

## Aktuální stav

✅ GitHub repository: https://github.com/dakafi1993/web-po-as-.git
✅ Railway projekt: pocasí (ID: c1e9928f-eb63-4eeb-be96-2c5c6a9c49f7)
✅ PostgreSQL databáze vytvořena
✅ Environment variables nastaveny

## Rychlé nasazení přes Web UI

### 1. Backend nasazení

1. Otevřete: https://railway.com/project/c1e9928f-eb63-4eeb-be96-2c5c6a9c49f7
2. Klikněte **"+ New Service"** → **"GitHub Repo"**
3. Vyberte repository: **`dakafi1993/web-po-as-`**
4. Railway vytvoří novou službu

**Konfigurace backendu:**
- Settings → Root Directory: **`backend`**
- Settings → Start Command: **`node server.js`**
- Variables → Add Reference → vyberte `Postgres.DATABASE_URL`

**Vygenerovat doménu:**
- Settings → Networking → Generate Domain
- Zkopírujte URL (např: `https://web-po-as-production.up.railway.app`)

### 2. Frontend nasazení

1. Ve stejném projektu klikněte **"+ New Service"** → **"GitHub Repo"**
2. Vyberte stejný repository: **`dakafi1993/web-po-as-`**
3. Railway vytvoří druhou službu

**Konfigurace frontendu:**
- Settings → Root Directory: **`./`** (kořen)
- Settings → Build Command: **`npm install && npm run build`**
- Settings → Start Command: **`npx serve -s dist -l $PORT`**
- Variables → Add Variable:
  ```
  VITE_API_URL=https://BACKEND-URL.railway.app/api
  ```
  (Nahraďte BACKEND-URL skutečnou URL z kroku 1)

**Vygenerovat doménu:**
- Settings → Networking → Generate Domain

## Přihlašovací údaje

**Admin přístup:**
- Email: `admin@meteostanice.cz`
- Heslo: `Admin123Meteo!`

## Test nasazení

### Backend test:
```
https://BACKEND-URL.railway.app/health
```
Odpověď: `{"status":"OK"}`

### Frontend test:
```
https://FRONTEND-URL.railway.app
```
Měl by se načíst web s modrým sidebar

### Login test:
1. Otevřete frontend URL
2. Klikněte "Přihlásit" (vpravo nahoře)
3. Použijte admin credentials
4. Měl by se otevřít Admin Dashboard

## Cloudinary (volitelné)

Pro nahrávání fotek:
1. https://cloudinary.com → Registrace (free tier)
2. Dashboard → zkopírujte Cloud Name, API Key, API Secret
3. Railway → Backend Variables → přidat:
   ```
   CLOUDINARY_CLOUD_NAME=...
   CLOUDINARY_API_KEY=...
   CLOUDINARY_API_SECRET=...
   ```

## Náklady

- Railway: ~$5/měsíc (první měsíc $5 credit ZDARMA)
- Cloudinary: ZDARMA (25GB)
- **Celkem: $5/měsíc** (první měsíc ZDARMA)

## Troubleshooting

**Backend se nespustí:**
- Zkontrolujte Root Directory = `backend`
- Ověřte DATABASE_URL reference v Variables
- Podívejte se do Logs

**Frontend nevidí backend:**
- Zkontrolujte VITE_API_URL - musí končit `/api`
- Ověřte že backend běží (otevřete /health endpoint)
- Browser console (F12) → hledejte CORS errory

**Login nefunguje:**
- Zkontrolujte ADMIN_EMAIL a ADMIN_PASSWORD v backend Variables
- První přihlášení automaticky vytvoří admin účet
