const CAMPOS = {
  anio: {
    selector: '[data-filtro-excelencia="anio"]',
    atributo: 'data-excelencia-anio',
  },
  periodo: {
    selector: '[data-filtro-excelencia="periodo"]',
    atributo: 'data-excelencia-periodo',
  },
};

const secciones = [...document.querySelectorAll('[data-excelencia]')];
const contador = document.querySelector('[data-contador-excelencia]');

if (secciones.length > 0) {
  const controles = Object.entries(CAMPOS)
    .map(([nombre, config]) => ({ nombre, ...config, campo: document.querySelector(config.selector) }))
    .filter((c) => c.campo);

  function aplicarFiltros() {
    let visibles = 0;

    for (const seccion of secciones) {
      const coincide = controles.every(({ nombre, campo, atributo }) => {
        const valor = campo.value;
        return !valor || seccion.getAttribute(atributo) === valor;
      });

      seccion.hidden = !coincide;
      if (coincide) visibles += 1;
    }

    if (contador) {
      contador.textContent =
        visibles === 1 ? '1 tabla disponible.' : `${visibles} tablas disponibles.`;
    }
  }

  for (const { campo } of controles) {
    campo.addEventListener('change', aplicarFiltros);
  }

  aplicarFiltros();
}
