# Precision Repair Website

Statische Website für `precisionrepair.de`.

## Struktur

- `index.html` - Startseite
- `leistungen.html` - Leistungen
- `preise.html` - Preise
- `ueber-uns.html` - Über uns
- `kontakt.html` - Kontakt mit Formular, WhatsApp und Google-Maps-Consent
- `impressum.html` - vorbereitete Impressumsseite
- `datenschutz.html` - vorbereitete Datenschutzhinweise
- `public/images/precision-repair-logo.png` - Logo aus dem gelieferten Markenbild
- `public/images/precision-repair-markenbild.jpg` - geliefertes Markenbild, optimiert
- `public/images/precision-repair-werkstatt.jpg` - geliefertes Werkstatt-/Portfolio-Bild, optimiert
- `public/images/portfolio/` - austauschbare Portfolio-Bilder mit festen Dateinamen
- `public/images/portfolio/real/` - optimierte Originalansichten der echten Reparaturfotos
- `public/images/portfolio/thumbs/` - schnelle Vorschaubilder fuer die Portfolio-Seite
- `assets/css/styles.css` - Design und responsive Layouts
- `assets/js/main.js` - Mobile Navigation
- `robots.txt` und `sitemap.xml` - SEO-Dateien

## Produktivdaten

- Firma: Precision Repair
- Inhaber: Cristian Draghici
- Adresse: Ellenbogenstr. 7, 87779 Trunkelsberg
- Telefon: 0174 2716936
- E-Mail: info.precision.repair.de@gmail.com
- Domain: precisionrepair.de

## Portfolio-Bilder ersetzen

Die Portfolio-Sektion verwendet feste Dateinamen. Neue Bilder können einfach unter gleichem Namen in `public/images/portfolio/` ersetzt werden:

- `iphone-display-reparatur.jpg`
- `laptop-reinigung.jpg`
- `pc-build.jpg`
- `mainboard-innenreinigung.jpg`
- `akkutausch.jpg`
- `displaywechsel.jpg`

Das Kontaktformular nutzt aktuell `mailto:` und benötigt für zuverlässigen produktiven Versand ein serverseitiges Formular oder einen Formular-Dienst. Die Website lädt keine externen Schriftarten, Tracking-Skripte oder eingebetteten Karten automatisch.
