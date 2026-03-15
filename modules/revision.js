import { EXERCISES } from "../data/exercises.js";
import { XP } from "../core/xp.js";

export const Revision = {
  init() {
    this.container = document.getElementById("parcoursContainer");
    if (!this.container) return;

    // Progression sauvegardée
    this.progress = JSON.parse(localStorage.getItem("parcoursProgress")) || {
      level1: false,
      level2: false,
      level3: false
    };

    this.renderLevels();
  },

  save() {
    localStorage.setItem("parcoursProgress", JSON.stringify(this.progress));
  },

  renderLevels() {
    this.container.innerHTML = "";

    const levels = [
      { id: 1, label: "Niveau 1 – Découverte", difficulty: 1, unlocked: true },
      { id: 2, label: "Niveau 2 – Intermédiaire", difficulty: 2, unlocked: this.progress.level1 },
      { id: 3, label: "Niveau 3 – Avancé", difficulty: 3, unlocked: this.progress.level2 }
    ];

    levels.forEach(level => {
      const card = document.createElement("div");
      card.className = "card parcours-card";

      if (!level.unlocked) {
        card.classList.add("locked");
      }

      card.innerHTML = `
        <div class="card-title">${level.label}</div>
        <p class="card-question">Difficulté ${level.difficulty}</p>
        <button class="btn btn-primary parcours-btn" ${!level.unlocked ? "disabled" : ""}>
          ${level.unlocked ? "Commencer" : "Verrouillé"}
        </button>
      `;

      if (level.unlocked) {
        card.querySelector(".parcours-btn").onclick = () => this.startLevel(level);
      }

      this.container.appendChild(card);
    });
  },

  startLevel(level) {
    const exercises = EXERCISES.filter(e => e.difficulty === level.difficulty).slice(0, 6);
    let index = 0;
    let score = 0;

    const box = this.container;
    const render = () => {
      const ex = exercises[index];

      box.innerHTML = `
        <div class="card">
          <div class="card-title">${ex.type}</div>
          <p class="card-question">${ex.question}</p>
          <input id="parcoursInput" class="quiz-input" placeholder="Ta réponse...">
          <button id="parcoursValidate" class="btn btn-primary">Valider</button>
          <div id="parcoursFeedback" class="feedback"></div>
          <div class="exam-progress">Exercice ${index + 1} / 6</div>
        </div>
      `;

      document.getElementById("parcoursValidate").onclick = () => {
        const user = document.getElementById("parcoursInput").value.trim().toLowerCase();
        const fb = document.getElementById("parcoursFeedback");

        if (!user) {
          fb.textContent = "Entre une réponse.";
          return;
        }

        if (user === ex.answer.toLowerCase()) {
          fb.textContent = "Correct.";
          score++;
          XP.add(5);
        } else {
          fb.textContent = `Mauvaise réponse. Solution : ${ex.answer}`;
        }

        setTimeout(() => {
          index++;
          if (index < 6) {
            render();
          } else {
            this.finishLevel(level.id, score);
          }
        }, 800);
      };
    };

    render();
  },

  finishLevel(levelId, score) {
    const box = this.container;

    const success = score >= 4; // 4/6 pour valider

    if (success) {
      if (levelId === 1) this.progress.level1 = true;
      if (levelId === 2) this.progress.level2 = true;
      if (levelId === 3) this.progress.level3 = true;
      this.save();
    }

    box.innerHTML = `
      <div class="card">
        <div class="card-title">Niveau terminé</div>
        <p class="card-question">Score : ${score} / 6</p>
        <p>${success ? "Niveau validé !" : "Niveau échoué."}</p>
        <button id="parcoursReturn" class="btn btn-primary">Retour</button>
      </div>
    `;

    document.getElementById("parcoursReturn").onclick = () => this.renderLevels();
  }
};
