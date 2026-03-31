

# AudioCare S.A.S. — Portafolio Web

Convertir el HTML estático del portafolio de AudioCare en una aplicación React con el mismo diseño y contenido.

## Qué se construirá

Una single-page application (portafolio) con estas secciones:

1. **Hero** — Gradiente navy/teal, logo SVG, tagline, CTAs (servicios + WhatsApp)
2. **Stats Bar** — 4 estadísticas (3 especialistas, 100% certificada, 10 min tamizaje, 0-99 años)
3. **Servicio Estrella** — Tamizaje Auditivo Neonatal con visual animada y tags
4. **Servicios (6 cards)** — Diagnóstico, Ayudas Auditivas, Pediátrica, Vestibular, Fonoaudiología, Ocupacional
5. **¿Por qué AudioCare? (4 cards)** — Fondo oscuro con glassmorphism
6. **Poblaciones (5 cards)** — Recién nacidos, Niños, Adultos, Adulto mayor, Instituciones
7. **Convenios** — Pills de modalidades de atención
8. **CTA Final** — Agendar por WhatsApp
9. **Footer** — Info corporativa

## Pasos de implementación

| # | Tarea | Archivos |
|---|-------|----------|
| 1 | **Setup de diseño** — Variables CSS (deep, ocean, teal, warm, coral, cream), fuentes Google (DM Serif Display + Plus Jakarta Sans), animaciones (fadeUp, fadeDown, pulseRing) | `index.html`, `src/index.css`, `tailwind.config.ts` |
| 2 | **Copiar logo** subido a `src/assets/logo.png` | asset copy |
| 3 | **Componentes de sección** — Hero, StatsBar, FlagshipService, ServicesGrid, WhyUs, Populations, Convenios, CTASection, Footer | `src/components/sections/*.tsx` |
| 4 | **Página Index** — Componer todas las secciones en orden | `src/pages/Index.tsx` |
| 5 | **Limpiar** — Remover App.css, actualizar título en index.html a "AudioCare S.A.S." | cleanup |

## Detalles técnicos

- **Paleta**: Deep `#0B1D3A`, Ocean `#2C5475`, Teal `#3A6B8C`, Teal-light `#5A8FAF`, Warm `#E9C46A`, Coral `#D4553B`, Cream `#FAFAF5`
- **Tipografía**: DM Serif Display (títulos serif), Plus Jakarta Sans (cuerpo)
- **Animaciones CSS**: fadeUp, fadeDown, pulseRing (ondas en sección tamizaje)
- **Responsive**: Grid a 1 columna en mobile, ajuste de padding y gaps
- **WhatsApp CTA**: Link a `wa.me/573000000000` (placeholder, ajustable)
- Todo el contenido viene directo del HTML proporcionado — se replica fielmente

