# AGENTS.md — Institución Educativa Madre Laura

Rediseño web del sitio institucional. Documento, español, sin backend.

## Estado actual

Greenfield: el repositorio contiene **sólo especificación**, ningún código.

- `manual.md` — spec completa de UI/UX (parte 01) y estructura/contenido (parte 02), 2989 líneas. **Fuente de verdad** para diseño, arquitectura y contenido.
- `instructions.md` — restricciones de stack y criterios de aceptación (25 líneas).

No hay `package.json`, no hay git, no hay lint/typecheck/test ni assets. Al arrancar trabajo: inicializar git. No inventes scripts de test o lint que no existan.

Antes de implementar cualquier sección, lee la parte correspondiente de `manual.md`. Está orquestado por números de sección (`# 4. Sistema de colores`, `# 23. Design Tokens`); busca por número, no por lectura lineal.

## Comandos

- `npm run dev` — único comando de desarrollo (Vite, puerto 5173).
- `npm run preview` — sirve el sitio estático sin transformaciones.
- `npm run generate` — regenera las páginas de `institucion/` desde `src/data/institucion.js` y `src/scripts/pagina.js`. **Edita los datos, nunca el HTML generado.**

## Contenido real: `contenido.txt`

Texto institucional verificado subido por el usuario. Es la fuente para las fases 2-5. **Copia el texto literal, no lo reescribas ni lo completes.** Ya volcado a `src/data/institucion.js` (contextualización, historia, hitos).

Trampas reales de ese archivo, no las "arregles" por tu cuenta:

- El bloque titulado **"PRINCIPIOS RECTORES" (línea 434) no contiene principios rectores**: es el contenido de la **Semana Laurista 2022** (bautismo, donatón, bingo, desafío Laurista). No lo publiques en `/institucion/principios-rectores/`, que sigue con el placeholder de §72.
- Las tablas de **Excelencia académica 2022-2024** vienen de pegado desde una hoja: hay celdas con dos o tres nombres juntos y filas desalineadas. No se puede adivinar qué nombre pertenece a qué columna. Pide confirmación antes de publicar nombres de estudiantes.
- La tabla de **2023 tercer período** está estructuralmente rota (líneas 222-322): los nombres no se pueden asignar a grado/grupo con certeza.
- **Contexto social**: la frase "Sus viviendas son de material y…" está truncada en el original. Se publica tal cual.
- El orden de los nombres de estudiantes **cambia entre años** (2022 "Apellido Nombre", 2023 "Nombre Apellido", 2024 en mayúsculas). No lo normalices.

No hay lint, typecheck ni tests. No los inventes.

## Arquitectura ya decidida — no replantear

- **Multipágina sin build**: cada ruta es un directorio con su `index.html` (`/institucion/historia/index.html`). Por eso `vite.config.js` usa `appType: 'mpa'` — sin fallback SPA, que devolvería 200 con la home para cualquier ruta.
- **Rutas con barra final**: los enlaces usan siempre `/ruta/`. Un plugin propio redirige `301` de `/ruta` a `/ruta/` en el dev server; los hosts estáticos lo hacen solos.
- **`/src` y `/assets` son rutas absolutas**: el sitio debe servirse en la raíz del dominio, nunca en un subdirectorio.
- **Cabecera, pie, migas y tema son Web Components en light DOM** (`src/components/`), definidos en `src/scripts/app.js`. Light DOM a propósito: así los tokens globales de CSS siguen aplicándose. Una sola copia del marcado para todas las páginas.
- **Iconos Lucide vendorizados** en `assets/icons/*.svg` (subconjunto curado, descargado de `lucide-static`, licencia ISC) y cargados por `fetch` en `icon.js`. No reescribas los trazados SVG a mano; copia el archivo oficial. Una sola familia, decorativos (`aria-hidden`).

## Contraste: no lo rompas

Verificado en navegador. `#159BD7` (`--color-primary` del manual) da sólo **3.13:1** sobre blanco: **nunca** lo uses para texto ni para fondo de texto pequeño.

- Texto de marca: `--text-link` / `--brand-strong` = `#0877B9` (4.8:1 sobre blanco).
- Sobre fondos azul suave (`--brand-soft`): `#0877B9` sólo da 4.22:1 → usa **`--text-link-strong`** (`#0668a5`, 5.2:1). Ya está aplicado a nav activo, botones secundarios y hover; no lo reviertas a `--brand-strong`.
- Tokens dark derivados: `--page-bg #0b1220`, `--surface-bg #101a2b`, `--surface-raised #152033`, `--text-strong #e6edf6`, `--text-muted #9fb0c6`. Todos ≥4.5:1, comprobado.
- **Sobre `--brand-strong` como fondo:** el hero lo usa con texto `--text-on-brand` (4.83:1 claro / 8.01:1 oscuro, ambos AA). Pero si pones texto de marca *encima* de `--brand-strong`, usa siempre `--text-on-brand`, nunca blanco fijo: el fondo se aclara en tema oscuro y el blanco cae a 2.35:1.

