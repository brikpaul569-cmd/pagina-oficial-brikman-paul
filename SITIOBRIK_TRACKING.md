# SitioBrik — Seguimiento del Proyecto (SSD Spec)

> **SSD:** Single Source of Documented Design — trazabilidad completa del refactor.

---

## Estado General

| Fase | Estado | Inicio | Fin |
|------|--------|--------|-----|
| **Fase 1** — Limpieza y Config | ✅ Completada | 26/06/2026 | 26/06/2026 |
| **Fase 2** — SEO y Head | ⏳ Pendiente | — | — |
| **Fase 3** — Refactor Componentes | ⏳ Pendiente | — | — |
| **Fase 4** — Nuevas Secciones | ⏳ Pendiente | — | — |
| **Fase 5** — Performance y Testing | ⏳ Pendiente | — | — |
| **Migración GitHub Actions** | ⏳ Pendiente | — | — |

---

## Fase 1 — Limpieza y Config (✅ Completada)

### Objetivo
Eliminar código muerto, centralizar configuración, preparar base SEO.

### Tareas ejecutadas

| # | Tarea | Archivos | Estado |
|---|-------|----------|--------|
| 1.1 | Eliminar código muerto | `src/App.css`, `src/assets/react.svg` | ✅ |
| 1.2 | Crear `src/config/` con datos centralizados | `social.js`, `site.js`, `navigation.js` | ✅ |
| 1.3 | Corregir `index.html`: lang, meta tags, JSON-LD | `index.html` | ✅ |
| 1.4 | Crear archivos SEO estáticos | `public/robots.txt`, `public/sitemap.xml` | ✅ |
| 1.5 | Renombrar imagen con doble extensión | `personaje_intro.png.png` → `personaje_intro.png` | ✅ |
| 1.6 | Instalar `react-helmet-async` | `package.json` | ✅ |
| 1.7 | Refactor Header: usar `NAV_LINKS` desde config | `Header.jsx` | ✅ |
| 1.8 | Refactor Footer: usar `SOCIAL_LINKS` desde config | `Footer.jsx` | ✅ |

### Cambios específicos

#### `social.js` — LinkedIn corregido
- **Antes:** `https://www.linkedin.com/in/brikmanpaulmorales/` (hardcodeado en Footer)
- **Después:** `https://www.linkedin.com/in/brikman-paul-morales/` (centralizado en un archivo)

#### `index.html` — SEO base
- **lang:** `en` → `es`
- **title:** `Brikman` → `Brikman Paul | Productor Musical & Desarrollador de Software`
- **Meta tags agregados:** description, keywords, author, robots, Open Graph (title, description, image, url), Twitter Cards, JSON-LD (Person schema)

#### Archivos eliminados
- `src/App.css` (código muerto del template Vite: `.logo`, `.card`, animaciones legacy)
- `src/assets/react.svg` (no se usaba)

---

## Fase 2 — SEO y Head (✅ Completada)

### Objetivo
Meta tags dinámicos por sección para mejorar posicionamiento y compartición en redes.

### Tareas ejecutadas

| # | Tarea | Archivos | Estado |
|---|-------|----------|--------|
| 2.1 | Envolver App con `HelmetProvider` | `main.jsx` | ✅ (Fase 1) |
| 2.2 | Crear componente `SEOHead.jsx` | `src/components/layout/SEOHead.jsx` | ✅ |
| 2.3 | Integrar SEO dinámico por sección | `App.jsx` | ✅ |
| 2.4 | Evaluar con Lighthouse | — | ⏳ Pendiente (manual) |

### Detalle técnico

#### `SEOHead.jsx` — Props aceptadas:
- `title`, `description`, `ogTitle`, `ogDescription`, `ogImage`, `ogUrl`, `keywords`
- Valores por defecto desde `SITE_CONFIG`
- Usa `<Helmet>` de `react-helmet-async` para inyectar en `<head>`

#### Cada sección tiene SEO único:

| Sección | Title |
|---------|-------|
| Intro | Productor Musical & Desarrollador de Software |
| Highlights | Proyectos — Música y Código |
| Details | Mi Especialidad — Fusión de Arte y Tecnología |
| Trayectoria | Trayectoria — 15 Años de Música y Código |
| Gallery | Galería — Visuales y Arte Digital |
| Footer | Contacto — Conectemos |

