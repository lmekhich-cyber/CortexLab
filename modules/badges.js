/* =========================================================
   CORTEXLAB ULTRA – MODULE BADGES
   Badges premium basés sur la progression
========================================================= */

import { XP } from "../core/xp.js";
import { Levels } from "../core/levels.js";

export const Badges = {
  compute() {
    const badges = [];

    if (XP.value > 300) badges.push("Rigueur logique");
    if (XP.value > 600) badges.push("Mémoire active");
    if (Levels.level >= 5) badges.push("Esprit analytique");
    if (Levels.level >= 8) badges.push("Maître des suites");
    if (Levels.level >= 12) badges.push("Raisonnement rapide");

    return badges;
  },

  init() {
    const box = document.getElementById("badgesBox");
    const list = this.compute();

    if (list.length === 0) {
      box.innerHTML = "<p>Aucun badge pour le moment.</p>";
      return;
    }

    box.innerHTML = list.map(b => `<div class="badge">${b}</div>`).join("");
  }
};
