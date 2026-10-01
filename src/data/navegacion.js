export const NAVEGACION = [
  { label: 'Inicio', href: '/', icon: 'home' },
  { label: 'Institución', href: '/institucion/', icon: 'school' },
  { label: 'Académico', href: '/academico/', icon: 'book-open' },
  { label: 'Comunidad', href: '/comunidad/', icon: 'users' },
  { label: 'Actualidad', href: '/actualidad/', icon: 'newspaper' },
  { label: 'Recursos', href: '/recursos/', icon: 'file-text' },
  { label: 'Contacto', href: '/contacto/', icon: 'phone' },
];

export const SECCIONES = [
  {
    label: 'Institución',
    href: '/institucion/',
    icon: 'school',
    hijos: [
      { label: 'Contextualización institucional', href: '/institucion/contextualizacion/' },
      { label: 'Reseña histórica', href: '/institucion/historia/' },
      { label: 'Principios rectores', href: '/institucion/principios-rectores/' },
      { label: 'Valores institucionales', href: '/institucion/valores/' },
      { label: 'Símbolos institucionales', href: '/institucion/simbolos/' },
      { label: 'Identidad Laurista', href: '/institucion/identidad-laurista/' },
    ],
  },
  {
    label: 'Académico',
    href: '/academico/',
    icon: 'book-open',
    hijos: [
      { label: 'Excelencia académica', href: '/academico/excelencia-academica/' },
      { label: 'Horarios', href: '/academico/horarios/' },
      { label: 'Planes y áreas', href: '/academico/planes/' },
      { label: 'Planeación académica', href: '/academico/planeacion/' },
      { label: 'Recursos académicos', href: '/academico/recursos/' },
    ],
  },
  {
    label: 'Comunidad',
    href: '/comunidad/',
    icon: 'users',
    hijos: [
      { label: 'Gobierno escolar', href: '/comunidad/gobierno-escolar/' },
      { label: 'Padres de familia', href: '/comunidad/padres-de-familia/' },
      { label: 'Estudiantes', href: '/comunidad/estudiantes/' },
      { label: 'Docentes', href: '/comunidad/docentes/' },
      { label: 'Convivencia', href: '/comunidad/convivencia/' },
      { label: 'Actividades comunitarias', href: '/comunidad/actividades/' },
    ],
  },
  {
    label: 'Actualidad',
    href: '/actualidad/',
    icon: 'newspaper',
    hijos: [
      { label: 'Noticias', href: '/actualidad/noticias/' },
      { label: 'Eventos', href: '/actualidad/eventos/' },
      { label: 'Semana Laurista', href: '/actualidad/semana-laurista/' },
      { label: 'Archivo por año', href: '/actualidad/archivo/' },
    ],
  },
  {
    label: 'Recursos',
    href: '/recursos/',
    icon: 'file-text',
    hijos: [
      { label: 'Documentos institucionales', href: '/recursos/documentos/' },
      { label: 'Documentos de gestión', href: '/recursos/gestion/' },
      { label: 'Cronogramas', href: '/recursos/cronogramas/' },
      { label: 'Formatos', href: '/recursos/formatos/' },
    ],
  },
];

export const RUTAS_FOOTER = [
  { label: 'Institución Educativa Madre Laura', href: '/institucion/' },
  { label: 'Reseña histórica', href: '/institucion/historia/' },
  { label: 'Valores institucionales', href: '/institucion/valores/' },
  { label: 'Símbolos institucionales', href: '/institucion/simbolos/' },
];

export const RUTAS_ACADEMICAS = [
  { label: 'Excelencia académica', href: '/academico/excelencia-academica/' },
  { label: 'Horarios', href: '/academico/horarios/' },
  { label: 'Planes y áreas', href: '/academico/planes/' },
  { label: 'Recursos académicos', href: '/academico/recursos/' },
];

export const RUTAS_COMUNIDAD = [
  { label: 'Gobierno escolar', href: '/comunidad/gobierno-escolar/' },
  { label: 'Padres de familia', href: '/comunidad/padres-de-familia/' },
  { label: 'Estudiantes', href: '/comunidad/estudiantes/' },
  { label: 'Docentes', href: '/comunidad/docentes/' },
];

export const REDES_Y_ACCESOS = [
  { label: 'Noticias', href: '/actualidad/noticias/' },
  { label: 'Eventos', href: '/actualidad/eventos/' },
  { label: 'Documentos', href: '/recursos/documentos/' },
  { label: 'Cronogramas', href: '/recursos/cronogramas/' },
  { label: 'Contacto', href: '/contacto/' },
];

export function rutaActual() {
  const ruta = window.location.pathname;
  return ruta.endsWith('/') ? ruta : `${ruta}/`;
}

export function esRutaActiva(href) {
  const actual = rutaActual();
  if (href === '/') return actual === '/';
  return actual === href || actual.startsWith(href);
}