## Flujo obligatorio

`instructions.md` (final): **antes de escribir código, entrega un plan de estructura y espera el visto bueno del usuario.** No empieces a construir sin aprobación explícita.

## Stack — restricciones duras

- HTML + CSS + JavaScript **vanilla**. Sin frameworks, sin Tailwind, sin bundlers de UI.
- Iconos: **una sola familia**, Lucide (`instructions.md`). Mapeo por sección en `manual.md` §12.
- **Vite sólo como servidor de desarrollo**, nada más. Sin pipeline de build de producción.
- Sin backend. El contenido y el índice de búsqueda salen de los datos del propio repo.
- WCAG AA es requisito de aceptación, no un extra.

Criterios de aceptación (`instructions.md`): `npm run dev` arranca sin errores; PDFs descargables y visualizables; gráficas claras y legibles; revisión básica de accesibilidad.

## Contenido: la regla que más fácil se incumple

`manual.md` §72 — **no inventar** datos, fechas, estadísticas, nombres, cargos, logros, horarios ni documentos. Todo dato debe provenir de información institucional verificada.

Cuando un dato no exista, escribe exactamente:

> **Información no especificada en los documentos institucionales.**

No pongas años plausibles, nombres inventados, estadísticas de relleno ni lorem ipsum. Un placeholder honesto es correcto; un dato fabricado no.

Los metadatos que cada tipo de contenido maneja están definidos en `manual.md` §53 — respétalos, son la base del filtrado y la búsqueda.

**Assets:** hoy sólo placeholders. Crea la estructura de `assets/` y PDFs/imágenes de ejemplo para que la UI sea navegable; el usuario los drop-inará después. No enlaces a rutas de PDF que no existan en el repo.

## Arquitectura

Menú propuesto en `manual.md` §19; el árbol completo de páginas está en la línea 926. Rutas amigables sin hash en §26.

**No repliques el menú actual por grupos de gestión** (G. Administrativa, G. Académica, G. Comunitaria, G. Directiva). El objetivo declarado es reorganizar la información alrededor de cómo busca el visitante, no de cómo se organiza internamente la institución.

- Nav: Inicio, Institución, Académico, Comunidad, Actualidad, Recursos, Contacto.
- Multi-página, no SPA.
- Búsqueda global (§22) client-side: hay que construir el índice a partir de los datos del repo, no de un servicio.

## Sistema de diseño — no improvisar valores

Los valores ya están definidos. Úsalos literalmente en lugar de elegir los tuyos.

- Tokens CSS exactos: `manual.md` §23 (línea 769).
- Paleta §4, tipografía §5, espaciado §6, contenedor §7, bordes/radios §8, botones §9, cards §10.
- Tipografía: **Plus Jakarta Sans** (encabezados) + **Inter** (texto/interfaz).
- Contenedor `1200px`, `padding-inline: 24px`; hasta ~`1280px` en galerías.
- Distribución de color ~60 % blanco / 30 % azul / 10 % amarillo. El amarillo es **sólo acento**, nunca superficie dominante.

**Tema oscuro/claro** con conmutador, respetando `prefers-color-scheme` (`instructions.md`). El manual sólo define la paleta clara: los tokens dark hay que derivarlos manteniendo contraste AA.

## Imágenes con información y documentos

`manual.md` §14 y §71 — los cronogramas y gráficos informativos hoy son imágenes grandes. **Una imagen no puede ser el único acceso a la información.** Cada una lleva título + resumen + equivalente en HTML accesible + descarga (`[ Ver completo ] [ Descargar ]`).

Documentos (§47, §48): vista con buscador y filtros por categoría, año y tipo, con los documentos de uso frecuente primero. Nada de listas largas de enlaces.

Todo contenido real lleva breadcrumbs (§21) y los metadatos de SEO de §26 (title, description, un único H1, alt text, OG).

## Definición de terminado por página

- HTML semántico, navegable por teclado, foco visible, alt text, formularios etiquetados, contraste AA, sin depender sólo del color.
- Responsive y correcto en móvil.
- Sin animaciones permanentes; micro-interacciones discretas en hover, cards, menús, filtros y modales (§11).