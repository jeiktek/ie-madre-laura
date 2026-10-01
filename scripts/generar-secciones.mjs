import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { documento, encabezadoPagina, avisoNoEspecificado, escapar } from '../src/scripts/pagina.js';
import { EXCELENCIA, ANIOS_EXCELENCIA } from '../src/data/excelencia.js';
import {
  PRINCIPIOS_RECTORES,
  VALORES,
  MISION,
  FILOSOFIA,
  VISION,
  LEMA,
  BANDERA,
  ESCUDO,
  HIMNO,
} from '../src/data/identidad.js';
import {
  GOBIERNO_ESCOLAR,
  REUNION_PADRES,
  BAZAR,
  ENTREGA_SIMBOLOS,
  FERIA_CIENCIA,
  SEMANA_LAURISTA,
  PRIMER_DIA_2026,
} from '../src/data/comunidad.js';
import { DOCUMENTOS, INTRO_DOCUMENTOS, INTRO_GESTION, NOTA_DOCUMENTOS } from '../src/data/documentos.js';
import { NO_ESPECIFICADO } from '../src/data/institucion.js';

const BASE = new URL('..', import.meta.url).pathname;
const CSS_TABLAS = '/src/styles/tablas.css';

const GENERADOS = [];

function escribir(ruta, contenido) {
  const destino = `${BASE}${ruta}`;
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, contenido, 'utf8');
  GENERADOS.push(ruta);
}

function parrafos(lista, sangria = '            ') {
  return lista.map((p) => `${sangria}<p>${escapar(p)}</p>`).join('\n');
}

function bloque(titulo, cuerpo, { nivel = 'h2', id } = {}) {
  return `      <section class="section"${id ? ` id="${id}"` : ''}>
        <div class="container">
          <${nivel}>${escapar(titulo)}</${nivel}>
          <div class="prose">
${cuerpo}
          </div>
        </div>
      </section>`;
}

function indice(titulos) {
  const items = titulos
    .map((t) => `              <li><a href="#${t.id}">${escapar(t.label)}</a></li>`)
    .join('\n');
  return `      <section class="section">
        <div class="container">
          <h2>En esta página</h2>
          <ul class="lista-puntos">
${items}
          </ul>
        </div>
      </section>`;
}

