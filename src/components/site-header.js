import { NAVEGACION, esRutaActiva } from '../data/navegacion.js';
import { icono } from './icon.js';

const ICONO_LOGO = 'school';

function itemNav(item) {
  const activo = esRutaActiva(item.href) ? ' aria-current="page"' : '';
  return `<li class="site-nav__item"><a class="site-nav__link" href="${item.href}"${activo}>${item.label}</a></li>`;
}

export class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.enlazarMenuMovil();
  }

  render() {
    const lista = NAVEGACION.map(itemNav).join('');

    this.innerHTML = `
      <header class="site-header">
        <div class="container site-header__bar">
          <a class="site-header__logo" href="/">
            <span class="site-header__logo-mark" data-icon="${ICONO_LOGO}"></span>
            <span>Institución Educativa<br>Madre Laura</span>
          </a>
          <nav class="site-nav" id="nav-principal" aria-label="Navegación principal">
            <ul class="site-nav__list">${lista}</ul>
          </nav>
          <div class="site-header__actions">
            <site-theme-toggle></site-theme-toggle>
            <button
              class="icon-btn nav-toggle"
              type="button"
              aria-expanded="false"
              aria-controls="nav-principal"
              aria-label="Abrir menú de navegación"
            >
              <span data-icon="menu"></span>
            </button>
          </div>
        </div>
      </header>
    `;

    this.montarIconos();
  }

  async montarIconos() {
    const marcadores = this.querySelectorAll('[data-icon]');
    for (const marcador of marcadores) {
      const svg = await icono(marcador.dataset.icon);
      marcador.replaceChildren(svg);
    }
  }

  enlazarMenuMovil() {
    const boton = this.querySelector('.nav-toggle');
    const nav = this.querySelector('.site-nav');
    if (!boton || !nav) return;

    boton.addEventListener('click', () => {
      const abierto = nav.classList.toggle('is-open');
      boton.setAttribute('aria-expanded', String(abierto));
      boton.setAttribute('aria-label', abierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    });
  }
}

customElements.define('site-header', SiteHeader);