# Plan: Opcja A — brakujące pakiety + 404 w dev

## Kontekst
- `server.ts` używa `compression`, `body-parser`, `cors`. W `package.json` brakuje `compression` i `body-parser` (`cors` już jest).
- `ng serve` zwraca 404 na `/oferta`, `/cennik` itd. bo webpack-dev-server nie obsługuje HTML5 pushState.
- W produkcji z SSR (`server.ts`) ten problem nie występuje — Express ma catch-all `app.get('/*', ...)`.

## Zmiany

### 1. `package.json`
Dodać do `dependencies` (w kolejności alfabetycznej):
- `"body-parser": "^1.19.0"` — używane w `server.ts` linia 8, 20-21
- `"compression": "^1.7.4"` — używane w `server.ts` linia 10, 18

`cors` już jest w pliku (linia 52), nie dotykać.

### 2. `src/app/app.routes.ts`
Zmienić linijkę 32 z:
```ts
RouterModule.forRoot(appRoutes)
```
na:
```ts
RouterModule.forRoot(appRoutes, {useHash: true})
```

To włącza hash-based routing (`/#/oferta` zamiast `/oferta`), co eliminuje 404 w dev. W produkcji z SSR to nie ma znaczenia — Express i tak renderuje wszystkie routes.

## Walidacja
1. `npm install` — zakończone sukcesem (brak błędów)
2. `ng serve` — startuje
3. `curl http://localhost:4200/oferta` — HTTP 200 (nie 404)
4. `node local.js` (po `ng build` + webpack) — startuje bez `Cannot find module`

## Granice
- Nie naprawiam 222 błędów lint (Opcja B)
- Nie uzupełniam pustych stron `/oferta`, `/rodo`, `/grafik` (Opcja C)
