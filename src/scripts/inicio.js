import { ACCESOS_RAPIDOS, SECCIONES_INICIO } from '../data/inicio.js';
import { icono } from '../components/icon.js';

export async function montarInicio() {
  const raiz = document.querySelector('[data-inicio]');
  if (!raiz) return;

  await montarAccesos();
  await montarSecciones();
  raiz.dataset.inicioListo = 'true';
}

async function montarAccesos() {
  const contenedor = document.querySelector('[data-accesos]');
  if (!contenedor) return;

  const items = await Promise.all(
    ACCESOS_RAPIDOS.map(async (acceso) => {
      const svg = await icono(acceso.icono, 'icon');
      return `
        <li class="acceso" data-reveal>
          <a class="acceso__enlace" href="${acceso.href}">
            <span class="acceso__icono">${svg.outerHTML}</span>
            <span class="acceso__label">${acceso.label}</span>
            <svg class="icon acceso__flecha" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </li>
      `;
    }),
  );

  contenedor.innerHTML = items.join('');
}

async function montarSecciones() {
  const contenedor = document.querySelector('[data-secciones]');
  if (!contenedor) return;

  const items = await Promise.all(
    SECCIONES_INICIO.map(async (seccion) => {
      const svg = await icono(seccion.icono, 'icon');
      return `
        <article class="card" data-reveal>
          <span class="tarjeta__icono">${svg.outerHTML}</span>
          <h3 class="card__title">${seccion.titulo}</h3>
          <p>${seccion.texto}</p>
          <a class="card__link" href="${seccion.href}">Conocer ${seccion.titulo.toLowerCase()}</a>
        </article>
      `;
    }),
  );

  contenedor.innerHTML = items.join('');
}
