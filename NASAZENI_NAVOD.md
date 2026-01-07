# 🚀 NÁVOD NA NASAZENÍ - Meteostanice Nová Ves

## ✅ Krok 1: GitHub (HOTOVO ✓)

Repozitář: https://github.com/dakafi1993/web-po-as-.git
- ✓ Kód nahrán
- ✓ Git inicializován
- ✓ První commit vytvořen

---

## 📦 Krok 2: Railway - Backend Deployment

### 2.1 Registrace a příprava
1. Otevřete: **https://railway.app**
2. Klikněte na **"Start a New Project"** / **"Login with GitHub"**
3. Přihlaste se GitHub účtem (dakafi1993)

### 2.2 Vytvoření PostgreSQL databáze
1. V Railway klikněte **"+ New Project"**
2. Vyberte **"Provision PostgreSQL"**
3. Railway vytvoří PostgreSQL databázi automaticky
4. Klikněte na PostgreSQL service → záložka **"Variables"**
5. Zkopírujte hodnotu **`DATABASE_URL`** (automaticky vygenerovaná)

### 2.3 Nasazení Backend služby
1. Ve stejném projektu klikněte **"+ New Service"**
2. Vyberte **"GitHub Repo"**
3. Připojte GitHub účet (pokud ještě není)
4. Vyberte repozitář: **`dakafi1993/web-po-as-`**
5. Railway automaticky detekuje Node.js projekt

### 2.4 Konfigurace Root Directory
Backend je v podsložce `backend/`, musíme to Railway říct:

1. Klikněte na backend service → **Settings**
2. Najděte **"Root Directory"**
3. Nastavte: **`backend`**
4. **Deploy** se automaticky restartuje

### 2.5 Nastavení Environment Variables
1. Klikněte na backend service → **Variables**
2. Přidejte tyto proměnné (klikněte "+ New Variable"):

```
DATABASE_URL          → (zkopírujte z PostgreSQL služby)
JWT_SECRET            → vygenerujte silný klíč (např: super-tajny-jwt-klic-meteostanice-2026)
NODE_ENV              → production
PORT                  → ${{PORT}} (nechejte Railway automaticky)

CLOUDINARY_CLOUD_NAME → (vyplníte po Cloudinary registraci - Krok 3)
CLOUDINARY_API_KEY    → (vyplníte po Cloudinary registraci)
CLOUDINARY_API_SECRET → (vyplníte po Cloudinary registraci)

ADMIN_EMAIL           → admin@meteostanice.cz
ADMIN_PASSWORD        → VašeSilnéHeslo123!
ADMIN_NAME            → Josef Soukup
```

3. Klikněte **"Deploy"** → Backend se nasadí

### 2.6 Získání Backend URL
1. Klikněte na backend service → **Settings**
2. Sekce **"Networking"** → **"Public Networking"**
3. Klikněte **"Generate Domain"**
4. Railway vygeneruje URL: `https://web-po-as-production.up.railway.app`
5. **ZKOPÍRUJTE SI TUTO URL** - budete ji potřebovat pro frontend

### 2.7 Test Backend API
Otevřete v prohlížeči:
```
https://VASE-BACKEND-URL.railway.app/health
```
Měli byste vidět: `{"status":"OK"}`

---

## 🖼️ Krok 3: Cloudinary - Úložiště Fotek

### 3.1 Registrace
1. Otevřete: **https://cloudinary.com/users/register_free**
2. Zaregistrujte se (email + heslo)
3. Free tier: 25GB storage + 25GB bandwidth/měsíc (ZDARMA)

### 3.2 Získání credentials
1. Po přihlášení přejděte do **Dashboard**
2. Zkopírujte tyto hodnoty:
   - **Cloud Name** (nahoře pod logem)
   - **API Key** (v sekci "Account Details")
   - **API Secret** (klikněte na "Show" vedle API Key)

### 3.3 Přidání do Railway
1. Vraťte se do Railway → backend service → **Variables**
2. Vyplňte:
   ```
   CLOUDINARY_CLOUD_NAME → váš Cloud Name
   CLOUDINARY_API_KEY    → váš API Key
   CLOUDINARY_API_SECRET → váš API Secret
   ```
