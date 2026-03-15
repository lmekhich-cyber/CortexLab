import { EXERCISES } from "../data/exercises.js";

export const Training = {
  init() {
    this.container = document.getElementById("exerciseContainer");
    this.filtersBox = document.getElementById("categoryFilters");
    this.sortSelect = document.getElementById("sortExercises");
    if (!this.container) return;

    this.activeCategory = null;
    this.generateCategoryFilters();
    this.renderExercises(EXERCISES);

    if (this.sortSelect) {
      this.sortSelect.onchange = () => this.applyFiltersAndSort();
    }
  },

  generateCategoryFilters() {
    if (!this.filtersBox) return;
    const categories = [...new Set(EXERCISES.map(ex => ex.type))];
    this.filtersBox.innerHTML = "";
    categories.forEach(cat => {
      const pill = document.createElement("button");
      pill.className = "pill";
      pill.textContent = cat;
      pill.onclick = () => {
        this.activeCategory = this.activeCategory === cat ? null : cat;
        this.updatePillStyles();
        this.applyFiltersAndSort();
      };
      this.filtersBox.appendChild(pill);
    });
  },

  updatePillStyles() {
    const pills = this.filtersBox.querySelectorAll(".pill");
    pills.forEach(p => {
      p.classList.toggle("active", p.textContent === this.activeCategory);
    });
  },

  applyFiltersAndSort() {
    let list = [...EXERCISES];
    if (this.activeCategory) {
      list = list.filter(ex => ex.type === this.activeCategory);
    }
    const mode = this.sortSelect?.value;
    if (mode === "difficulty") {
      list.sort((a, b) => a.difficulty - b.difficulty);
    } else if (mode === "type") {
      list.sort((a, b) => a.type.localeCompare(b.type));
    } else if (mode === "random") {
      list.sort(() => Math.random() - 0.5);
    }
    this.renderExercises(list);
  },

  renderExercises(list) {
    this.container.innerHTML = "";
    list.forEach(ex => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-title">${ex.type}</div>
        <p class="card-question">${ex.question}</p>
        <div class="card-meta">Difficulté : <strong>${ex.difficulty}</strong></div>
        <button class="btn btn-primary" data-id="${ex.id}">Voir la solution</button>
        <div class="card-answer" id="answer-${ex.id}" style="display:none;">
          <strong>Réponse :</strong> ${ex.answer}<br>
          <strong>Explication :</strong> ${ex.explanation}
        </div>
      `;
      card.querySelector("button").onclick = () => {
        const ans = document.getElementById(`answer-${ex.id}`);
        ans.style.display = ans.style.display === "none" ? "block" : "none";
      };
      this.container.appendChild(card);
    });
  }
};
