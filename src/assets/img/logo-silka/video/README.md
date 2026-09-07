# Video loop – siłka

## Generator
`social-loop.html` – interaktywny generator video w przeglądarce.

### Funkcje
- Canvas 2D animacja hantli + SIŁKA
- Rozmiary: 1080x1080 (feed), 1080x1920 (story/reels/tiktok), 400x400 (small)
- 60 FPS, 2s seamless loop
- Nagrywanie do WebM via MediaRecorder API (5s)
- Pobieranie PNG frame

### Jak wygenerować video
1. Otwórz `social-loop.html` w Chrome/Edge (Firefox też wspiera WebM)
2. Wybierz rozmiar (np. 1080x1920 dla Reels)
3. Kliknij "Nagraj WebM (5s)"
4. Plik `silka-loop-1080x1920-....webm` pobierze się automatycznie
5. Opcjonalnie konwertuj do MP4: https://cloudconvert.com/webm-to-mp4

### Gotowe pliki (ręcznie wygenerowane)
- Lottie JSON w `../lottie/` – można wyeksportować do MP4/GIF via LottieFiles
- SVG animowane w `../logo-animated.svg` – działa bez JS, można użyć jako video loop w OBS

### Użycie na social
- **Instagram Feed:** 1080x1080, loop 3-5s, dodaj muzykę w IG
- **Reels / TikTok:** 1080x1920, vertical, dodaj trending audio
- **Story:** 1080x1920, 5s, dodaj link do cennika
- **YouTube Shorts:** 1080x1920
- **Facebook Cover:** 1200x630 (og-cover-1200x630.png)

### Favicon animowany
Dla przeglądarek wspierających animowany favicon (Firefox):
```html
<link rel="icon" href="silka-loader.json" type="application/json">
```
Lub użyj GIF jako favicon (działa w niektórych przeglądarkach).

## Dodatkowe assety wygenerowane AI
- `og-cover-1200x630.png` – 1200x630 OG image
- `social-square-1080.png` – 1080x1080 square
- `favicon-512.png` – 512x512 base
