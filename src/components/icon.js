const CACHE = new Map();

export async function icono(nombre, clase = 'icon') {
  if (!CACHE.has(nombre)) {
    const respuesta = await fetch(`/assets/icons/${nombre}.svg`);
    if (!respuesta.ok) {
      throw new Error(`Icono no encontrado: ${nombre}`);
    }
    const texto = await respuesta.text();
    const limpio = texto.replace(/<!--[\s\S]*?-->/g, '').trim();
    CACHE.set(nombre, limpio);
  }

  const svg = CACHE.get(nombre)
    .replace('<svg', `<svg class="${clase}" aria-hidden="true" focusable="false"`);

  const plantilla = document.createElement('template');
  plantilla.innerHTML = svg;
  return plantilla.content.firstElementChild;
}

export async function iconoEn(contenedor, nombre, clase = 'icon') {
  const nodo = await icono(nombre, clase);
  contenedor.replaceChildren(nodo);
  return nodo;
}

export function htmlIcono(nombre, clase = 'icon') {
  const svg = CACHE.get(nombre);
  if (!svg) return '';
  return svg.replace('<svg', `<svg class="${clase}" aria-hidden="true" focusable="false"`);
}