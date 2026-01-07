# Meteostanice Nová Ves u Batelova

Moderní webová aplikace pro meteorologickou stanici v Nové Vsi u Batelova.

## 🚀 Funkce

- **Veřejná část:**
  - Zobrazení aktuálního počasí
  - Archiv naměřených teplot (2008-2026)
  - Články o meteorologických jevech
  - Fotogalerie
  - Grafy a statistiky

- **Admin panel (chráněný přihlášením):**
  - Přidávání naměřených teplot (3x denně: 6:00, 12:00, 18:00)
  - Vytváření článků o bouřkách, orkánech atd.
  - Nahrávání fotografií
  - Firebase Firestore databáze
  - Firebase Storage pro obrázky

## 📦 Instalace

1. Nainstalujte závislosti:
```bash
npm install
```

2. Vytvořte Firebase projekt:
   - Jděte na https://console.firebase.google.com/
   - Vytvořte nový projekt
   - Přidejte webovou aplikaci
   - Zapněte Authentication (Email/Password)
   - Zapněte Firestore Database
   - Zapněte Storage

3. Nakonfigurujte Firebase:
   - Zkopírujte `.env.example` na `.env`
   - Vyplňte Firebase credentials z Firebase Console

4. Vytvořte prvního admin uživatele:
   - V Firebase Console → Authentication → Users
   - Přidejte uživatele s emailem a heslem

## 🏃 Spuštění

```bash
npm run dev
```

Aplikace poběží na `http://localhost:5173`

## 📝 Použití Admin Panelu

1. Přejděte na `/login`
2. Přihlaste se s admin účtem
3. V admin panelu můžete:
   - **Teploty**: Přidávat denní měření
   - **Články**: Vytvářet články o počasí
   - **Fotografie**: Nahrávat fotky

## 🏗️ Build pro produkci

```bash
npm run build
```

## 🔒 Firestore Security Rules

Doporučené security rules pro Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Všichni mohou číst
    match /{document=**} {
      allow read: if true;
    }
    
    // Pouze přihlášení uživatelé mohou zapisovat
    match /temperatures/{document} {
      allow write: if request.auth != null;
    }
    
    match /articles/{document} {
      allow write: if request.auth != null;
    }
    
    match /photos/{document} {
      allow write: if request.auth != null;
    }
  }
}
```

## 📱 Technologie

- **React 18** + TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Firebase** - Backend (Auth, Firestore, Storage)
- **React Router** - Routing
- **Recharts** - Grafy
- **Lucide React** - Ikony

## 👨‍💻 Autor

Josef Soukup - Meteorologická stanice Nová Ves u Batelova
