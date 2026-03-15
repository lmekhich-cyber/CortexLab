/* =========================================================
   CORTEXLAB ULTRA – MODULE ANIMATIONS
   Animations premium : déploiement, fade, transitions
========================================================= */

export const Animations = {
  expand(element) {
    element.style.maxHeight = "300px";
    element.style.opacity = "1";
    element.style.transition = "max-height 0.45s ease, opacity 0.45s ease";
  },

  collapse(element) {
    element.style.maxHeight = "0";
    element.style.opacity = "0";
    element.style.transition = "max-height 0.45s ease, opacity 0.45s ease";
  },

  fadeIn(element) {
    element.style.opacity = "1";
    element.style.transition = "opacity 0.45s ease";
  },

  fadeOut(element) {
    element.style.opacity = "0";
    element.style.transition = "opacity 0.45s ease";
  }
};
