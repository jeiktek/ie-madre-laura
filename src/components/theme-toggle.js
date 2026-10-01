import { icono } from './icon.js';

const CLAVE = 'madre-laura-tema';
const ICONOS = { claro: 'sun', oscuro: 'moon' };

function temaGuardado() {
  try {
    return localStorage.getItem(CLAVE);
  } catch {
    return null;
  }
}

function aplicarTema(tema) {
  if (tema === 'light' || tema === 'dark') {
    document.documentElement.setAttribute('data-theme', tema);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

export class SiteThemeToggle extends HTMLElement {
  connectedCallback() {
    this.render();
    this.aplicarEstado();
    this.addEventListener('click', () => this.alternar());
  }

  render() {
    this.innerHTML = `
      <button class="icon-btn theme-toggle" type="button" aria-pressed="false">
        <span class="visually-hidden">Tema oscuro</span>
        <span data-icon-claro="${ICONOS.claro}"></span>
        <span data-icon-oscuro="${ICONOS.oscuro}"></span>
      </button>
    `;

    this.querySelectorAll('[data-icon-claro], [data-icon-oscuro]').forEach((marcador) => {
      const nombre = marcador.dataset.iconClaro ?? marcador.dataset.iconOscuro;
      icono(nombre).then((svg) => marcador.replaceChildren(svg));
    });
  }

  temaEfectivo() {
    const explicito = document.documentElement.getAttribute('data-theme');
    if (explicito) return explicito;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  aplicarEstado() {
    const oscuro = this.temaEfectivo() === 'dark';
    const boton = this.querySelector('.theme-toggle');
    if (boton) boton.setAttribute('aria-pressed', String(oscuro));
  }

  alternar() {
    const siguiente = this.temaEfectivo() === 'dark' ? 'light' : 'dark';
    aplicarTema(siguiente);
    try {
      localStorage.setItem(CLAVE, siguiente);
    } catch {
      void 0;
    }
    this.aplicarEstado();
  }
}

aplicarTema(temaGuardado());

customElements.define('site-theme-toggle', SiteThemeToggle);