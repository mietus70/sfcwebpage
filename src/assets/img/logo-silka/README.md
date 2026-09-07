# Siłka – Nowe logo / Rebranding SFC24

## Kontekst
Stare logo: SFC 24 z limonkowym #B5D334 akcentem na czarnym tle.
Nowa kolorystyka strony (design tokens z `src/styles.css`):
- **Primary:** #FF6B35 (energetyczny pomarańcz)
- **Primary Dark:** #E85A2A
- **Secondary:** #1E293B (granat / dark navy – header, footer)
- **Accent:** #06B6D4 (cyan – detale)
- **White:** #FFFFFF

Nowa nazwa: **siłka** – potoczna, mocna, zapadająca w pamięć, idealna dla siłowni 24/7.

---

## Propozycje

### 01. Wordmark Split – Minimal (REKOMENDOWANY jako minimalistyczny)
- `logo-silka-wordmark-dark.svg` / `logo-silka-wordmark-light.svg`
- `ai-proposal-1.png` / `ai-proposal-4-lowercase.png`
- **SIŁ** w granacie/bieli + **KA** w pomarańczu
- Font: Poppins ExtraBold 800, letter-spacing -2.5
- Zalety: czytelny w małym rozmiarze, nowoczesny, lekki, pasuje do Poppins używanego w nagłówkach strony

### 02. Icon + Wordmark – Hantla (REKOMENDOWANY jako główny do headera)
- `logo-silka-main-dark.svg` / `logo-silka-main-light.svg`
- `ai-proposal-2-dark.png` – **najlepszy do wdrożenia w headerze**
- `final-transparent-dark.png` – **finalne logo wdrożone jako `assets/img/logo.png`**
- Pomarańczowa hantla (3-4 talerze) z lewej, biała SIŁKA po prawej
- Kolory: #FFFFFF + #FF6B35 na #1E293B (header)
- Komunikuje siłownię natychmiast, dynamiczny, mocny
- Wysokość headera 44px – idealnie się skaluje

### 03. Badge SIŁKA 24 – Ewolucja SFC
- `logo-silka-badge.svg`
- `ai-proposal-3-badge.png`
- Zachowuje kształt starego logo SFC (skośny badge, zaokrąglenia)
- Lewa część granat #1E293B z białą SIŁKA, prawa pomarańcz #FF6B35 z granatową 24
- Biała obwódka – premium look
- Dla klientów przywiązanych do "24" – pokazuje ciągłość

### 04. Lowercase Friendly
- `proposal-4-lowercase.svg` / `proposal-4-lowercase-dark.svg`
- Małe litery "siłka" – przyjazny, młodzieżowy vibe
- SIŁ granat + KA pomarańcz + detal cyan #06B6D4

### 05. Ikona / Favicon
- `final-logo-icon.png` / `final-logo-icon.png` – litera S jako hantla
- Do favicon, social media avatar, app icon, merch
- Kolory: #FF6B35 + #1E293B

---

## Wdrożenie

### Pliki produkcyjne podmienione:
- `src/assets/img/logo.png` → nowe logo `siłka` z hantlą, białe na transparentnym (final-transparent-dark.png)
- `src/assets/img/logo-light.png` → wersja na jasne tło (SIŁ granat, KA pomarańcz)
- `src/assets/img/logo-dark.png` → wersja na ciemne tło
- `src/assets/img/logo-icon.png` → ikona S

### Podgląd:
Otwórz `preview.html` w przeglądarce lub na live preview: `/preview.html`

### Użycie w kodzie:
```html
<!-- Header (ciemne tło) -->
<img src="assets/img/logo.png" alt="Siłka - Siłownia 24/7" style="height:44px">

<!-- Jasne tło -->
<img src="assets/img/logo-light.png" alt="Siłka">

<!-- Favicon -->
<link rel="icon" href="assets/img/logo-icon.png">
```

### Rekomendacja końcowa:
**System 2-logo:**
1. Główne: `logo.png` (hantla + SIŁKA biała) – header, footer, ciemne tła
2. Alternatywne: `logo-light.png` (SIŁ granat / KA pomarańcz) – jasne tła, dokumenty, faktury
3. Ikona: `logo-icon.png` – social, favicon
4. Opcjonalnie badge `logo-silka-badge.svg` jeśli chcesz zachować "24" w komunikacji

---

## Dlaczego te kolory działają?

- #FF6B35 to kolor CTA na stronie (przyciski .btn-sfc-primary, shadow-primary) – logo naturalnie współgra z przyciskami
- #1E293B to kolor headera (rgba 30,41,59) – logo białe ma kontrast 15:1, spełnia WCAG AAA
- #06B6D4 jako mały akcent (kropka nad i, underline) dodaje świeżości i nawiązuje do accent-color w design systemie
- Font Poppins 800/900 jest już używany w --font-heading – spójność typograficzna

---

## Pliki
- `preview.html` – interaktywny przegląd wszystkich propozycji na ciemnym/jasnym tle
- `*.svg` – wektory gotowe do dalszej edycji w Figma / Illustrator
- `*.png` – rastry AI wygenerowane jako inspiracja + finalne transparentne

Wszystko w: `src/assets/img/logo-silka/`
