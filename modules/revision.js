/* =========================================================
   CORTEXLAB ULTRA – MODULE REVISION
   Parcours progressif
========================================================= */

import { EXERCISES } from "../data/exercises.js";

export const Revision = {
  init() {
    const container = document.getElementById("parcoursContainer");
    if (!container) return;

    // On crée 3 "niveaux" par difficulté
    const levels = [
      { id: 1, label: "Niveau 1 – Découverte", difficulty: 1 },
      { id: 2, label: "Niveau 2 – Intermédiaire", difficulty: 2 },
      { id: 3, label: "Niveau 3 – Avancé", difficulty: 3 }
    ];

    container.innerHTML = "";

    levels.forEach(level => {
      const exForLevel = EXERCISES.filter(e => e.difficulty === level.difficulty).slice(0, 6);

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div class="card-title">${level.label}</div>
        <p class="card-question">
          Série d’exercices de difficulté ${level.difficulty}.
        </p>
        <ul class="card-list">
          ${exForLevel.map(e => `<li>${e.type} – ${e.question}</li>`).join("")}
        </ul>
        <button class="btn btn-primary">Commencer ce niveau</button>
      `;

      container.appendChild(card);
    });
  }
};
