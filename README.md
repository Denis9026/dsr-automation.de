# dsr-automation.de

Firmen-Website von **DSR Automation** – statisch (HTML/CSS/JS), gehostet über GitHub Pages.

## Struktur

| Datei | Inhalt |
|---|---|
| `index.html` | One-Pager: Leistungen, Arbeitsweise, Software & HMI, Branchen, Über uns, Kontakt |
| `impressum.html` / `datenschutz.html` | Rechtliches |
| `css/style.css` | Design (Markenfarben aus dem Logo: `#203958` / `#3F72AF`) |
| `js/main.js` | Mobiles Menü, Scroll-Einblendungen |
| `img/` | Weboptimierte Bilder |

## Lokal ansehen

```
npx http-server -p 8080
```

oder `index.html` direkt im Browser öffnen.

## Deployment

Läuft über GitHub Pages (Branch `main`, Ordner `/root`), Custom Domain `www.dsr-automation.de`.
Änderungen: Dateien anpassen → committen → pushen → nach ~1 Minute live.
