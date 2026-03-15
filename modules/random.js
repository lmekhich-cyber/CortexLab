/* =========================================================
   CORTEXLAB ULTRA – MODULE RANDOM
   Exercice aléatoire
========================================================= */

import { EXERCISES } from "../data/exercises.js";
import { XP } from "../core/xp.js";

export const Random = {
  start() {
    const box = document.getElementById("randomExerciseBox");
    const ex = EXERCISES[Math.floor(Math.random() * EXERCISES.length)];

    let attempts = 0;

    box.innerHTML = `
      <div class="card-title">${ex.type}</div>
      <p>${ex.question}</p>
      <input id="randomInput" class="quiz-input">
      <button id="randomCheck" class="btn btn-primary">Vérifier</button>
      <div id="randomFeedback"></div>
      <button id="randomNew" class="btn btn-ghost">Nouvel exercice</button>
    `;

    document.getElementById("randomCheck").onclick = () => {
      const user = document.getElementById("randomInput").value.trim().toLowerCase();
      const fb = document.getElementById("randomFeedback");

      attempts++;

      if (user === ex.answer.toLowerCase()) {
        fb.textContent = "Correct !";
        XP.value += attempts === 1 ? 10 : 5;
        localStorage.setItem("xp", XP.value);
      } else {
        fb.textContent = attempts === 1 ? "Réessaie" : `Mauvaise réponse. Solution : ${ex.answer}`;
      }
    };

    document.getElementById("randomNew").onclick = () => this.start();
  }
};
