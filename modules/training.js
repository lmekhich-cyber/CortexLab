/* =========================================================
   CORTEXLAB ULTRA – MODULE TRAINING
   Entraînement libre premium
========================================================= */

import { EXERCISES } from "../data/exercises.js";
import { Cards } from "../ui/cards.js";
import { Filters } from "../ui/filters.js";

export const Training = {
  init() {
    const container = document.getElementById("exerciseContainer");
    const filterBox = document.getElementById("categoryFilters");

    // Filtres
    Filters.render(filterBox, EXERCISES, filtered => {
      Cards.render(container, filtered);
    });

    // Affichage initial
    Cards.render(container, EXERCISES);
  }
};
