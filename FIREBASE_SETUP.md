# 🔥 Firebase Setup - Krok za krokem

## 1. Vytvoření Firebase projektu

1. Jděte na https://console.firebase.google.com/
2. Klikněte na "Add project" / "Přidat projekt"
3. Zadejte název: `meteostanice-novaves`
4. Můžete vypnout Google Analytics (není potřeba)
5. Klikněte "Create project"

## 2. Nastavení webové aplikace

1. V Firebase konzoli klikněte na ikonu "Web" (`</>`)
2. Zadejte název aplikace: `Meteostanice Web`
3. Zaškrtněte "Also set up Firebase Hosting"
4. Klikněte "Register app"
5. **DŮLEŽITÉ**: Zkopírujte Firebase config objekt

## 3. Konfigurace projektu

Vytvořte soubor `.env` v kořenové složce projektu a vložte:

```env
VITE_FIREBASE_API_KEY=vaše-api-key-zde
VITE_FIREBASE_AUTH_DOMAIN=váš-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=váš-project-id
VITE_FIREBASE_STORAGE_BUCKET=váš-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=váš-sender-id
VITE_FIREBASE_APP_ID=váš-app-id
```

## 4. Zapnutí Authentication

1. V levém menu klikněte na "Build" → "Authentication"
2. Klikněte "Get started"
3. V záložce "Sign-in method" zvolte "Email/Password"
4. Zapněte "Email/Password" (první možnost)
5. Klikněte "Save"

## 5. Vytvoření admin uživatele

1. Zůstaňte v Authentication
2. Klikněte na záložku "Users"
3. Klikněte "Add user"
4. Zadejte:
   - Email: `josef.soukup@meteostanice.cz` (nebo váš email)
   - Password: Silné heslo (min. 6 znaků)
5. Klikněte "Add user"

## 6. Zapnutí Firestore Database

1. V levém menu "Build" → "Firestore Database"
2. Klikněte "Create database"
3. Vyberte "Start in production mode"
4. Zvolte lokaci: `europe-west3` (Frankfurt) - nejbližší ČR
5. Klikněte "Enable"

## 7. Nastavení Firestore Rules

1. V Firestore klikněte na záložku "Rules"
2. Vložte tento kód:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Všichni mohou číst data
    match /{document=**} {
      allow read: if true;
    }
    
    // Pouze přihlášení uživatelé mohou zapisovat
    match /temperatures/{doc} {
      allow write: if request.auth != null;
    }
    
    match /articles/{doc} {
      allow write: if request.auth != null;
    }
    
    match /photos/{doc} {
      allow write: if request.auth != null;
    }
  }
}
```

3. Klikněte "Publish"

## 8. Zapnutí Storage

1. V levém menu "Build" → "Storage"
2. Klikněte "Get started"
3. Zvolte "Start in production mode"
4. Použijte stejnou lokaci jako Firestore: `europe-west3`
5. Klikněte "Done"

## 9. Nastavení Storage Rules

1. V Storage klikněte na záložku "Rules"
2. Vložte tento kód:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Všichni mohou číst
    match /{allPaths=**} {
      allow read: if true;
    }
    
    // Pouze přihlášení uživatelé mohou nahrávat
    match /photos/{fileName} {
      allow write: if request.auth != null
                   && request.resource.size < 10 * 1024 * 1024  // max 10MB
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

3. Klikněte "Publish"

## 10. Spuštění projektu

```bash
npm run dev
```

Otevřete http://localhost:5173

## 11. Přihlášení do admin panelu

1. Jděte na http://localhost:5173/login
2. Přihlaste se emailem a heslem z kroku 5
3. Budete přesměrováni do admin panelu!

## 🎉 Hotovo!

Nyní můžete:
- Přidávat naměřené teploty
- Vytvářet články
- Nahrávat fotografie

Všechna data se ukládají do Firebase a jsou dostupná online!

## 📝 Poznámky

- Firebase má ZDARMA:
  - 50,000 čtení/den
  - 20,000 zápisů/den
  - 1 GB úložiště
  - 10 GB přenosů/měsíc

To je více než dostatečné pro meteorologickou stanici!
