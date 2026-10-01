import { readFileSync, writeFileSync } from 'node:fs';

const BASE = new URL('..', import.meta.url).pathname;
const RUTA_FUENTE = `${BASE}contenido.txt`;
const RUTA_SALIDA = `${BASE}src/data/excelencia.js`;

const lineas = readFileSync(RUTA_FUENTE, 'utf8').split(/\r?\n/);

const GRADOS = [
  'PREESCOLAR',
  'PRIMERO',
  'SEGUNDO',
  'TERCERO',
  'CUARTO',
  'QUINTO',
  'SEXTO',
  'SÉPTIMO',
  'SEPTIMO',
  'OCTAVO',
  'NOVENO',
  'DÉCIMO',
  'DECIMO',
  'ONCE',
];

function esEncabezado(linea) {
  return /^GRADO\t/.test(linea);
}

function esLineaVacia(linea) {
  return linea.trim() === '';
}

function esTitulo(linea) {
  const limpia = linea.trim();
  return (
    limpia.length > 0 &&
    limpia.length < 120 &&
    /^[A-ZÁÉÍÓÚÑ0-9 .,:;°ÁÉÍÓÚÑáéíóúñ'’()\-–]+$/.test(limpia) &&
    /[A-ZÁÉÍÚÑ]{3}/.test(limpia)
  );
}

function detectarAnio(linea) {
  const m = linea.match(/\b(20\d\d)\b/);
  return m ? Number(m[1]) : null;
}

function detectarPeriodo(titulo) {
  const m = titulo.match(
    /(PRIMER|SEGUNDO|TERCER|CUARTO|QUINTO|SEXTO)[A-ZÁÉÍÓÚ]*\s*(PERIODO|PERÍODO)/i,
  );
  if (!m) return null;
  const MAP = {
    PRIMER: 'primer',
    SEGUNDO: 'segundo',
    TERCER: 'tercer',
    CUARTO: 'cuarto',
    QUINTO: 'quinto',
    SEXTO: 'sexto',
  };
  return MAP[m[1].toUpperCase()] ?? null;
}

const tablas = [];
let tituloActual = null;
let anioActual = null;
let i = 0;

while (i < lineas.length) {
  const linea = lineas[i];

  if (esLineaVacia(linea)) {
    i += 1;
    continue;
  }

  if (esEncabezado(linea)) {
    const filas = [];
    let j = i + 1;
    let vacias = 0;

    while (j < lineas.length) {
      const actual = lineas[j];

      if (esLineaVacia(actual)) {
        vacias += 1;
        if (vacias >= 2) break;
        j += 1;
        continue;
      }

      if (esEncabezado(actual)) break;
      if (!actual.includes('\t')) {
        const limpia = actual.trim();
        if (limpia === '') {
          j += 1;
          continue;
        }
        if (esTitulo(limpia) && !GRADOS.includes(limpia)) break;
        if (/^\s*#{0,2}\s*20\d\d/.test(limpia)) break;
        filas.push([limpia]);
        j += 1;
        continue;
      }

      const celdas = actual.split('\t').map((c) => c.trim());

      if (celdas.some((c) => c !== '')) {
        filas.push(celdas);
        vacias = 0;
      } else {
        vacias += 1;
        if (vacias >= 2) break;
      }

      j += 1;
    }

    tablas.push({
      anio: anioActual,
      titulo: tituloActual,
      periodo: tituloActual ? detectarPeriodo(tituloActual) : null,
      filas,
    });

    i = j;
    continue;
  }

  if (esTitulo(linea) && /EXCELENCIA/i.test(linea)) {
    tituloActual = linea.trim();
    const anio = detectarAnio(linea);
    if (anio) anioActual = anio;
    i += 1;
    continue;
  }

  const anio = detectarAnio(linea);
  if (anio && /^\s*#{0,2}\s*20\d\d/.test(linea)) anioActual = anio;

  i += 1;
}

// hereda el año de la tabla anterior cuando falta
let anioPrevio = null;
for (const tabla of tablas) {
  if (tabla.anio) anioPrevio = tabla.anio;
  else tabla.anio = anioPrevio;
}

const salida = `// Generado por scripts/extraer-excelencia.mjs desde contenido.txt.
// No editar a mano: la fuente manda. Corre \`npm run generate:excellence\`.

export const EXCELENCIA = ${JSON.stringify(tablas, null, 2)};

export const ANIOS_EXCELENCIA = [...new Set(EXCELENCIA.map((t) => t.anio).filter(Boolean))].sort(
  (a, b) => a - b,
);

export function clavePeriodo(anio, periodo) {
  return \`\${anio}-\${periodo ?? 'sin-periodo'}\`;
}
`;

writeFileSync(RUTA_SALIDA, salida, 'utf8');

// Autoverificación: toda celda extraída debe existir literalmente en el fuente.
// Falla ruidosamente si alguien edita el archivo generado a mano.
const fuente = readFileSync(RUTA_FUENTE, 'utf8');
const inventadas = [];
for (const tabla of tablas) {
  for (const fila of tabla.filas) {
    for (const celda of fila) {
      if (celda && !fuente.includes(celda)) inventadas.push({ tabla: tabla.titulo, celda });
    }
  }
}

const resumen = tablas.map((t) => ({
  anio: t.anio,
  titulo: t.titulo,
  periodo: t.periodo,
  filas: t.filas.length,
  irregulares: t.filas.filter((f) => f.length !== 4).length,
}));

console.log('Tablas detectadas:');
for (const r of resumen) {
  console.log(
    `  ${r.anio ?? '????'}  ${(r.periodo ?? 'sin periodo').padEnd(8)} ${String(r.filas).padStart(4)} filas (${r.irregulares} con celdas != 4)  ${r.titulo ?? ''}`,
  );
}

const total = tablas.reduce((n, t) => n + t.filas.length, 0);
console.log(`\nTotal: ${total} filas transcritas.`);

if (inventadas.length > 0) {
  console.error(`\nERROR: ${inventadas.length} celda(s) no existen en contenido.txt:`);
  for (const inv of inventadas.slice(0, 20)) {
    console.error(`  [${inv.tabla}] ${JSON.stringify(inv.celda)}`);
  }
  process.exit(1);
}

console.log('Verificación OK: cada celda existe literalmente en contenido.txt.');
