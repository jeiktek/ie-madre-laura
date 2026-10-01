import { RUTAS_FOOTER, RUTAS_ACADEMICAS, RUTAS_COMUNIDAD, REDES_Y_ACCESOS } from '../data/navegacion.js';
import { icono } from './icon.js';

function lista(rutas) {
  return rutas
    .map((ruta) => `<li><a href="${ruta.href}">${ruta.label}</a></li>`)
    .join('');
}

export class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="site-footer__grid">
            <div>
              <p class="site-footer__title">Institución Educativa Madre Laura</p>
              <p>Apartadó, Antioquia — Colombia</p>
              <p>
                <a href="/contacto/">Contacto y ubicación</a>
              </p>
            </div>
            <div>
              <p class="site-footer__title">Institución</p>
              <ul class="site-footer__list">${lista(RUTAS_FOOTER)}</ul>
            </div>
            <div>
              <p class="site-footer__title">Académico y comunidad</p>
              <ul class="site-footer__list">${lista(RUTAS_ACADEMICAS)}</ul>
              <ul class="site-footer__list">${lista(RUTAS_COMUNIDAD)}</ul>
            </div>
            <div>
              <p class="site-footer__title">Accesos</p>
              <ul class="site-footer__list">${lista(REDES_Y_ACCESOS)}</ul>
            </div>
          </div>
          <div class="site-footer__bottom">
            <p>Institución Educativa Madre Laura de Apartadó</p>
            <p>Apartadó, Antioquia — Colombia</p>
          </div>
        </div>
      </footer>
    `;

    this.querySelectorAll('[data-icon]').forEach((marcador) => {
      icono(marcador.dataset.icon).then((svg) => marcador.replaceChildren(svg));
    });
  }
}

customElements.define('site-footer', SiteFooter);