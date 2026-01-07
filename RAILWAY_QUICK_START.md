# Railway Deployment - Rychlý průvodce

## 1. Link PostgreSQL DATABASE_URL

Backend potřebuje DATABASE_URL z PostgreSQL služby. Udělat můžete dvěma způsoby:

### Způsob A: Přes Web UI (DOPORUČENO)
1. Otevřete: https://railway.com/project/c1e9928f-eb63-4eeb-be96-2c5c6a9c49f7
2. Klikněte na backend službu
3. Záložka "Variables"
4. Klikněte "+ New Variable" → "Add Reference"
5. Vyberte: `Postgres` → `DATABASE_URL`
6. Uložte

### Způsob B: Přes CLI
```powershell
cd "d:\web pocasí\backend"
railway variables --set DATABASE_URL='${{Postgres.DATABASE_URL}}'
```

## 2. Nastavit Cloudinary (volitelné - pro fotky)

Pokud chcete nahrávání fotek:
1. Zaregistrujte se na https://cloudinary.com (free tier)
2. V Dashboard zkopírujte:
   - Cloud Name
   - API Key  
   - API Secret
3. V Railway → backend Variables přidejte:
   ```
   CLOUDINARY_CLOUD_NAME=váš_cloud_name
   CLOUDINARY_API_KEY=váš_api_key
   CLOUDINARY_API_SECRET=váš_api_secret
   ```

## 3. Re-deploy Backend

Po nastavení DATABASE_URL:
```powershell
cd "d:\web pocasí\backend"
railway up
```

## 4. Generate Domain (veřejná URL)

```powershell
cd "d:\web pocasí\backend"
railway domain
```

Nebo přes web UI:
1. Backend service → Settings
2. Networking → Generate Domain

URL bude něco jako: `https://web-po-as-production.up.railway.app`

## 5. Test Backend

Otevřete v prohlížeči:
```
https://VASE-BACKEND-URL.railway.app/health
```

Měli byste vidět: `{"status":"OK"}`

## 6. Deploy Frontend na Vercel

```powershell
npm install -g vercel
cd "d:\web pocasí"
vercel
```

Při dotazech:
- Set up and deploy: `Y`
- Which scope: `váš účet`
- Link to existing project: `N`
- Project name: `meteostanice` (nebo cokoliv)
- Directory: `./` (kořen)
- Override settings: `N`

Environment variable:
```
VITE_API_URL=https://VASE-BACKEND-URL.railway.app/api
```

## Přihlašovací údaje do adminu

Email: `admin@meteostanice.cz`
Heslo: `Admin123Meteo!`

## Aktuální stav

✅ Git repozitář: https://github.com/dakafi1993/web-po-as-.git
✅ Railway projekt vytvořen
✅ PostgreSQL databáze přidána  
✅ Environment variables nastaveny
⏳ DATABASE_URL potřebuje být napojená
⏳ Backend domain negenerovaná
⏳ Frontend není nasazený

## Náklady

- Railway: $5/měsíc (první měsíc ZDARMA - $5 credit)
- Vercel: ZDARMA
- Cloudinary: ZDARMA (25GB)
