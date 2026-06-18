document.querySelectorAll("[data-target]").forEach((control) => {
  control.addEventListener("click", () => {
    const target = document.getElementById(control.dataset.target);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

[
  ["boton-inicio", "inicio"],
  ["boton-caracteristica", "caracteristicas"],
  ["boton-funciones", "funciones"],
  ["boton-complementos", "complementos"],
  ["boton-contacto", "contacto"],
  ["icono-flecha", "caracteristicas"],
  ["boton-conoce", "partes"],
  ["boton-descubri", "complementos"],
  ["icono-para-subir", "inicio"],
].forEach(([svgId, targetId]) => {
  const element = document.getElementById(svgId);
  const target = document.getElementById(targetId);
  if (!element || !target) return;

  element.style.cursor = "pointer";
  element.addEventListener("click", () => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const navHoverColor = "#6ed8ff";

document.querySelectorAll(".nav-hotspot[data-svg-hover]").forEach((control) => {
  const target = document.getElementById(control.dataset.svgHover);
  if (!target) return;

  const textNodes = [target, ...target.querySelectorAll("text, tspan")];
  textNodes.forEach((node) => {
    node.dataset.originalStyle = node.getAttribute("style") || "";
  });

  const paint = () => {
    textNodes.forEach((node) => {
      node.style.fill = navHoverColor;
      node.style.stroke = "none";
      node.style.textDecoration = "none";
    });
  };

  const restore = () => {
    textNodes.forEach((node) => {
      const originalStyle = node.dataset.originalStyle;
      if (originalStyle) {
        node.setAttribute("style", originalStyle);
      } else {
        node.removeAttribute("style");
      }
    });
  };

  control.addEventListener("mouseenter", paint);
  control.addEventListener("mouseleave", restore);
  control.addEventListener("focus", paint);
  control.addEventListener("blur", restore);
});
