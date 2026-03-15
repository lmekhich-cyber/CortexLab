/* =========================================================
   CORTEXLAB ULTRA – MODULE REVISION
   Révision intelligente : exercices ratés
========================================================= */

import { Cards } from "../ui/cards.js";

export const Revision = {
  addError(exercise) {
    const errors = JSON.parse(localStorage.getItem("errors") || "[]");
    errors.push(exercise);
    localStorage.setItem("errors", JSON.stringify(errors));
  },

  init() {
    const box = document.getElementById("revisionBox");
    const errors = JSON.parse(localStorage.getItem("errors") || "[]");

    if (errors.length === 0) {
      box.innerHTML = "<p>Aucune erreur enregistrée. Bravo.</p>";
      return;
    }

    Cards.render(box, errors);
  }
};