function indiceHtml({ eyebrow, titulo, lead, crumbs, entrada, entradas = [], rutaCss = [] }) {
  return documento({
    titulo: `${titulo} — Institución Educativa Madre Laura`,
    descripcion: lead,
    crumbs,
    rutaCss: [CSS_TABLAS, ...rutaCss],
    cuerpo: `      ${encabezadoPagina({ eyebrow, titulo, lead })}
      <section class="section">
        <div class="container">
${entrada}
          <div class="card-grid">
${entradas
  .map(
    (e) => `            <article class="card" data-reveal>
              <h2 class="card__title">${escapar(e.titulo)}</h2>
              <p>${escapar(e.resumen)}</p>
              <a class="card__link" href="${e.href}">${escapar(e.cta)}</a>
            </article>`,
  )
  .join('\n')}
          </div>
        </div>
      </section>`,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
//-ACadémico
// ─────────────────────────────────────────────────────────────────────────────

function generarExcelencia() {
  const secciones = EXCELENCIA.map((tabla) => {
    const filas = tabla.filas
      .map((celdas) => {
        if (celdas.length === 1 && !/^(PREESCOLAR|PRIMERO|SEGUNDO|TERCERO|CUARTO|QUINTO|SEXTO|SEPTIMO|SÉPTIMO|OCTAVO|NOVENO|DECIMO|DÉCIMO|ONCE)$/.test(celdas[0])) {
          return `              <tr>
                <td>${escapar(celdas[0])}</td>
                <td></td>
                <td></td>
              </tr>`;
        }

        const celdaGrado = celdas[0];
        const esFilaGrado = celdas.length === 1;
        const completo = celdas.length >= 4;
        const celdasResueltas = [
          esFilaGrado ? celdaGrado : celdas[0],
          celdas.length >= 2 ? celdas[1] : '',
          celdas.length >= 3 ? celdas[2] : '',
          celdas.length >= 4 ? celdas[3] : '',
        ];

        return `              <tr${esFilaGrado ? ' class="tabla-grado"' : ''}>
                <th scope="row">${escapar(celdasResueltas[0])}</th>
                <td>${escapar(celdasResueltas[1])}</td>
                <td>${escapar(celdasResueltas[2])}${
                  completo ? '' : '\n                <span class="tabla__nota">Transcripción literal del documento original.</span>'
                }</td>
                <td>${escapar(celdasResueltas[3])}</td>
              </tr>`;
      })
      .join('\n');

    const notaPeriodos = { tercer: 'tercer', cuarto: 'cuarto', primer: 'primer', segundo: 'segundo' }[tabla.periodo] ?? tabla.periodo;

    return `      <section class="section" id="tabla-${tabla.anio}-${tabla.periodo}" data-excelencia data-excelencia-anio="${tabla.anio}" data-excelencia-periodo="${tabla.periodo}">
        <div class="container">
          <h2>${escapar(tabla.titulo)}</h2>
          <div class="tabla-envoltura" tabindex="0" role="region" aria-labelledby="titulo-${tabla.anio}-${tabla.periodo}">
            <table class="tabla">
              <caption id="titulo-${tabla.anio}-${tabla.periodo}">${escapar(tabla.titulo)}</caption>
              <thead>
                <tr>
                  <th scope="col">Grado</th>
                  <th scope="col">Grupo</th>
                  <th scope="col">Primer puesto</th>
                  <th scope="col">Segundo puesto</th>
                </tr>
              </thead>
              <tbody>
${filas}
              </tbody>
            </table>
          </div>
          <p class="tabla-fuente">Fuente: ${escapar(tabla.titulo.toLowerCase())}, período ${escapar(notaPeriodos)}. Transcripción literal del contenido institucional; se conservan el orden, la mayúscula y el agrupamiento de nombres tal como aparecen en el original.</p>
        </div>
      </section>`;
  }).join('\n');

  const opcionesAnio = ANIOS_EXCELENCIA.map(
    (a) => `                <option value="${a}">${a}</option>`,
  ).join('\n');

  escribir(
    'academico/excelencia-academica/index.html',
    documento({
      titulo: 'Excelencia académica — Institución Educativa Madre Laura',
      descripcion:
        'Resultados de excelencia académica de la Institución Educativa Madre Laura, transcritos literalmente del contenido institucional.',
      crumbs: [{ label: 'Académico', href: '/academico/' }, { label: 'Excelencia académica' }],
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Académico',
        titulo: 'Excelencia académica',
        lead: 'Resultados de excelencia académica por período y año, transcritos del contenido institucional.',
      })}
${indice([
        { id: 'filtros', label: 'Filtrar por año y período' },
        ...EXCELENCIA.map((t) => ({
          id: `tabla-${t.anio}-${t.periodo}`,
          label: `${t.titulo.toLowerCase()}`,
        })),
      ])}
      <section class="section" id="filtros">
        <div class="container">
          <h2>Filtrar por año y período</h2>
          <div class="filtros">
            <div class="filtros__campo">
              <label for="filtro-anio">Año</label>
              <select id="filtro-anio" data-filtro-excelencia="anio">
                <option value="">Todos los años</option>
${opcionesAnio}
              </select>
            </div>
            <div class="filtros__campo">
              <label for="filtro-periodo">Período</label>
              <select id="filtro-periodo" data-filtro-excelencia="periodo">
                <option value="">Todos los períodos</option>
                <option value="primer">Primer período</option>
                <option value="segundo">Segundo período</option>
                <option value="tercer">Tercer período</option>
                <option value="cuarto">Cuarto período</option>
              </select>
            </div>
          </div>
          <p class="tabla-fuente" role="status" data-contador-excelencia>${EXCELENCIA.length} tablas disponibles.</p>
        </div>
      </section>
${secciones}`,
    }),
  );
}

function generarAcademico() {
  escribir(
    'academico/index.html',
    indiceHtml({
      eyebrow: 'Académico',
      titulo: 'Académico',
      lead: 'Resultados académicos, horarios, planes de estudio y recursos para la comunidad educativa.',
      crumbs: [{ label: 'Académico' }],
      entrada: `            <p>La información académica de la institución se organiza por resultados de excelencia, horarios, planes y áreas, planeación y recursos de apoyo.</p>`,
      entradas: [
        {
          titulo: 'Excelencia académica',
          resumen: 'Resultados por grado y período, transcritos del contenido institucional.',
          href: '/academico/excelencia-academica/',
          cta: 'Ver resultados',
        },
        {
          titulo: 'Horarios',
          resumen: 'Horario general de clases y horarios por timbre.',
          href: '/academico/horarios/',
          cta: 'Ver horarios',
        },
        {
          titulo: 'Planes y áreas',
          resumen: 'Plan de estudios y programación por departamentos de áreas.',
          href: '/academico/planes/',
          cta: 'Ver planes',
        },
        {
          titulo: 'Planeación académica',
          resumen: 'Programación de la planeación por departamentos de áreas.',
          href: '/academico/planeacion/',
          cta: 'Ver planeación',
        },
        {
          titulo: 'Recursos académicos',
          resumen: 'Materiales y herramientas de apoyo al proceso de enseñanza.',
          href: '/academico/recursos/',
          cta: 'Ver recursos',
        },
      ],
    }),
  );
}

function generarPlaceholder({ ruta, crumbs, eyebrow, titulo, lead }) {
  escribir(
    `${ruta}/index.html`,
    documento({
      titulo: `${titulo} — Institución Educativa Madre Laura`,
      descripcion: lead,
      crumbs,
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({ eyebrow, titulo, lead })}
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

// ─────────────────────────────────────────────────────────────────────────────
// Comunidad
// ─────────────────────────────────────────────────────────────────────────────

function generarComunidad() {
  escribir(
    'comunidad/index.html',
    indiceHtml({
      eyebrow: 'Comunidad',
      titulo: 'Comunidad',
      lead: 'Gobierno escolar, familias, estudiantes, docentes y actividades de la comunidad educativa.',
      crumbs: [{ label: 'Comunidad' }],
      entrada: `            <p>La comunidad educativa de la Institución Educativa Madre Laura se organiza mediante el gobierno escolar y la participación de familias, estudiantes y docentes.</p>`,
      entradas: [
        {
          titulo: 'Gobierno escolar',
          resumen: 'Proceso de elección del personero y del representante de los estudiantes.',
          href: '/comunidad/gobierno-escolar/',
          cta: 'Ver gobierno escolar',
        },
        {
          titulo: 'Padres de familia',
          resumen: 'Reunión general de padres y Socialización de directrices.',
          href: '/comunidad/padres-de-familia/',
          cta: 'Ver información',
        },
        {
          titulo: 'Estudiantes',
          resumen: 'Información-dirigida a estudiantes de la institución.',
          href: '/comunidad/estudiantes/',
          cta: 'Ver información',
        },
        {
          titulo: 'Docentes',
          resumen: 'Información dirigida al cuerpo docente.',
          href: '/comunidad/docentes/',
          cta: 'Ver información',
        },
        {
          titulo: 'Convivencia',
          resumen: 'Acuerdos de convivencia y Manual de convivencia institucional.',
          href: '/comunidad/convivencia/',
          cta: 'Ver convivencia',
        },
        {
          titulo: 'Actividades comunitarias',
          resumen: 'Actividades y eventos de la comunidad educativa.',
          href: '/comunidad/actividades/',
          cta: 'Ver actividades',
        },
      ],
    }),
  );
}

function generarGobiernoEscolar() {
  escribir(
    'comunidad/gobierno-escolar/index.html',
    documento({
      titulo: 'Gobierno escolar — Institución Educativa Madre Laura',
      descripcion:
        'Proceso de elección del personero y del representante de los estudiantes de la Institución Educativa Madre Laura.',
      crumbs: [{ label: 'Comunidad', href: '/comunidad/' }, { label: 'Gobierno escolar' }],
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Comunidad',
        titulo: 'Gobierno escolar',
        lead: 'Proceso de elección del personero y del representante de los estudiantes.',
      })}
${bloque(
  'Proceso de elección',
  parrafos(GOBIERNO_ESCOLAR.descripcion),
)}
${indice([{ id: 'candidatos', label: 'Candidatos' }])}
${bloque(
  'Candidatos',
  `            <div class="notice" role="note">
              <p>${escapar(GOBIERNO_ESCOLAR.candidatos[0])}</p>
            </div>`,
  { id: 'candidatos' },
)}`,
    }),
  );
}

