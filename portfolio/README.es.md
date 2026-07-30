# Portafolio Profesional - Yohan Briceño Godoy

English version: [README.md](./README.md)

Portafolio personal construido con Next.js para presentar experiencia, proyectos, stack técnico y contacto profesional en dos idiomas (es/en).

## Tabla de contenidos

1. [Resumen](#resumen)
2. [Stack y versiones](#stack-y-versiones)
3. [Arquitectura del proyecto](#arquitectura-del-proyecto)
4. [Estructura de carpetas](#estructura-de-carpetas)
5. [Requisitos previos](#requisitos-previos)
6. [Instalación y ejecución local](#instalación-y-ejecución-local)
7. [Scripts disponibles](#scripts-disponibles)
8. [Cómo editar contenido sin tocar componentes](#cómo-editar-contenido-sin-tocar-componentes)
9. [Agregar y mantener proyectos](#agregar-y-mantener-proyectos)
10. [Internacionalización (i18n)](#internacionalización-i18n)
11. [SEO, sitemap y robots](#seo-sitemap-y-robots)
12. [Despliegue en Vercel](#despliegue-en-vercel)
13. [Checklist antes de publicar](#checklist-antes-de-publicar)
14. [Estado actual y mejoras sugeridas](#estado-actual-y-mejoras-sugeridas)

## Resumen

Este repositorio usa un enfoque **data-driven**:

- Los componentes son reutilizables.
- El contenido vive en archivos de datos y traducciones.
- Al agregar objetos en los archivos correctos, el sitio se actualiza automáticamente sin crear nuevas vistas manuales.

Esto permite mantener el portafolio rápido de actualizar cuando cambian tus proyectos, experiencia o enlaces.

## Stack y versiones

### Frameworks y librerías principales

- Next.js 15 (App Router)
- React 19
- TypeScript 5 (modo estricto)
- Tailwind CSS 3
- Framer Motion
- next-intl
- next-themes
- lucide-react

### Tooling

- ESLint
- Prettier + prettier-plugin-tailwindcss
- PostCSS + Autoprefixer

## Arquitectura del proyecto

### Renderizado y rutas

- App Router de Next.js con páginas en `src/app`.
- Rutas localizadas por idioma en `src/app/[locale]`.
- Página de detalle dinámica para cada proyecto en `src/app/[locale]/projects/[slug]/page.tsx`.

### Modelo de datos

- Perfil personal: `src/data/profile.ts`
- Experiencia: `src/data/experience.ts`
- Educación: `src/data/education.ts`
- Skills: `src/data/skills.ts`
- Proyectos: `src/data/projects.ts`

### Internacionalización

- Textos en `messages/en.json` y `messages/es.json`.
- Configuración de locales en `src/i18n/routing.ts`.
- Middleware de locale en `middleware.ts`.

## Estructura de carpetas

```text
portfolio/
  messages/                 # traducciones (en/es)
  public/                   # archivos estáticos (PDF, OG image, etc.)
  src/
    app/                    # rutas y páginas (App Router)
    components/             # componentes UI y secciones
    data/                   # contenido estructurado del portafolio
    hooks/                  # hooks de UI/estado
    i18n/                   # utilidades de navegación y request locale
    lib/                    # helpers utilitarios
    types/                  # tipos TypeScript centrales
```

## Requisitos previos

- Node.js 20+ recomendado
- npm 10+ recomendado

Verifica versiones:

```bash
node -v
npm -v
```

## Instalación y ejecución local

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en desarrollo:

```bash
npm run dev
```

3. Abrir en navegador:

```text
http://localhost:3000
```

> Nota: el proyecto usa prefijo de idioma (`/en` y `/es`).

## Scripts disponibles

- `npm run dev`: inicia entorno local de desarrollo.
- `npm run build`: genera build de producción.
- `npm run start`: levanta la build de producción.
- `npm run lint`: ejecuta reglas de lint.
- `npm run format`: aplica formato con Prettier.

## Cómo editar contenido sin tocar componentes

La mayor parte del mantenimiento diario se hace en archivos de datos y traducción.

| Objetivo | Archivo(s) |
| --- | --- |
| Nombre, ubicación, email, links sociales, CV | `src/data/profile.ts` |
| Experiencia laboral | `src/data/experience.ts` + `messages/en.json` y `messages/es.json` |
| Educación | `src/data/education.ts` + `messages/en.json` y `messages/es.json` |
| Skills / stack | `src/data/skills.ts` |
| Proyectos (cards + detalle) | `src/data/projects.ts` + `messages/en.json` y `messages/es.json` |
| Secciones futuras | `src/data/futureSections.ts` |
| Texto visible general | `messages/en.json` y `messages/es.json` |

## Agregar y mantener proyectos

### Paso 1: Agregar metadatos del proyecto

En `src/data/projects.ts`, añade un objeto con:

- `slug` único
- `i18nKey` único
- `stack`
- `year`
- `featured`
- `links.github`
- `links.demo` (puede ir vacío si no hay demo)
- `screenshotCount`

### Paso 2: Agregar contenido en ambos idiomas

En `messages/en.json` y `messages/es.json`, crea la clave:

```text
projects.<i18nKey>
```

Con al menos:

- `name`
- `tagline`
- `overview`
- `feature1` a `feature4`
- `challenge1` a `challenge3`
- `architectureDescription`

### Paso 3: Validar

- Card visible en home.
- Ruta de detalle funcional en `/[locale]/projects/[slug]`.
- Link de GitHub correcto.
- Link de demo correcto o badge de "Demo próximamente".

## Internacionalización (i18n)

### Configuración actual

- Locales soportados: `en`, `es`
- Locale por defecto: `en`
- Prefijo de locale: siempre (`/en`, `/es`)

### Buenas prácticas al editar traducciones

- Mantener las mismas claves en ambos idiomas.
- No eliminar claves existentes sin buscar sus usos.
- Cuando agregues una sección nueva, crearla simultáneamente en `en` y `es`.

## SEO, sitemap y robots

- `src/app/sitemap.ts` genera rutas estáticas y de proyectos por locale.
- `src/app/robots.ts` expone reglas de indexación y URL de sitemap.
- Se recomienda mantener actualizada la URL base de dominio productivo si cambia.

## Despliegue en Vercel

### Flujo recomendado

1. Conectar el repositorio en Vercel.
2. Framework detectado: Next.js.
3. Ejecutar primer deploy.
4. Validar rutas:
   - `/en`
   - `/es`
   - `/en/projects/<slug>`
   - `/es/projects/<slug>`

### Variables de entorno

Actualmente no se requieren variables obligatorias para ejecutar el sitio base.

## Checklist antes de publicar

- Actualizar `social.github` en `src/data/profile.ts`.
- Confirmar `social.linkedin` y `email`.
- Reemplazar/añadir `public/resume.pdf`.
- Revisar todos los `links.github` y `links.demo` en `src/data/projects.ts`.
- Sustituir `public/og.png` por una imagen real (1200x630).
- Ejecutar:

```bash
npm run lint
npm run build
```

## Estado actual y mejoras sugeridas

### Estado actual

- El formulario de contacto valida en cliente y simula envío local.
- No hay integración real de envío aún (API Route, Resend, Formspree, etc.).
- Las capturas de proyectos están como placeholders visuales.

### Mejoras recomendadas

1. Conectar el formulario de contacto a un backend real.
2. Reemplazar placeholders de capturas por imágenes reales con `next/image`.
3. Agregar tests básicos para componentes críticos.
4. Añadir CI para lint/build en cada push.

---

Si este proyecto se usa como base para otros portafolios, mantén el enfoque data-driven: modifica primero archivos de `src/data` y `messages/*` antes de crear nuevos componentes.
