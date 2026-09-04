# Raport strony SFC24.eu

## 1. Przegląd techniczny

| Aspekt | Wartość |
|---|---|
| Framework | Angular 7.x (SSR via @ng-toolkit/universal + Express) |
| Build | `ng build` + `webpack --config webpack.server.config.js` + `node local.js` |
| Styling | Bootstrap 3 + Font Awesome 4 + ngx-gallery + jQuery 3.3.1 |
| Dane | REST API (`admin.sfc24.eu/lists/`) + assets statyczne |
| Routing | 9 tras: `/`, `/oferta`, `/cennik`, `/galeria`, `/kontakt`, `/faq`, `/regulamin`, `/rodo`, `/grafik` |

---

## 2. Status budowy (dane z 2026-09-04)

### ✅ Co działa

- `npm install --legacy-peer-deps` — zakończone sukcesem.
- `ng build` — zakończone sukcesem (wymagany `NODE_OPTIONS=--openssl-legacy-provider` przez Node 22 + stary webpack).
- SSR bundle (`ng run sfc-webpage:server`) — buduje się poprawnie.
- `ng serve` — startuje, strona główna ładuje (HTTP 200, title `SFC 24`).

### ⚠️ Problem: wszystkie podstrony zwracają 404

Podczas `ng serve`:
- `GET /` → 200 OK (trend Angular, wyrenderowana aplikacja)
- `GET /oferta`, `/cennik`, `/galeria`, `/kontakt`, `/faq`, `/regulamin`, `/rodo`, `/grafik` → **HTTP 404 "Cannot GET /..."** z nagłówkiem `X-Powered-By: Express`

To nie jest błąd Angular Routera (wtedy byłoby 200 z komponentem `ErrorPageComponent`).  
Zamiast tego `ng serve` (lub konfiguracja proxy) odbiera żądania przed Angularem i zwraca 404 Express.

**Możliwe przyczyny:**
1. `ng serve` używa starej wersji Angular CLI z nieprawidłową konfiguracją `base href` w `index.html`.
2. Brakuje przekierowań (`/oferta` → `/`) w konfiguracji dev servera.
3. Brak `useHash: true` w `RouterModule.forRoot()` (obecnie zakomentowane).

### ❌ Problemy środowiskowe (brakujące pakiety w `package.json`)

Plik `server.ts` importuje moduły, których **nie ma** w `package.json`:
- `compression`
- `body-parser`
- `cors`

Bez nich productionowy serwer SSR **nie wystartuje** (`npm run server` → `Cannot find module 'compression'`).

---

## 3. Lint (`ng lint`) — 222 błędy w 10 plikach

Wszystkie błędy to naruszenia stylu (TSLint / codelyzer):

| Plik | Liczba błędów | Główne problemy |
|---|---|---|
| `src/app/app.module.ts` | ~30 | za dużo spacji przed `from`, cudzysłowy `"` zamiast `'`, niepotrzebne `string` |
| `src/app/app.routes.ts` | ~6 | za dużo spacji przed `from`, cudzysłowy |
| `src/app/app.component.ts` | ~2 | za dużo spacji przed `from`, cudzysłowy, typ `string` |
| `src/app/app.browser.module.ts` | ~2 | za dużo spacji przed `from` |
| `src/app/app.component.spec.ts` | ~10 | za dużo spacji przed `from`, cudzysłowy, typ `string` |
| `src/main.ts` | ~4 | za dużo spacji, brak spacji w komentarzu, `let` zamiast `const` |
| `src/main.server.ts` | 3 | trailing whitespace, brak newline na końcu |
| `src/http.config.ts` | 3 | cudzysłowy, `else` w złym miejscu, niepotrzebny typ `string` |
| `src/app/services/ngx-gallery.service.ts` | 5 | cudzysłowy `"`, brak średników |
| `src/app/services/ngx-gallery.service.spec.ts` | 1 | cudzysłowy `"` |

Brak reguł `use-input-property-decorator`, `use-output-property-decorator`, `use-life-cycle-interface` w TSLint 5.x — ostrzeżenia można zignorować lub zaktualizować `tslint.json`.

---

## 4. Typy (TypeScript)

Przy `tsc --noEmit`:
- Błędy występują wyłącznie w `node_modules/@types/jquery/misc.d.ts` (źle sformatowane d.ts z nowszej wersji `@types/jquery`).
- Brak błędów w kodzie źródłowym `src/`.

