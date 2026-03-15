import { EXERCISES } from "../data/exercises.js";

export const Exam = {
  init() {
    this.examContainer = document.getElementById("examContainer");
    this.qiContainer = document.getElementById("qiContainer");
    if (this.examContainer) this.renderExamIntro();
    if (this.qiContainer) this.renderQiIntro();
  },

  renderExamIntro() {
    this.examContainer.innerHTML = `
      <div class="card">
        <div class="card-title">Examen complet</div>
        <p class="card-question">
          20 questions mélangées (logique, suites, analogies, mémoire).
        </p>
        <button id="startExamButton" class="btn btn-primary">Lancer l’examen</button>
        <div id="examRun"></div>
      </div>
    `;
    document.getElementById("startExamButton").onclick = () => this.startExam();
  },

  renderQiIntro() {
    this.qiContainer.innerHTML = `
      <div class="card">
        <div class="card-title">Test de QI – Entraînement</div>
        <p class="card-question">
          Sélection d’exercices proches des tests de QI classiques.
        </p>
        <button id="startQiButton" class="btn btn-primary">Lancer un test</button>
        <div id="qiRun"></div>
      </div>
    `;
    document.getElementById("startQiButton").onclick = () => this.startQi();
  },

  pickRandom(list, count) {
    const pool = [...list];
    const out = [];
    while (out.length < count && pool.length) {
      const idx = Math.floor(Math.random() * pool.length);
      out.push(pool.splice(idx, 1)[0]);
    }
    return out;
  },

  startExam() {
    const runBox = document.getElementById("examRun");
    if (!runBox) return;
    const questions = this.pickRandom(EXERCISES, 20);
    this.runLinearTest(runBox, questions, "Examen terminé");
  },

  startQi() {
    const runBox = document.getElementById("qiRun");
    if (!runBox) return;
    const qiTypes = ["Suites difficiles", "Suites moyennes", "Analogies", "Logique verbale", "Mémoire"];
    const pool = EXERCISES.filter(e => qiTypes.includes(e.type));
    const list = pool.length >= 10 ? pool : EXERCISES;
    const questions = this.pickRandom(list, 10);
    this.runLinearTest(runBox, questions, "Test d’entraînement terminé");
  },

  runLinearTest(container, questions, endLabel) {
    let index = 0;
    let score = 0;

    const renderQuestion = () => {
      const q = questions[index];
      container.innerHTML = `
        <div class="card exam-card">
          <div class="card-title">${q.type}</div>
          <p class="card-question">${q.question}</p>
          <input id="examInput" class="quiz-input" placeholder="Ta réponse...">
          <button id="examValidate" class="btn btn-primary">Valider</button>
          <div id="examFeedback" class="feedback"></div>
          <div class="exam-progress">Question ${index + 1} / ${questions.length}</div>
        </div>
      `;
      document.getElementById("examValidate").onclick = () => {
        const user = document.getElementById("examInput").value.trim().toLowerCase();
        const fb = document.getElementById("examFeedback");
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
            renderQuestion();
          } else {
            container.innerHTML = `
              <div class="card exam-card">
                <div class="card-title">${endLabel}</div>
                <p class="card-question">Score : ${score} / ${questions.length}</p>
              </div>
            `;
          }
        }, 800);
      };
    };

    renderQuestion();
  },

  startExamDirect() {
    this.startExam();
  }
};