function generarPadres() {
  escribir(
    'comunidad/padres-de-familia/index.html',
    documento({
      titulo: 'Padres de familia — Institución Educativa Madre Laura',
      descripcion:
        'Reunión general de padres de familia y socialización de directrices de la Institución Educativa Madre Laura.',
      crumbs: [{ label: 'Comunidad', href: '/comunidad/' }, { label: 'Padres de familia' }],
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Comunidad',
        titulo: 'Padres de familia',
        lead: 'Reunión general de padres de familia y socialización de las directrices del año.',
      })}
${bloque(REUNION_PADRES.titulo, parrafos(REUNION_PADRES.descripcion))}`,
    }),
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Actualidad
// ─────────────────────────────────────────────────────────────────────────────

function generarActualidad() {
  escribir(
    'actualidad/index.html',
    indiceHtml({
      eyebrow: 'Actualidad',
      titulo: 'Actualidad',
      lead: 'Noticias, eventos y actividades de la comunidad educativa.',
      crumbs: [{ label: 'Actualidad' }],
      entrada: `            <p>Los eventos y actividades de la institución se documentan por año, incluyendo la Semana Laurista y las jornadas de premier día de clases.</p>`,
      entradas: [
        {
          titulo: 'Eventos',
          resumen: 'Bazar gastronómico, entrega de símbolos y feria de la ciencia.',
          href: '/actualidad/eventos/',
          cta: 'Ver eventos',
        },
        {
          titulo: 'Semana Laurista',
          resumen: 'Celebración de la semana Laurista con donatón y desafío Laurista.',
          href: '/actualidad/semana-laurista/',
          cta: 'Ver semana Laurista',
        },
        {
          titulo: 'Primer día 2026',
          resumen: '“Excavando en la profundidades del conocimiento”.',
          href: '/actualidad/primer-dia-2026/',
          cta: 'Ver jornada',
        },
        {
          titulo: 'Noticias',
          resumen: 'Novedades institucionales.',
          href: '/actualidad/noticias/',
          cta: 'Ver noticias',
        },
        {
          titulo: 'Archivo por año',
          resumen: 'Actividades archivadas por año.',
          href: '/actualidad/archivo/',
          cta: 'Ver archivo',
        },
      ],
    }),
  );
}

function generarEvento({ slug, crumbs, eyebrow, titulo, lead, fecha, descripcion, extra = '' }) {
  escribir(
    `${slug}/index.html`,
    documento({
      titulo: `${titulo} — Institución Educativa Madre Laura`,
      descripcion: lead,
      crumbs,
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({ eyebrow, titulo, lead })}
      <section class="section">
        <div class="container">
          ${fecha ? `          <p class="badge badge--outline">${escapar(fecha)}</p>` : ''}
          <div class="prose" style="margin-top: var(--space-5)">
${parrafos(descripcion)}
${extra}
          </div>
        </div>
      </section>`,
    }),
  );
}

