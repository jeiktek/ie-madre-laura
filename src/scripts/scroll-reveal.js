const selectores = '[data-reveal]';

export function iniciarRevelado() {
  const nodos = document.querySelectorAll(selectores);

  if (nodos.length === 0) return;

  if (
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    nodos.forEach((nodo) => nodo.classList.add('is-visible'));
    return;
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('is-visible');
        observador.unobserve(entrada.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  nodos.forEach((nodo) => observador.observe(nodo));
}