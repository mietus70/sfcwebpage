# Lottie – siłka

## Pliki
- `silka-logo.json` – pełne logo SIŁKA + hantla, animacja lift 2s loop, 400x100, 60fps, 120 frames. Do hero, intro, website loader.
- `silka-loader.json` – sam hantel, puls + lekka rotacja, 120x120, 90 frames, idealny jako favicon loader, button loading, app splash.

## Jak użyć

### Web (lottie-web)
```html
<script src="https://unpkg.com/lottie-web@5.12.2/build/player/lottie.min.js"></script>
<div id="lottie-logo" style="width:400px;height:100px"></div>
<script>
  lottie.loadAnimation({
    container: document.getElementById('lottie-logo'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/img/logo-silka/lottie/silka-logo.json'
  });
</script>
```

### React / Next.js
```bash
npm install lottie-react
```
```jsx
import Lottie from 'lottie-react';
import logoAnim from './silka-logo.json';
<Lottie animationData={logoAnim} loop />
```

### After Effects → MP4 / GIF
1. Otwórz https://lottiefiles.com/
2. Upload `silka-logo.json`
3. Edit colors if needed (#FF6B35 primary, #1E293B secondary)
4. Export as MP4 (1080x1080), GIF, or WebM

### Telegram / Discord sticker
Lottie działa natywnie w Telegram jako animowane sticker – wyeksportuj jako .tgs

## Kolory w Lottie
- Pomarańcz: [1, 0.4196, 0.2078] = #FF6B35
- Granat: [0.1176, 0.1608, 0.2314] = #1E293B

Możesz zmienić w JSON w `shapes[].it[].c.k`

## Video loop
Jeśli potrzebujesz MP4 do Instagram Reels / TikTok:
- Otwórz `../video/social-loop.html` w przeglądarce
- Wybierz 1080x1920
- Kliknij "Nagraj WebM (5s)"
- Przekonwertuj WebM → MP4 na cloudconvert.com
- Gotowe do uploadu