function generarEventos() {
  escribir(
    'actualidad/eventos/index.html',
    documento({
      titulo: 'Eventos — Institución Educativa Madre Laura',
      descripcion:
        'Eventos institucionales de la Institución Educativa Madre Laura: bazar gastronómico, entrega de símbolos y feria de la ciencia.',
      crumbs: [{ label: 'Actualidad', href: '/actualidad/' }, { label: 'Eventos' }],
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Actualidad',
        titulo: 'Eventos',
        lead: 'Bazar gastronómico, entrega de símbolos y feria de la ciencia, tecnología y creatividad.',
      })}
${indice([
        { id: 'bazar', label: 'Bazar gastronómico' },
        { id: 'simbolos', label: 'Entrega de símbolos' },
        { id: 'feria', label: 'Feria de la ciencia' },
      ])}
${bloque(BAZAR.titulo, parrafos(BAZAR.descripcion), { id: 'bazar' })}
${bloque(ENTREGA_SIMBOLOS.titulo, parrafos(ENTREGA_SIMBOLOS.descripcion), { id: 'simbolos' })}
${bloque(
  FERIA_CIENCIA.titulo,
  `            <p>${FERIA_CIENCIA.stands
    .map(
      (s, i) =>
        `            <h3>${escapar(s.titulo)}</h3>\n${parrafos(s.descripcion)}`,
    )
    .join('\n')}`,
  { id: 'feria' },
)}`,
    }),
  );

  generarEvento({
    slug: 'actualidad/semana-laurista',
    crumbs: [{ label: 'Actualidad', href: '/actualidad/' }, { label: 'Semana Laurista' }],
    eyebrow: 'Actualidad',
    titulo: SEMANA_LAURISTA.titulo,
    lead: 'Celebración de la semana Laurista durante la semana del 24 al 29 de octubre de 2022.',
    descripcion: SEMANA_LAURISTA.descripcion,
    extra: `\n            <h2>${escapar(SEMANA_LAURISTA.jornadas[2].titulo)}</h2>\n${parrafos(SEMANA_LAURISTA.jornadas[2].descripcion)}\n            <ul class="lista-puntos">\n${SEMANA_LAURISTA.jornadas[2].premios.map((p) => `              <li>${escapar(p)}</li>`).join('\n')}\n            </ul>\n${parrafos(SEMANA_LAURISTA.jornadas[2].descripcionTarde)}\n            <div class="notice" role="note">\n              <p>${escapar(SEMANA_LAURISTA.nota)}</p>\n            </div>`,
  });

  generarEvento({
    slug: 'actualidad/primer-dia-2026',
    crumbs: [{ label: 'Actualidad', href: '/actualidad/' }, { label: 'Primer día 2026' }],
    eyebrow: 'Actualidad',
    titulo: PRIMER_DIA_2026.titulo,
    lead: PRIMER_DIA_2026.lema,
    descripcion: PRIMER_DIA_2026.descripcion,
    extra: `\n            <div class="notice" role="note">\n              <p>${escapar(PRIMER_DIA_2026.pendientes[0])}</p>\n            </div>`,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Recursos
// ─────────────────────────────────────────────────────────────────────────────

function tablaDocumentos(lista, caption) {
  const filas = lista
    .map(
      (d) => `              <tr>
                <th scope="row">${escapar(d.titulo)}</th>
                <td>${escapar(d.grupo)}</td>
                <td>${d.anio ? String(d.anio) : '—'}</td>
                <td class="pendiente"><span class="pendiente__badge">Pendiente</span></td>
              </tr>`,
    )
    .join('\n');

  return `          <div class="tabla-envoltura" tabindex="0" role="region" aria-labelledby="tabla-documentos">
            <table class="tabla">
              <caption id="tabla-documentos">${escapar(caption)}</caption>
              <thead>
                <tr>
                  <th scope="col">Documento</th>
                  <th scope="col">Grupo</th>
                  <th scope="col">Año</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
${filas}
              </tbody>
            </table>
          </div>`;
}

function generarRecursos() {
  const academicos = DOCUMENTOS.filter((d) => d.grupo === 'Académico');
  const gestion = DOCUMENTOS.filter((d) => d.grupo === 'Gestión institucional');

  escribir(
    'recursos/index.html',
    indiceHtml({
      eyebrow: 'Recursos',
      titulo: 'Recursos',
      lead: 'Documentos institucionales, documentos de gestión, cronogramas y formatos.',
      crumbs: [{ label: 'Recursos' }],
      entrada: `            <p>${escapar(INTRO_DOCUMENTOS)}</p>`,
      entradas: [
        {
          titulo: 'Documentos institucionales',
          resumen: 'Plan de mejoramiento, inducción y programación académica.',
          href: '/recursos/documentos/',
          cta: 'Ver documentos',
        },
        {
          titulo: 'Documentos de gestión',
          resumen: 'PEI, Manual de convivencia y SIEE.',
          href: '/recursos/gestion/',
          cta: 'Ver gestión',
        },
        {
          titulo: 'Cronogramas',
          resumen: 'Cronogramas de atención a padres y acompañamiento en descansos.',
          href: '/recursos/cronogramas/',
          cta: 'Ver cronogramas',
        },
        {
          titulo: 'Formatos',
          resumen: 'Formatos institucionales.',
          href: '/recursos/formatos/',
          cta: 'Ver formatos',
        },
      ],
    }),
  );

  escribir(
    'recursos/documentos/index.html',
    documento({
      titulo: 'Documentos institucionales — Institución Educativa Madre Laura',
      descripcion: INTRO_DOCUMENTOS,
      crumbs: [{ label: 'Recursos', href: '/recursos/' }, { label: 'Documentos institucionales' }],
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Recursos',
        titulo: 'Documentos institucionales',
        lead: 'Documentos y formatos de interés para docentes y la comunidad educativa.',
      })}
      <section class="section">
        <div class="container">
          <div class="prose">
            <p>${escapar(INTRO_DOCUMENTOS)}</p>
          </div>
${tablaDocumentos(academicos, 'Documentos institucionales')}
          <div class="notice" role="note">
            <p>${escapar(NOTA_DOCUMENTOS)}</p>
          </div>
        </div>
      </section>`,
    }),
  );

  escribir(
    'recursos/gestion/index.html',
    documento({
      titulo: 'Documentos de gestión — Institución Educativa Madre Laura',
      descripcion: INTRO_GESTION,
      crumbs: [{ label: 'Recursos', href: '/recursos/' }, { label: 'Documentos de gestión' }],
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Recursos',
        titulo: 'Documentos de gestión',
        lead: 'Documentos que determinan el direccionamiento institucional en todos sus ámbitos.',
      })}
      <section class="section">
        <div class="container">
          <div class="prose">
            <p>${escapar(INTRO_GESTION)}</p>
          </div>
