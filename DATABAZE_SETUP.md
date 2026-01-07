# Lokální vývoj - Možnosti databáze

## Možnost 1: Použít Railway PostgreSQL i pro vývoj (DOPORUČENO)

### Postup:
1. Vytvořte Railway účet: https://railway.app
2. New Project → Provision PostgreSQL
3. Klikněte na PostgreSQL → Connect tab
4. Zkopírujte "DATABASE_URL"
5. Vložte do `backend/.env` souboru

**Výhody:**
- Žádná lokální instalace PostgreSQL
- Stejné prostředí jako produkce
- $5/měsíc credit zdarma

## Možnost 2: Lokální PostgreSQL

### Instalace (Windows):
1. Stáhněte PostgreSQL: https://www.postgresql.org/download/windows/
2. Spusťte instalátor, nastavte heslo pro uživatele "postgres"
3. Po instalaci vytvořte databázi:
   ```powershell
   psql -U postgres
   CREATE DATABASE meteostanice;
   \q
   ```
4. Upravte `backend/.env`:
   ```
   DATABASE_URL=postgresql://postgres:VASE_HESLO@localhost:5432/meteostanice
   ```

## Možnost 3: Mock databáze (pouze testování)

Pokud chcete rychle otestovat bez databáze, backend má fallback na in-memory data.

**Omezení:**
- Data se ztratí při restartu serveru
- Pouze pro rychlé testování UI
- Není vhodné pro produkci

**Použití:**
V `backend/.env` zakomentujte DATABASE_URL:
```
# DATABASE_URL=postgresql://...
```

Backend automaticky použije mock data.

## Doporučený postup pro vývoj:

1. **Nejrychlejší start:** Možnost 3 (mock) → testujte frontend
2. **Před nasazením:** Možnost 1 (Railway) → ověřte produkční chování
3. **Pokud preferujete lokálně:** Možnost 2 (lokální PostgreSQL)

## Aktuální nastavení

Backend server je spuštěn, ale nelze se připojit k databázi.
Pro rychlé testování:
1. Ukončete backend (Ctrl+C v terminálu)
2. Zakomentujte DATABASE_URL v `backend/.env`
3. Restartujte backend: `node server.js`

Frontend funguje na http://localhost:5173
Backend poběží na http://localhost:3000
