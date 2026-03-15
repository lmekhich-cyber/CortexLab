/* =========================================================
   CORTEXLAB ULTRA – MODULE QUIZ
   Quiz interactif (10 questions)
========================================================= */

import { EXERCISES } from "../data/exercises.js";
import { XP } from "../core/xp.js";

export const Quiz = {
  start() {
    const box = document.getElementById("quizContainer");

    const questions = [...EXERCISES]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    let index = 0;
    let score = 0;

    const render = () => {
      const q = questions[index];

      box.innerHTML = `
        <div class="card-title">Question ${index + 1}/10</div>
        <p>${q.question}</p>
        <input id="quizInput" class="quiz-input">
        <button id="quizSubmit" class="btn btn-primary">Valider</button>
      `;

      document.getElementById("quizSubmit").onclick = () => {
        const user = document.getElementById("quizInput").value.trim().toLowerCase();

        if (user === q.answer.toLowerCase()) score++;

        index++;
        if (index < 10) render();
        else finish();
      };
    };

    const finish = () => {
      XP.value += score * 3;
      localStorage.setItem("xp", XP.value);

      box.innerHTML = `
        <h3>Résultat : ${score}/10</h3>
        <button id="quizRestart" class="btn btn-primary">Recommencer</button>
      `;

      document.getElementById("quizRestart").onclick = () => this.start();
    };

    render();
  }
};
