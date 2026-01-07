# Návod na nasazení (deployment)

## 1. Railway - Backend a PostgreSQL

### Registrace a vytvoření projektu
1. Jděte na https://railway.app
2. Zaregistrujte se (GitHub účet)
3. Klikněte na "New Project" → "Provision PostgreSQL"
4. Railway automaticky vytvoří PostgreSQL databázi

### Nasazení backendu
1. V Railway projektu klikněte na "+ New" → "GitHub Repo"
2. Připojte GitHub účet a vyberte váš repozitář
3. Railway automaticky detekuje Node.js a začne build

### Nastavení Environment Variables
V Railway projektu → Settings → Variables přidejte:

```
DATABASE_URL=<automaticky vyplněno z PostgreSQL>
JWT_SECRET=<vygenerujte silný klíč>
CLOUDINARY_CLOUD_NAME=<z Cloudinary>
CLOUDINARY_API_KEY=<z Cloudinary>
CLOUDINARY_API_SECRET=<z Cloudinary>
ADMIN_EMAIL=admin@meteostanice.cz
ADMIN_PASSWORD=<silné heslo>
ADMIN_NAME=Josef Soukup
```

### Získání backend URL
1. V Railway projektu → Settings → Domains
2. Klikněte "Generate Domain"
3. Zkopírujte URL (např. `https://your-app.railway.app`)

## 2. Cloudinary - Úložiště fotek

### Registrace
1. Jděte na https://cloudinary.com
2. Zaregistrujte se (free tier: 25GB storage + bandwidth)
3. Po přihlášení jděte do Dashboard

### Získání credentials
1. V Dashboard najděte:
   - Cloud Name
   - API Key
   - API Secret
2. Zkopírujte je do Railway environment variables

## 3. Frontend deployment

### Možnost A: Vercel (doporučeno)
1. Jděte na https://vercel.com
2. Import GitHub repozitáře
3. Framework Preset: Vite
4. Root Directory: `.`
5. Environment Variables:
   ```
   VITE_API_URL=https://your-backend.railway.app/api
   ```
6. Deploy

### Možnost B: Netlify
1. Jděte na https://netlify.com
2. Import GitHub repozitáře
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Environment Variables:
   ```
   VITE_API_URL=https://your-backend.railway.app/api
   ```
6. Deploy

## 4. První přihlášení

Po nasazení:
1. Otevřete váš web → přejděte na `/login`
2. Přihlaste se s credentials z ADMIN_EMAIL a ADMIN_PASSWORD
3. Budete přesměrováni na admin dashboard
4. Můžete začít přidávat teploty, články a fotky

## 5. Zkušební data

### Přidání testovacích teplot
V admin dashboardu → Teploty → vyplňte formulář:
- Datum: 2024-01-15
- Čas: 06:00
- Teplota: -2.5
- Vlhkost: 85
- Tlak: 1013.2

### Kontrola
Přejděte na `/temperatures/2024` a měli byste vidět graf s daty.

## 6. Náklady

**Railway:**
- $5/měsíc credit zdarma
- Backend + PostgreSQL: ~$5-7/měsíc
- První měsíc ZDARMA díky creditu

**Cloudinary:**
- Free tier: 25GB storage + 25GB bandwidth
- Pro malý web ZDARMA

**Vercel/Netlify:**
- Free tier pro hobby projekty
- ZDARMA

**Celkem: ~$5-7/měsíc** (první měsíc zdarma)

## Troubleshooting

### Backend se nespustí
- Zkontrolujte logy v Railway
- Ověřte, že všechny env variables jsou nastaveny
- Zkontrolujte DATABASE_URL připojení

### Frontend neukazuje data
- Zkontrolujte VITE_API_URL v environment variables
- Otevřete browser console (F12) → hledejte CORS errory
- Ověřte, že backend běží (otevřete backend URL v browseru)

### Fotky se nenahrávají
- Zkontrolujte Cloudinary credentials
- Ověřte, že jsou správně nastaveny v Railway env variables
