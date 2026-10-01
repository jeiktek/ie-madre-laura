import { icono } from './icon.js';

export class SiteBreadcrumbs extends HTMLElement {
  static get observedAttributes() {
    return ['crumbs'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  render() {
    const crumbs = SiteBreadcrumbs.parsear(this.getAttribute('crumbs'));
    if (crumbs.length === 0) {
      this.replaceChildren();
      return;
    }

    const items = crumbs
      .map((crumb, indice) => {
        const esUltimo = indice === crumbs.length - 1;
        const cuerpo = esUltimo
          ? `<span aria-current="page">${crumb.label}</span>`
          : `<a href="${crumb.href}">${crumb.label}</a>`;
        return `<li class="breadcrumbs__item">${cuerpo}</li>`;
      })
      .join('');

    this.innerHTML = `
      <nav class="container breadcrumbs" aria-label="Ruta de navegación">
        <ol class="breadcrumbs__list">
          <li class="breadcrumbs__item"><a href="/">Inicio</a></li>
          ${items}
        </ol>
      </nav>
    `;
  }

  static parsear(valor) {
    if (!valor) return [];
    return valor
      .split('|')
      .map((parte) => {
        const [label, href = ''] = parte.split('>');
        return { label: label.trim(), href: href.trim() };
      })
      .filter((crumb) => crumb.label);
  }
}

customElements.define('site-breadcrumbs', SiteBreadcrumbs);