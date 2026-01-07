# Meteostanice Backend

Backend API pro meteorologickou stanici Nová Ves u Batelova.

## 🚀 Deployment na Railway

### 1. Připravte Railway účet
1. Jděte na https://railway.app/
2. Registrujte se (GitHub login)
3. Vytvořte nový projekt

### 2. Přidejte PostgreSQL databázi
1. V Railway projektu klikněte "New"
2. Vyberte "Database" → "PostgreSQL"
3. Railway automaticky vytvoří databázi

### 3. Nasaďte backend
1. V Railway projektu klikněte "New"
2. Vyberte "GitHub Repo" (nebo "Empty Service")
3. Připojte tento repozitář
4. Nastavte Root Directory na `/backend`

### 4. Nastavte Environment Variables
V Railway přidejte tyto proměnné:

```
DATABASE_URL=<automaticky z PostgreSQL>
JWT_SECRET=vytvorte-nahodny-dlouhy-retezec-zde
ADMIN_EMAIL=admin@meteostanice.cz
ADMIN_PASSWORD=VaseSilneHeslo123!
CLOUDINARY_CLOUD_NAME=vase-cloudinary-jmeno
CLOUDINARY_API_KEY=vas-api-key
CLOUDINARY_API_SECRET=vas-api-secret
```

### 5. Cloudinary Setup (pro fotky - ZDARMA)
1. Jděte na https://cloudinary.com/
2. Registrujte se (free tier: 25GB storage, 25GB bandwidth/měsíc)
3. V Dashboard zkopírujte: Cloud Name, API Key, API Secret
4. Přidejte do Railway env variables

### 6. Deploy
Railway automaticky nasadí po push do GitHub.

### 7. Vytvoření prvního admin uživatele
Po nasazení zavolejte:
```bash
POST https://vase-railway-url.railway.app/api/auth/register
{
  "email": "admin@meteostanice.cz",
  "password": "VaseSilneHeslo123!",
  "name": "Josef Soukup"
}
```

## 🔌 API Endpoints

### Auth
- `POST /api/auth/register` - Registrace (pouze pro setup)
- `POST /api/auth/login` - Přihlášení
- `GET /api/auth/verify` - Ověření tokenu

### Temperatures
- `GET /api/temperatures/year/:year` - Získat teploty pro rok
- `POST /api/temperatures` - Přidat teplotu (auth)
- `DELETE /api/temperatures/:id` - Smazat teplotu (auth)

### Articles
- `GET /api/articles` - Všechny články
- `GET /api/articles/:slug` - Článek podle slug
- `POST /api/articles` - Vytvořit článek (auth)
- `PUT /api/articles/:id` - Upravit článek (auth)
- `DELETE /api/articles/:id` - Smazat článek (auth)

### Photos
- `GET /api/photos` - Všechny fotky
- `POST /api/photos` - Nahrát fotku (auth)
- `DELETE /api/photos/:id` - Smazat fotku (auth)

## 💰 Ceny

### Railway (Free Tier)
- **$5 kredit měsíčně zdarma**
- PostgreSQL database
- Automatické deploymenty
- SSL certifikáty
- **Dostatečné pro meteostanici!**

### Cloudinary (Free Tier)
- 25 GB storage
- 25 GB bandwidth/měsíc
- Optimalizace obrázků
- **Zdarma navždy!**

**Celkem: ZDARMA** (Railway $5/měsíc pokrývá běžný provoz)

## 🔧 Lokální vývoj

```bash
cd backend
npm install
cp .env.example .env
# Upravte .env s vašimi údaji
npm run dev
```
