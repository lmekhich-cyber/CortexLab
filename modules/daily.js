import { EXERCISES } from "../data/exercises.js";

export const Daily = {
  init() {
    const box = document.getElementById("dailyChallenge");
    if (!box) return;

    // On prend 4 exercices variés
    const types = ["Mémoire", "Logique verbale", "Suites faciles", "Analogies"];
    const chosen = [];

    types.forEach(t => {
      const pool = EXERCISES.filter(e => e.type === t);
      if (pool.length) chosen.push(pool[0]);
    });

    box.innerHTML = chosen.map(ex => `
      <div class="card">
        <div class="card-title">${ex.type}</div>
        <p class="card-question">Exercice : ${ex.question}</p>
        <button class="btn btn-ghost" data-id="${ex.id}">Afficher la solution</button>
        <div class="card-answer" id="daily-${ex.id}" style="display:none;">
          <strong>Réponse :</strong> ${ex.answer}<br>
          <strong>Explication :</strong> ${ex.explanation}
        </div>
      </div>
    `).join("");

    box.querySelectorAll("button[data-id]").forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute("data-id");
        const ans = document.getElementById(`daily-${id}`);
        ans.style.display = ans.style.display === "none" ? "block" : "none";
      };
    });
  }
};
