import { EXERCISES } from "../data/exercises.js";

export const Quiz = {
  init() {
    const container = document.getElementById("quizContainer");
    if (!container) return;

    container.innerHTML = `
      <div class="card">
        <div class="card-title">Quiz interactif</div>
        <p class="card-question">
          10 questions aléatoires. Réponds, puis découvre ton score.
        </p>
        <button id="quizStartButton" class="btn btn-primary">Lancer le quiz</button>
        <div id="quizRun"></div>
      </div>
    `;

    document.getElementById("quizStartButton").onclick = () => this.start();
  },

  start() {
    const runBox = document.getElementById("quizRun");
    if (!runBox) return;

    const questions = this.pickRandom(10);
    let index = 0;
    let score = 0;

    const render = () => {
      const q = questions[index];
      runBox.innerHTML = `
        <div class="card">
          <div class="card-title">${q.type}</div>
          <p class="card-question">${q.question}</p>
          <input id="quizInput" class="quiz-input" placeholder="Ta réponse...">
          <button id="quizValidate" class="btn btn-primary">Valider</button>
          <div id="quizFeedback" class="feedback"></div>
          <div class="quiz-progress">Question ${index + 1} / ${questions.length}</div>
        </div>
      `;
      document.getElementById("quizValidate").onclick = () => {
        const user = document.getElementById("quizInput").value.trim().toLowerCase();
        const fb = document.getElementById("quizFeedback");
        if (!user) {
          fb.textContent = "Entre une réponse.";
          return;
        }
        if (user === q.answer.toLowerCase()) {
          fb.textContent = "Correct.";
          score++;
        } else {
          fb.textContent = `Mauvaise réponse. Solution : ${q.answer}`;
        }
        setTimeout(() => {
          index++;
          if (index < questions.length) {
            render();
          } else {
            runBox.innerHTML = `
              <div class="card">
                <div class="card-title">Quiz terminé</div>
                <p class="card-question">Score : ${score} / ${questions.length}</p>
              </div>
            `;
          }
        }, 800);
      };
    };

    render();
  },

  pickRandom(count) {
    const pool = [...EXERCISES];
    const out = [];
    while (out.length < count && pool.length) {
      const idx = Math.floor(Math.random() * pool.length);
      out.push(pool.splice(idx, 1)[0]);
    }
    return out;
  }
};