${tablaDocumentos(gestion, 'Documentos de gestión institucional')}
          <div class="notice" role="note">
            <p>${escapar(NOTA_DOCUMENTOS)}</p>
          </div>
        </div>
      </section>`,
    }),
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Institución: contenido real
// ─────────────────────────────────────────────────────────────────────────────

function generarPrincipios() {
  const puntos = PRINCIPIOS_RECTORES.propuesta.puntos
    .map((p) => `              <li>${escapar(p)}</li>`)
    .join('\n');

  escribir(
    'institucion/principios-rectores/index.html',
    documento({
      titulo: 'Principios rectores — Institución Educativa Madre Laura',
      descripcion:
        'Principios rectores de la Institución Educativa Madre Laura de Apartadó, Antioquia.',
      crumbs: [{ label: 'Institución', href: '/institucion/' }, { label: 'Principios rectores' }],
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Institución',
        titulo: 'Principios rectores',
        lead: 'Los principios que orientan el quehacer educativo de la institución.',
      })}
${indice([{ id: 'fundamento', label: 'Fundamento' }, { id: 'propuesta', label: 'En consecuencia, proponemos' }])}
${bloque('Fundamento', parrafos(PRINCIPIOS_RECTORES.introduccion), { id: 'fundamento' })}
${bloque(
  PRINCIPIOS_RECTORES.propuesta.titulo,
  `            <ul class="lista-puntos">
