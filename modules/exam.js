/* =========================================================
   CORTEXLAB ULTRA – MODULE EXAM
   Examen évolutif (20 questions)
========================================================= */

import { EXERCISES } from "../data/exercises.js";
import { Adaptive } from "../core/adaptive.js";
import { XP } from "../core/xp.js";

export const Exam = {
  start() {
    const box = document.getElementById("examContainer");

    const questions = EXERCISES
      .filter(e => e.difficulty === Adaptive.difficulty)
      .sort(() => Math.random() - 0.5)
      .slice(0, 20);

    let index = 0;
    let score = 0;

    const render = () => {
      const q = questions[index];

      box.innerHTML = `
        <div class="card-title">Question ${index + 1}/20</div>
        <p>${q.question}</p>
        <input id="examInput" class="quiz-input">
        <button id="examSubmit" class="btn btn-primary">Valider</button>
      `;

      document.getElementById("examSubmit").onclick = () => {
        const user = document.getElementById("examInput").value.trim().toLowerCase();

        if (user === q.answer.toLowerCase()) {
          score++;
          Adaptive.success();
        } else {
          Adaptive.fail();
        }

        index++;
        if (index < 20) render();
        else finish();
      };
    };

    const finish = () => {
      XP.value += score * 5;
      localStorage.setItem("xp", XP.value);

      box.innerHTML = `
        <h3>Résultat : ${score}/20</h3>
        <p>${score >= 14 ? "Très bon niveau" : "Continue l'entraînement"}</p>
      `;
    };

    render();
  }
};
