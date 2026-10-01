export function documento({
  titulo,
  descripcion,
  crumbs = [],
  rutaCss = [],
  cuerpo,
}) {
  const migas = crumbs
    .map((miga) => (miga.href ? `${miga.label}>${miga.href}` : miga.label))
    .join('|');

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${titulo}</title>
    <meta name="description" content="${descripcion}" />
    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/src/styles/tokens.css" />
    <link rel="stylesheet" href="/src/styles/base.css" />
    <link rel="stylesheet" href="/src/styles/components.css" />
${rutaCss.map((ruta) => `    <link rel="stylesheet" href="${ruta}" />`).join('\n')}
    <script>
      (function () {
        try {
          var t = localStorage.getItem('madre-laura-tema');
          if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
        } catch (e) {}
      })();
    </script>
  </head>
  <body>
    <a class="skip-link" href="#contenido">Saltar al contenido principal</a>
    <site-header></site-header>
    <site-breadcrumbs crumbs="${migas}"></site-breadcrumbs>
    <main id="contenido">
${cuerpo}
    </main>
    <site-footer></site-footer>
    <script type="module" src="/src/scripts/app.js"></script>
  </body>
</html>
`;
}

export function encabezadoPagina({ eyebrow, titulo, lead }) {
  return `      <div class="container">
        <header class="page-header">
          <span class="eyebrow">${eyebrow}</span>
          <h1>${titulo}</h1>
          <p class="page-header__lead">${lead}</p>
        </header>
      </div>`;
}

export function seccion({ titulo, id, cuerpo, nivel = 'h2' }) {
  return `      <section class="section"${id ? ` id="${id}"` : ''}>
        <div class="container">
          <${nivel}>${titulo}</${nivel}>
          <div class="prose">
${cuerpo}
          </div>
        </div>
      </section>`;
}

export function avisoNoEspecificado(texto) {
  return `            <div class="notice" role="note">
              <p>${texto}</p>
            </div>`;
}

export function escapar(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