${puntos}
            </ul>`,
  { id: 'propuesta' },
)}`,
    }),
  );
}

function generarValores() {
  const ejes = VALORES.ejes.map((v) => `            <li>${escapar(v)}</li>`).join('\n');

  escribir(
    'institucion/valores/index.html',
    documento({
      titulo: 'Valores institucionales — Institución Educativa Madre Laura',
      descripcion:
        'Valores institucionales de la Institución Educativa Madre Laura: justicia, trabajo, participación, solidaridad, organización y paz.',
      crumbs: [{ label: 'Institución', href: '/institucion/' }, { label: 'Valores institucionales' }],
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Institución',
        titulo: 'Valores institucionales',
        lead: 'Valores que la comunidad educativa trabaja y sustenta.',
      })}
${indice([
        { id: 'proposito', label: 'Propósito' },
        { id: 'ejes', label: 'Ejes de trabajo' },
        { id: 'mision', label: 'Misión' },
        { id: 'filosofia', label: 'Filosofía' },
        { id: 'vision', label: 'Visión' },
      ])}
${bloque('Propósito', parrafos(VALORES.introduccion), { id: 'proposito' })}
${bloque('Ejes de trabajo', `            <ul class="lista-valores">
${ejes}
            </ul>`, { id: 'ejes' })}
${bloque(MISION.titulo, parrafos(MISION.parrafos), { id: 'mision' })}
${bloque(FILOSOFIA.titulo, parrafos(FILOSOFIA.parrafos), { id: 'filosofia' })}
${bloque(VISION.titulo, parrafos(VISION.parrafos), { id: 'vision' })}`,
    }),
  );
}

function generarSimbolos() {
  const colores = BANDERA.colores
    .map(
      (c) => `            <dt>${escapar(c.nombre)}</dt>
            <dd>${escapar(c.descripcion)}${c.cierre ? ` ${escapar(c.cierre)}` : ''}</dd>`,
    )
    .join('\n            ');

  const himno = HIMNO.secciones
    .map(
      (s) => `            <h3>${escapar(s.nombre)}</h3>
            <ul class="versos">
${s.versos.map((v) => `              <li>${escapar(v)}</li>`).join('\n')}
            </ul>`,
    )
    .join('\n');

  escribir(
    'institucion/simbolos/index.html',
    documento({
      titulo: 'Símbolos institucionales — Institución Educativa Madre Laura',
      descripcion: 'Bandera, escudo, lema e himno de la Institución Educativa Madre Laura.',
      crumbs: [{ label: 'Institución', href: '/institucion/' }, { label: 'Símbolos institucionales' }],
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Institución',
        titulo: 'Símbolos institucionales',
        lead: 'Bandera, escudo, lema e himno de la institución.',
      })}
${indice([
        { id: 'lema', label: 'Lema institucional' },
        { id: 'bandera', label: 'La bandera' },
        { id: 'escudo', label: 'El escudo' },
        { id: 'himno', label: 'El himno' },
      ])}
${bloque(LEMA.titulo, `            <p><strong>${escapar(LEMA.texto)}</strong></p>`, { id: 'lema' })}
${bloque(BANDERA.titulo, `${parrafos(BANDERA.descripcion)}
            <h3>Significado de los colores</h3>
            <dl class="definiciones">
            ${colores}
            </dl>`, { id: 'bandera' })}
${bloque(ESCUDO.titulo, parrafos(ESCUDO.descripcion), { id: 'escudo' })}
${bloque(HIMNO.titulo, `${parrafos(HIMNO.descripcion)}
${himno}`, { id: 'himno' })}`,
    }),
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Contacto
// ─────────────────────────────────────────────────────────────────────────────

