import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { SECTOR, UBICACION, CONTEXTOS, HISTORIA, NO_ESPECIFICADO } from '../src/data/institucion.js';
import { documento, encabezadoPagina, seccion, avisoNoEspecificado, escapar } from '../src/scripts/pagina.js';

const BASE = new URL('..', import.meta.url).pathname;

function escribir(ruta, contenido) {
  const destino = `${BASE}${ruta}`;
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, contenido, 'utf8');
  console.log(`  ${ruta}`);
}

function parrafos(lista) {
  return lista.map((p) => `            <p>${escapar(p)}</p>`).join('\n');
}

console.log('Generando sección Institución…');

escribir(
  'institucion/index.html',
  documento({
    titulo: 'Institución — Institución Educativa Madre Laura',
    descripcion:
      'Historia, contextualización, principios rectores, valores y símbolos de la Institución Educativa Madre Laura de Apartadó.',
    crumbs: [{ label: 'Institución' }],
    cuerpo: `      <div class="container">
        ${encabezadoPagina({
          eyebrow: 'Institución',
          titulo: 'Institución Educativa Madre Laura',
          lead: 'Reseña histórica, contextualización, principios, valores y símbolos de una institución con historia en Apartadó, Antioquia.',
        }).replace(/^ {8}/gm, '        ')}
        <div class="card-grid seccion-grid">
          <article class="card" data-reveal>
            <h2 class="card__title">Contextualización</h2>
            <p>El barrio Ortiz, la comuna N.° 4 José Joaquín Vélez y las dimensiones del entorno.</p>
            <a class="card__link" href="/institucion/contextualizacion/">Conocer nuestro contexto</a>
          </article>
          <article class="card" data-reveal>
            <h2 class="card__title">Nuestra historia</h2>
            <p>Fundación en 1967, origen, construcción y línea de tiempo institucional.</p>
            <a class="card__link" href="/institucion/historia/">Conocer nuestra historia</a>
          </article>
          <article class="card" data-reveal>
            <h2 class="card__title">Principios rectores</h2>
            <p>Los principios que orientan el quehacer educativo de la institución.</p>
            <a class="card__link" href="/institucion/principios-rectores/">Ver principios rectores</a>
          </article>
          <article class="card" data-reveal>
            <h2 class="card__title">Valores institucionales</h2>
            <p>Los valores que la comunidad educativa trabaja y sustenta.</p>
            <a class="card__link" href="/institucion/valores/">Ver valores</a>
          </article>
          <article class="card" data-reveal>
            <h2 class="card__title">Símbolos institucionales</h2>
            <p>Bandera, escudo e himno de la Institución Educativa Madre Laura.</p>
            <a class="card__link" href="/institucion/simbolos/">Ver símbolos</a>
          </article>
          <article class="card" data-reveal>
            <h2 class="card__title">Identidad Laurista</h2>
            <p>El legado de Laura Montoya Upegui y la Congregación Laurista.</p>
            <a class="card__link" href="/institucion/identidad-laurista/">Conocer la identidad</a>
          </article>
        </div>
      </div>`,
  }),
);

escribir(
  'institucion/contextualizacion/index.html',
  documento({
    titulo: 'Nuestro contexto — Institución Educativa Madre Laura',
    descripcion:
      'La Institución Educativa Madre Laura en el barrio Ortiz, comuna N.° 4 José Joaquín Vélez, municipio de Apartadó.',
    crumbs: [{ label: 'Institución' }, { label: 'Contextualización' }],
    cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Contextualización institucional',
        titulo: 'Nuestro contexto',
        lead: 'La Institución Educativa Madre Laura se encuentra ubicada en el barrio Ortiz, en el municipio de Apartadó, dentro de la comuna N.° 4, denominada José Joaquín Vélez.',
      })}
${seccion({
  titulo: SECTOR.titulo,
  id: 'sector',
  cuerpo: parrafos(SECTOR.parrafos),
})}
${seccion({
  titulo: UBICACION.titulo,
  id: 'ubicacion',
  cuerpo: parrafos(UBICACION.parrafos),
})}
${CONTEXTOS.map(
  (contexto) => seccion({
    titulo: contexto.titulo,
    cuerpo: parrafos(contexto.parrafos),
  }),
).join('\n')}
${seccion({
  titulo: 'Identificación',
  id: 'identificacion',
  cuerpo: `            <dl class="definiciones">
              <div>
                <dt>Institución</dt>
                <dd>Institución Educativa Madre Laura</dd>
              </div>
              <div>
                <dt>Municipio</dt>
                <dd>Apartadó</dd>
              </div>
              <div>
                <dt>Departamento</dt>
                <dd>Antioquia</dd>
              </div>
              <div>
                <dt>Barrio</dt>
                <dd>Ortiz</dd>
              </div>
              <div>
                <dt>Comuna</dt>
                <dd>N.° 4, José Joaquín Vélez</dd>
              </div>
            </dl>`,
})}`,
  }),
);

escribir(
  'institucion/historia/index.html',
  documento({
    titulo: 'Nuestra historia — Institución Educativa Madre Laura',
    descripcion:
      'La Institución Educativa Madre Laura fue fundada en marzo de 1967 como homenaje a Laura Montoya Upegui, fundadora de la Congregación Laurista.',
    crumbs: [{ label: 'Institución' }, { label: 'Historia' }],
    rutaCss: ['/src/styles/historia.css'],
    cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Reseña histórica',
        titulo: HISTORIA.titulo,
        lead: HISTORIA.introduccion.join(' '),
      })}
${seccion({
  titulo: 'Línea de tiempo institucional',
  id: 'linea-de-tiempo',
  cuerpo: `            <ol class="linea-tiempo">
${HISTORIA.hitos
  .map(
    (hito) => `              <li class="linea-tiempo__hito">
                <p class="linea-tiempo__anio">${escapar(hito.anio)}</p>
                <h3 class="linea-tiempo__titulo">${escapar(hito.titulo)}</h3>
                <p class="linea-tiempo__detalle">${escapar(hito.detalle)}</p>
              </li>`,
  )
  .join('\n')}
            </ol>`,
})}
${seccion({
  titulo: HISTORIA.origen.titulo,
  id: 'origen',
  cuerpo: parrafos(HISTORIA.origen.parrafos),
})}
${seccion({
  titulo: 'Reseña histórica de la institución',
  id: 'resena',
  cuerpo: parrafos(HISTORIA.parrafos),
})}`,
  }),
);

for (const [slug, titulo, descripcion] of [
  [
    'principios-rectores',
    'Principios rectores',
    'Los principios rectores de la Institución Educativa Madre Laura.',
  ],
  [
    'valores',
    'Valores institucionales',
    'Los valores institucionales de la Institución Educativa Madre Laura.',
  ],
  [
    'simbolos',
    'Símbolos institucionales',
    'Bandera, escudo e himno de la Institución Educativa Madre Laura.',
  ],
  [
    'identidad-laurista',
    'Identidad Laurista',
    'El legado de Laura Montoya Upegui y la Congregación de Misioneras de María Inmaculada y Santa Catalina de Sena.',
  ],
]) {
  escribir(
    `institucion/${slug}/index.html`,
    documento({
      titulo: `${titulo} — Institución Educativa Madre Laura`,
      descripcion,
      crumbs: [{ label: 'Institución' }, { label: titulo }],
      cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Institución',
        titulo,
        lead: descripcion,
      })}
      <section class="section">
        <div class="container">
          <div class="prose">
${avisoNoEspecificado(NO_ESPECIFICADO)}
          </div>
        </div>
      </section>`,
    }),
  );
}

console.log('Listo.');
