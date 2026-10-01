import '../components/theme-toggle.js';
import '../components/site-header.js';
import '../components/site-footer.js';
import '../components/breadcrumbs.js';
import { iniciarRevelado } from './scroll-reveal.js';

const ANIO = document.querySelector('[data-anio]');
if (ANIO) {
  ANIO.textContent = String(new Date().getFullYear());
}

iniciarRevelado();