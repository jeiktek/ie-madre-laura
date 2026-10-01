import { readFileSync, existsSync } from 'node:fs';
import { globSync } from 'node:fs';

const BASE = new URL('..', import.meta.url).pathname;

// Rutas servidas por Vite: no son páginas del sitio.
const ASSETS = /^\/(src|assets)\//;

const paginas = globSync('**/index.html', { cwd: BASE })
  .map((ruta) => `/${ruta.replace(/index\.html$/, '')}`)
  .sort();

const conjunto = new Set(paginas);

const enlacesRotos = [];
const idsDuplicados = [];
const h1PorPagina = [];
const titulosVacios = [];

for (const ruta of paginas) {
  const relativa = ruta === '/' ? 'index.html' : `${ruta.replace(/^\//, '')}index.html`;
  const html = readFileSync(`${BASE}${relativa}`, 'utf8');

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const vistos = new Set();
  for (const id of ids) {
    if (vistos.has(id)) idsDuplicados.push(`${ruta} -> #${id}`);
    vistos.add(id);
  }

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  h1PorPagina.push({ ruta, h1 });

  if (!/<title>[^<]+<\/title>/.test(html)) titulosVacios.push(ruta);

  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const destino = m[1];
    if (destino === '/') continue;
    if (ASSETS.test(destino)) continue;
    if (!conjunto.has(destino)) enlacesRotos.push(`${ruta} -> ${destino}`);
  }
}

console.log(`Páginas generadas: ${paginas.length}`);

const sinH1 = h1PorPagina.filter((p) => p.h1 !== 1);
if (sinH1.length > 0) {
  console.log(`\nPáginas sin exactamente un H1:`);
  for (const p of sinH1) console.log(`  ${p.ruta}: ${p.h1}`);
}

if (titulosVacios.length > 0) {
  console.log(`\nPáginas sin <title>:`);
  for (const t of titulosVacios) console.log(`  ${t}`);
}

if (idsDuplicados.length > 0) {
  console.log(`\nIDs duplicados:`);
  for (const d of idsDuplicados) console.log(`  ${d}`);
}

if (enlacesRotos.length > 0) {
  console.log(`\nEnlaces internos rotos (${enlacesRotos.length}):`);
  for (const e of enlacesRotos) console.log(`  ${e}`);
} else {
  console.log('\nEnlaces internos: todos resuelven.');
}

const problemas =
  sinH1.length + titulosVacios.length + idsDuplicados.length + enlacesRotos.length;

if (problemas > 0) {
  console.log(`\n${problemas} problema(s).`);
  process.exit(1);
}

console.log('Todo correcto.');