Rozwiązanie: dopisać `"skipLibCheck": true` do `tsconfig.json` lub zablokować wersję `@types/jquery` na `<3.3.0`.

---

## 5. Dostępność na produkcji

| Host | Status |
|---|---|
| `https://sfc24.eu/` | **HTTP 403 Forbidden** (nginx/1.14.2) — strona niedostępna |
| `https://www.sfc24.eu/` | **SSL error** — certyfikat nie obejmuje `www` |
| `https://admin.sfc24.eu/lists/` | **HTTP 200** — API odpowiada poprawnie (dane FAQ zwracane) |
| `https://admin.sfc24.eu/lists/galleries/` | **HTTP 404** — brak endpointu galerii |

---

## 6. Spis treści i funkcjonalności

### Strony (komponenty)

| Trasa | Komponent | Treść | Status |
|---|---|---|---|
| `/` | `MainPageComponent` | Tekst hardkodowany: płatności, godziny, oferta treningowa | ✅ |
| `/oferta` | `OfferPageComponent` | Plik HTML 3 linie, prawie pusty | ⚠️ brak treści |
| `/cennik` | `PricePageComponent` | 28 linii HTML, 4 wystąpienia "SFC/cennik/ofert" | ✅ częściowo |
| `/galeria` | `GalleryPageComponent` | Komentarz w HTML — galeria wyłączona | ⚠️ wyłączona |
| `/kontakt` | `ContactPageComponent` | 4 adresy, telefon, e-mail (hardkodowane) | ✅ |
| `/faq` | `FaqPageComponent` | Ładowane z API (`admin.sfc24.eu/lists/`, tytuł "FAQ") | ✅ |
| `/regulamin` | `StatutePageComponent` | 232 linii HTML, treść obecna | ✅ |
| `/rodo` | `RodoPageComponent` | Plik HTML 4 linie, pusty | ⚠️ brak treści |
| `/grafik` | `SchedulePageComponent` | Tekst "grafik-page works!" (stub) | ❌ placeholder |

### API i dane

- `ListService` ładuje listy z `admin.sfc24.eu/lists/` przy starcie aplikacji.
- Używane przez komponent `<app-list-element>` (FAQ).
- Galerie (`/galleries/`) zwracają 404 — komponent `NgxGalleryService` może nie działać.
- `environment.prod.ts` ustawia `production: true` i zmienia API na `https://admin.sfc24.eu/`.

---

## 7. Znane dziwactwa

1. **`src/environments/environment.ts` ma dwie deklaracje `export const environment`** (linia 5 i 9) — nadpisanie, nie błąd, ale jest mylące.
2. **`dist/` jest śledzone w git?** — nie, ale `server.ts` generuje `dist/server/main.js` przez `ng run`, a `webpack.server.config.js` ładuje `./dist/server/main` (moduł mapowania lazy).
3. **`@agm/core` i `angulartics2`** są zakomentowane w module — można usunąć z zależności.
4. **Brak `package-lock.json`** — każdy `npm install` może ściągnąć różne wersje zależnych pakietów.
5. **Stary Node.js** — projekt wymaga Node < 18 (webpack 3, Angular 7), obecnie na serwerze jest Node 22.

---

## 8. Podsumowanie priorytetów

| Priorytet | Znalezisko | Rekomendacja |
|---|---|---|
| 🔴 WYSOKI | Brak `compression`, `body-parser`, `cors` w `package.json` | Dodać pakiety lub usunąć importy z `server.ts` |
| 🔴 WYSOKI | Wszystkie podstrony 404 w dev | Sprawdzić `ng serve` proxy / `base href` / użyć `useHash: true` |
| 🟠 ŚREDNI | 222 błędy lint | Naprawić cudzysłowy, spacje, `let` → `const` |
| 🟠 ŚREDNI | `/oferta` i `/rodo` prawie puste | Uzupełnić treść |
| 🟠 ŚREDNI | `/grafik` to placeholder | Zastąpić rzeczywistym harmonogramem |
| 🟡 NISKI | `sfc24.eu` zwraca 403 | Sprawdzić konfigurację nginx / firewall |
| 🟡 NISKI | `www.sfc24.eu` SSL error | Dodać `www` do certyfikatu lub przekierować |
| 🟡 NISKI | Stary stack (Angular 7, Node req < 18) | Rozważyć migrację do Angular 15+ |

---

*Raport wygenerowany: 2026-09-04*  
*Repozytorium: `/home/pawel/Dokumenty/dev/sfcwebpage`*
