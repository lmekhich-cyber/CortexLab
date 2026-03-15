/* =========================================================
   CORTEXLAB ULTRA – MODULE CARDS
   Cartes premium avec solution masquée
========================================================= */

import { Animations } from "./animations.js";
import { XP } from "../core/xp.js";
import { Adaptive } from "../core/adaptive.js";

export const Cards = {
  render(container, exercises) {
    container.innerHTML = "";

    exercises.forEach(ex => {
      const card = document.createElement("div");
      card.className = "card";

      const solutionId = `solution-${ex.id}`;

      card.innerHTML = `
        <div class="card-title">${ex.type}</div>
        <div class="card-body">
          <strong>Exercice :</strong> ${ex.question}
        </div>

        <button class="btn btn-ghost" data-toggle="${solutionId}">
          Afficher la solution
        </button>

        <div id="${solutionId}" class="card-example" style="
          margin-top:10px;
          max-height:0;
          opacity:0;
          overflow:hidden;
          border-radius:12px;
          border:1px solid rgba(148,163,184,0.35);
          background: radial-gradient(circle at top left, rgba(56,189,248,0.18), rgba(15,23,42,0.95));
          box-shadow: 0 18px 45px rgba(15,23,42,0.8);
        ">
          <div style="padding:10px 12px;">
            <strong>Réponse :</strong> ${ex.answer}<br>
            <strong>Explication :</strong> ${ex.explanation}
          </div>
        </div>
      `;

      const btn = card.querySelector(`[data-toggle="${solutionId}"]`);
      const solutionBox = card.querySelector(`#${solutionId}`);

      let open = false;

      btn.addEventListener("click", () => {
        open = !open;

        if (open) {
          Animations.expand(solutionBox);
          btn.textContent = "Masquer la solution";

          // XP + adaptatif
          XP.gain({ difficulty: ex.difficulty, type: ex.type, timeMs: 0 });
          Adaptive.success();
        } else {
          Animations.collapse(solutionBox);
          btn.textContent = "Afficher la solution";
        }
      });

      container.appendChild(card);
    });
  }
};
