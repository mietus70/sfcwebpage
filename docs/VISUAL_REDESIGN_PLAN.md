# SFC24 - Plan Modernizacji Wizualnej

**Data**: 2026-09-04  
**Status**: W trakcie realizacji  
**Wersja**: 1.0

---

## 📋 Spis treści

1. [Analiza obecnego stanu](#analiza-obecnego-stanu)
2. [Plan modernizacji](#plan-modernizacji)
3. [Kierunek wizualny](#kierunek-wizualny)
4. [Technologie](#technologie)
5. [Status implementacji](#status-implementacji)

---

## 🔍 Analiza obecnego stanu

### Zidentyfikowane problemy:

1. **Przestarzały design (2013)**
   - Stopka wyświetla "FITNESS THEME 2013"
   - Stary motyw fitness z lat 2010-tych
   - Brak nowoczesnych trendów UI/UX

2. **Konflikty techniczne**
   - Bootstrap 3 w angular.json + Bootstrap 4 w index.html (CDN)
   - Mieszanka stylów globalnych i lokalnych
   - Puste pliki CSS w większości komponentów

3. **Brak spójności wizualnej**
   - Każdy komponent wygląda inaczej
   - Brak systemu designu (kolorów, typografii, spacingu)
   - Niekonsekwentne użycie Bootstrapa

4. **Problemy z layoutem**
   - Banner wyświetla tylko 1 obraz (reszta zakomentowana)
   - Brak wyraźnej hierarchii wizualnej
   - Słaba responsywność (tylko 1 breakpoint)

5. **Brak interakcji**
   - Żadnych hover effects
   - Brak transitions i animacji
   - Statyczny wygląd

6. **Słaba prezentacja treści**
   - Dużo tekstu bez wizualnego podziału
   - Brak kart, ikon, wyróżnień
   - Nieczytelne informacje o płatnościach

7. **Problemy techniczne**
   - Mnóstwo zakomentowanego kodu HTML
   - Brakujące meta tagi SEO
   - Brak favicon

---

## 📋 Plan modernizacji

### FAZA 1: Fundamenty (Priorytet: KRYTYCZNY) ✅ W REALIZACJI

#### 1.1 System Designu
- [x] **Paleta kolorów** - nowoczesna, fitness-orientowana
- [x] **Typografia** - system fontów i nagłówków
- [x] **Spacing system** - konsystentny system odstępów
- [x] **CSS Variables** - zmienne dla kolorów, fontów, spacingu

#### 1.2 Globalne style
- [ ] Stworzyć kompletny system globalnych stylów
- [ ] Usunąć konflikt Bootstrap 3 vs 4
- [ ] Zdecydować: Bootstrap 5 lub własny system

### FAZA 2: Komponenty główne (Priorytet: WYSOKI)

#### 2.1 Header & Navigation
- [ ] Modernizacja top-menu (sticky, blur, shadow)
- [ ] Logo z lepszą widocznością
- [ ] Nawigacja z hover effects
- [ ] Mobile menu z animacją

#### 2.2 Banner/Header image
- [ ] Hero section z overlay gradient
- [ ] Carousel/slider z smooth transitions
- [ ] Call-to-action button
- [ ] Responsywne obrazy

#### 2.3 Strona główna
- [ ] Hero section
- [ ] Sekcja "O nas" z kartami
- [ ] Sekcja "Oferta"
- [ ] Sekcja "Pierwsza wizyta"
- [ ] Sekcja "Płatności"
- [ ] Sekcja "Zajęcia"
- [ ] Sekcja "Lokalizacje"
- [ ] CTA section

#### 2.4 Footer
- [ ] Rozbudowa footer (3-4 kolumny)
- [ ] Social media
- [ ] Gradient background

### FAZA 3: Podstrony (Priorytet: ŚREDNI)

- [ ] Oferta (Offer Page)
- [ ] Cennik (Price Page)
- [ ] Kontakt (Contact Page)
- [ ] FAQ z accordion
- [ ] Galeria (Gallery Page)

### FAZA 4: Ulepszenia UX (Priorytet: ŚREDNI)

- [ ] Animacje i transitions
- [ ] Responsywność (mobile-first)
- [ ] Performance optimization
- [ ] Accessibility (A11y)

### FAZA 5: Dodatki (Priorytet: NISKI)

- [ ] Interaktywne elementy
- [ ] Mikro-interakcje
- [ ] Dark mode

---

## 🎨 Kierunek wizualny

### Styl: **Modern Fitness / Athletic**

- Czysty, minimalistyczny design
- Dużo białej przestrzeni
- Energetyczne akcenty kolorystyczne
- Zdjęcia wysokiej jakości
- Geometryczne elementy
- Gradient overlays

### Paleta kolorów

```css
/* Primary Colors */
--color-primary: #FF6B35;        /* Energetyczny pomarańcz */
--color-primary-dark: #E85A2A;
--color-primary-light: #FF8C61;

/* Secondary Colors */
--color-secondary: #2C3E50;      /* Ciemny granat */
--color-secondary-dark: #1A252F;
--color-secondary-light: #34495E;

/* Accent Colors */
--color-accent: #00D9FF;         /* Cyan */
--color-accent-dark: #00B8D9;

/* Neutral Colors */
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;

/* Semantic Colors */
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;
```

### Typografia

```css
/* Font Family */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Spacing System

```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
```

### Inspiracje

- Nike Training Club
- Peloton
- Gymshark
- Equinox

---

## 🛠️ Technologie

1. **CSS Framework**: Bootstrap 5 (upgrade z 3/4) lub własny system
2. **Icons**: Font Awesome 6
3. **Fonts**: Google Fonts (Poppins + Inter)
4. **Animations**: CSS transitions + custom animations
5. **Images**: WebP format + lazy loading
6. **Maps**: Google Maps API

---

## 📊 Status implementacji

### ✅ Ukończone

- [x] Faza 1.1: System Designu (CSS Variables, paleta kolorów, typografia, spacing)
- [x] Google Fonts integration (Inter + Poppins)
- [x] Globalne style bazowe (body, headings, links)
- [x] Faza 2.1: Header & Navigation (sticky header, hover effects, mobile menu)
- [x] Faza 2.2: Banner Header (hero section z 3 slajdami, auto-slider, CTA)
- [x] Faza 2.3: Strona główna (intro, płatności, pierwsza wizyta, zajęcia, lokalizacje)
- [x] Faza 2.4: Footer (4 kolumny, social media, nowoczesny design)
- [x] Faza 3.1: Offer Page (6 kart usług z ikonami i cechami)
- [x] Faza 3.2: Price Page (3 karty cenowe, karnet OPEN, metody płatności)
- [x] Faza 3.3: Contact Page (quick contact, 4 lokalizacje z mapami)
- [x] Faza 3.4: FAQ Page (7 pytań z accordion, sekcja dokumentów)

### 🔄 W trakcie

- [ ] Faza 3.5: Gallery Page (opcjonalnie)
- [ ] Faza 4: Ulepszenia UX (animacje, performance, A11y)

### ⏳ Zaplanowane

- [ ] Faza 2: Komponenty główne
- [ ] Faza 3: Podstrony
- [ ] Faza 4: Ulepszenia UX
- [ ] Faza 5: Dodatki

---

## 📝 Notatki

### Decyzje techniczne

- Wybrano Google Fonts (Inter + Poppins) dla nowoczesnego wyglądu
- Zastosowano CSS variables dla łatwej zmiany motywu
- Mobile-first approach w responsywności
- Zachowano kompatybilność z Bootstrap 5

### Wytyczne

- Minimalny rozmiar tekstu: 16px (1rem) dla body
- Touch targets: minimum 44px × 44px
- Color contrast: WCAG AA compliance
- Animacje: max 300ms dla micro-interactions

---

**Ostatnia aktualizacja**: 2026-09-04