3. Service se automaticky restartuje

---

## 🌐 Krok 4: Vercel - Frontend Deployment

### 4.1 Registrace a import projektu
1. Otevřete: **https://vercel.com**
2. Klikněte **"Sign Up"** / **"Continue with GitHub"**
3. Přihlaste se GitHub účtem
4. Klikněte **"Add New..."** → **"Project"**
5. Import repozitáře: **`dakafi1993/web-po-as-`**

### 4.2 Konfigurace Build Settings
Vercel automaticky detekuje Vite, ale zkontrolujte:

- **Framework Preset:** Vite
- **Root Directory:** `.` (kořenová složka, NE backend)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### 4.3 Environment Variables
Před deployem přidejte:

1. Klikněte **"Environment Variables"**
2. Přidejte:
   ```
   VITE_API_URL → https://VASE-BACKEND-URL.railway.app/api
   ```
   (Nahraďte `VASE-BACKEND-URL` za skutečnou URL z Railway)

3. Klikněte **"Deploy"**

### 4.4 Získání Frontend URL
Po dokončení deploye Vercel ukáže URL, např:
```
https://web-po-as.vercel.app
```

---

## ✅ Krok 5: Finální Test

### 5.1 Test přihlášení
1. Otevřete frontend URL: `https://web-po-as.vercel.app`
2. Klikněte na **"Přihlásit"** (vpravo nahoře)
3. Přihlaste se:
   - Email: `admin@meteostanice.cz`
   - Heslo: (co jste nastavili v `ADMIN_PASSWORD`)

### 5.2 Test administrace
Po přihlášení:
1. Přejděte na **Admin Dashboard**
2. Záložka **"Teploty"**:
   - Datum: 2026-01-07
   - Čas: 06:00
   - Teplota: -2.5
   - Klikněte "Přidat měření"
3. Zkontrolujte: Přejděte na `/temperatures/2026` → měli byste vidět graf s daty

### 5.3 Test fotogalerie
1. V Admin Dashboard → záložka **"Fotky"**
2. Nahrajte testovací fotografii
3. Zkontrolujte: Přejděte na `/foto` → fotka by měla být vidět

---

## 💰 Náklady

| Služba | Cena | Poznámka |
|--------|------|----------|
| **Railway** | $5/měsíc | První měsíc ZDARMA ($5 credit) |
| **Cloudinary** | ZDARMA | 25GB storage (dostatečné) |
| **Vercel** | ZDARMA | Hobby tier |
| **GitHub** | ZDARMA | Public repository |
| **CELKEM** | **~$5/měsíc** | První měsíc ZDARMA |

---

## 🔧 Troubleshooting

### Backend se nespustí v Railway
- Zkontrolujte: Settings → Root Directory = `backend`
- Zkontrolujte: Variables → všechny proměnné vyplněny
- Podívejte se do: View Logs → hledejte chybové hlášky

### Frontend nevidí data z backendu
- Zkontrolujte: VITE_API_URL obsahuje `/api` na konci
- Otevřete browser console (F12) → hledejte CORS errory
- Ověřte: Backend health endpoint funguje

### Fotky se nenahrávají
- Zkontrolujte Cloudinary credentials v Railway Variables
- Ověřte: Všechny 3 hodnoty (CLOUD_NAME, API_KEY, API_SECRET) jsou vyplněny

### Login nefunguje
- Zkontrolujte: ADMIN_EMAIL a ADMIN_PASSWORD v Railway Variables
- První přihlášení vytvoří admin účet automaticky

---

## 📞 Podpora

V případě problémů zkontrolujte:
1. Railway Logs: Backend service → Deployments → View Logs
2. Vercel Logs: Project → Deployments → View Function Logs
3. Browser Console: F12 → Console tab

---

## 🎉 Hotovo!

Web běží na:
- **Frontend:** https://web-po-as.vercel.app
- **Backend API:** https://web-po-as-production.up.railway.app

Zákazník (Josef Soukup) může:
- Přihlásit se do adminu
- Přidávat teploty 3x denně
- Publikovat články
- Nahrávat fotografie
- Vše se ukládá do PostgreSQL databáze
- Fotky jsou na Cloudinary