#### Verificación Lighthouse pendiente:
- Necesita deploy o `npm run preview` + Chrome DevTools

---

## Fase 3 — Refactor Componentes (✅ Completada)

### Objetivo
Refactorizar todos los componentes para mejorar rendimiento, consistencia y mantenibilidad.

### Tareas ejecutadas

| # | Tarea | Archivos | Estado |
|---|-------|----------|--------|
| 3.1 | Refactor App.jsx | `App.jsx`, `useScrollSection.js` | ✅ |
| 3.2 | Refactor Intro | `Intro.jsx` | ✅ |
| 3.3 | Refactor Highlights | `Highlights.jsx` | ✅ |
| 3.4 | Refactor Details | `Details.jsx` | ✅ |
| 3.5 | Refactor Gallery | `Gallery.jsx`, `index.css` | ✅ |
| 3.6 | Refactor Timeline | `Trayectoria.jsx` | ✅ |

### Detalle técnico

#### `useScrollSection.js` — Hook personalizado
- Reemplaza el `useEffect` + `window.addEventListener('scroll')` directo
- Usa `IntersectionObserver` con `threshold: 0.3` para detectar sección activa
- Maneja update de color de fondo y hash de URL
- Limpia observers al desmontar

#### Lazy loading de videos
Los 3 videos de YouTube (`ReactPlayer`) ahora solo se montan cuando la sección está cerca del viewport:
- Intro: `useInView(ref, { margin: "-200px" })`
- Details: `useInView(ref, { margin: "-200px" })`
- Trayectoria: `useInView(ref, { margin: "-200px" })`

Esto reduce significativamente el bundle inicial y mejora LCP.

#### Inconsistencias corregidas

| Problema | Antes | Después |
|----------|-------|---------|
| Details id | `#speciality` | `#details` |
| Export name Highlights | `MyShowcase` | `Highlights` |
| Export name Details | `Speciality` | `Details` |
| Export name Timeline | `Timeline` | `Trayectoria` |
| Timeline data | 2 arrays separados | 1 array unificado |
| Gallery `<style jsx>` | No funcional en React | Clase `scrollbar-hide` via Tailwind |
| `backgroundAttachment: fixed` | No soportado en iOS | Cambiado a `scroll` |

---

## Fase 4 — Nuevas Secciones (⏳ Pendiente)

- [ ] Crear `VideoBackground.jsx` (componente reutilizable)
- [ ] Sección `Servicios` (cards interactivas)
- [ ] Sección `Proyectos Dúales` (música + código)
- [ ] Sección `Portfolio Musical` (embeds Spotify/Apple)
- [ ] Sección `Contacto` (formulario + WhatsApp)

---

## Fase 5 — Performance y Testing (⏳ Pendiente)

- [ ] Code splitting con `React.lazy`
- [ ] Imágenes a WebP
- [ ] Bundle analysis
- [ ] Lighthouse audit final

---

## Migración a GitHub Actions (⏳ Pendiente)

- [ ] Crear workflow deploy
- [ ] Configurar GitHub Pages / FTP / VPS
- [ ] DNS y dominio

---

## Decisiones de Diseño (ADR)

| ID | Decisión | Contexto | Consecuencias |
|----|----------|----------|---------------|
| ADR-001 | Config centralizada en `src/config/` | URLs y textos estaban hardcodeados | Un solo punto de cambio para redes, navegación y datos del sitio |
| ADR-002 | `react-helmet-async` para SEO dinámico | Necesidad de meta tags distintos por sección | Permite SEO granular sin perder SPA |
| ADR-003 | LinkedIn actualizado a nueva URL | El perfil cambió | Se actualiza en `social.js` y en JSON-LD de `index.html` |

---

## Notas Técnicas

- **Node:** v24.16.0
- **npm:** v11.13.0
- **React:** 19.1.0
- **Vite:** 6.3.5
- **Tailwind:** 3.3.2
- **Branch activa:** `develop`
- **Remoto:** `origin/develop`

---

*Documento de trazabilidad — actualizado al 26/06/2026.*