function generarContacto() {
  escribir(
    'contacto/index.html',
    documento({
      titulo: 'Contacto — Institución Educativa Madre Laura',
      descripcion: 'Datos de contacto de la Institución Educativa Madre Laura de Apartadó, Antioquia.',
      crumbs: [{ label: 'Contacto' }],
      rutaCss: [CSS_TABLAS],
      cuerpo: `      ${encabezadoPagina({
        eyebrow: 'Contacto',
        titulo: 'Contacto',
        lead: 'Información de contacto de la Institución Educativa Madre Laura.',
      })}
      <section class="section">
        <div class="container">
          <div class="prose">
            <p>Los datos de contacto institutional (dirección, teléfono, correo y horários de atención) no están especificados en los documentos institucionales disponibles.</p>
            <dl class="definiciones">
              <div>
                <dt>Ubicación</dt>
                <dd>Barrio Ortiz, comuna N.° 4 José Joaquín Vélez, municipio de Apartadó, Antioquia, Colombia.</dd>
              </div>
              <div>
                <dt>Teléfono</dt>
                <dd>Información no especificada en los documentos institucionales.</dd>
              </div>
              <div>
                <dt>Correo electrónico</dt>
                <dd>Información no especificada en los documentos institucionales.</dd>
              </div>
              <div>
                <dt>Horario de atención</dt>
                <dd>Información no especificada en los documentos institucionales.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>`,
    }),
  );
}

// ─────────────────────────────────────────────────────────────────────────────

console.log('Generando secciones restantes…');

generarAcademico();
generarExcelencia();
generarPlaceholder({
  ruta: 'academico/horarios',
  crumbs: [{ label: 'Académico', href: '/academico/' }, { label: 'Horarios' }],
  eyebrow: 'Académico',
  titulo: 'Horarios',
  lead: 'Horario general de clases y horarios para timbres.',
});
generarPlaceholder({
  ruta: 'academico/planes',
  crumbs: [{ label: 'Académico', href: '/academico/' }, { label: 'Planes y áreas' }],
  eyebrow: 'Académico',
  titulo: 'Planes y áreas',
  lead: 'Plan de estudios y programación por departamentos de áreas.',
});
generarPlaceholder({
  ruta: 'academico/planeacion',
  crumbs: [{ label: 'Académico', href: '/academico/' }, { label: 'Planeación académica' }],
  eyebrow: 'Académico',
  titulo: 'Planeación académica',
  lead: 'Programación para la planeación por departamentos de áreas.',
});
generarPlaceholder({
  ruta: 'academico/recursos',
  crumbs: [{ label: 'Académico', href: '/academico/' }, { label: 'Recursos académicos' }],
  eyebrow: 'Académico',
  titulo: 'Recursos académicos',
  lead: 'Materiales y herramientas de apoyo al proceso de enseñanza.',
});

generarComunidad();
generarGobiernoEscolar();
generarPadres();
generarPlaceholder({
  ruta: 'comunidad/estudiantes',
  crumbs: [{ label: 'Comunidad', href: '/comunidad/' }, { label: 'Estudiantes' }],
  eyebrow: 'Comunidad',
  titulo: 'Estudiantes',
  lead: 'Información dirigida a los estudiantes de la institución.',
});
generarPlaceholder({
  ruta: 'comunidad/docentes',
  crumbs: [{ label: 'Comunidad', href: '/comunidad/' }, { label: 'Docentes' }],
  eyebrow: 'Comunidad',
  titulo: 'Docentes',
  lead: 'Información dirigida al cuerpo docente de la institución.',
});
generarPlaceholder({
  ruta: 'comunidad/convivencia',
  crumbs: [{ label: 'Comunidad', href: '/comunidad/' }, { label: 'Convivencia' }],
  eyebrow: 'Comunidad',
  titulo: 'Convivencia',
  lead: 'Acuerdos de convivencia institucional.',
});
generarPlaceholder({
  ruta: 'comunidad/actividades',
  crumbs: [{ label: 'Comunidad', href: '/comunidad/' }, { label: 'Actividades comunitarias' }],
  eyebrow: 'Comunidad',
  titulo: 'Actividades comunitarias',
  lead: 'Actividades y eventos de la comunidad educativa.',
});

generarActualidad();
generarEventos();
generarPlaceholder({
  ruta: 'actualidad/noticias',
  crumbs: [{ label: 'Actualidad', href: '/actualidad/' }, { label: 'Noticias' }],
  eyebrow: 'Actualidad',
  titulo: 'Noticias',
  lead: 'Novedades de la institución.',
});
generarPlaceholder({
  ruta: 'actualidad/archivo',
  crumbs: [{ label: 'Actualidad', href: '/actualidad/' }, { label: 'Archivo por año' }],
  eyebrow: 'Actualidad',
  titulo: 'Archivo por año',
  lead: 'Actividades de la institución archivadas por año.',
});

generarRecursos();
generarPlaceholder({
  ruta: 'recursos/cronogramas',
  crumbs: [{ label: 'Recursos', href: '/recursos/' }, { label: 'Cronogramas' }],
  eyebrow: 'Recursos',
  titulo: 'Cronogramas',
  lead: 'Cronogramas de atención a padres, dirección de grupo, informes y descansos.',
});
generarPlaceholder({
  ruta: 'recursos/formatos',
  crumbs: [{ label: 'Recursos', href: '/recursos/' }, { label: 'Formatos' }],
  eyebrow: 'Recursos',
  titulo: 'Formatos',
  lead: 'Formatos institucionales.',
});

generarPrincipios();
generarValores();
generarSimbolos();
generarContacto();

console.log(`\n${GENERADOS.length} páginas generadas.`);
