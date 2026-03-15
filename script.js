/* ---------------------------------------------------------
   CORTEXLAB ULTRA – SCRIPT PRINCIPAL
   Génération dynamique des exercices, quiz, examen, parcours,
   défi quotidien, tableau de bord, interactions premium.
--------------------------------------------------------- */

/* =========================================================
   1. BASE DE DONNÉES DES EXERCICES
========================================================= */

const exercises = [
  { id: 1, type: "Suites faciles", difficulty: 1, question: "2, 4, 6, 8, ?", answer: "10", explanation: "Suite +2." },
  { id: 2, type: "Suites faciles", difficulty: 1, question: "1, 3, 5, 7, ?", answer: "9", explanation: "Suite +2." },
  { id: 3, type: "Suites faciles", difficulty: 1, question: "5, 10, 15, 20, ?", answer: "25", explanation: "Suite +5." },

  { id: 20, type: "Suites moyennes", difficulty: 2, question: "3, 6, 12, 24, ?", answer: "48", explanation: "Suite ×2." },
  { id: 21, type: "Suites moyennes", difficulty: 2, question: "7, 10, 16, 25, 37, ?", answer: "52", explanation: "+3, +6, +9, +12…" },

  { id: 40, type: "Suites difficiles", difficulty: 3, question: "3, 5, 9, 17, 33, ?", answer: "65", explanation: "×2 − 1." },

  { id: 60, type: "Analogies", difficulty: 1, question: "Lune est à nuit comme Soleil est à …", answer: "jour", explanation: "Relation naturelle opposée." },

  { id: 80, type: "Déductions", difficulty: 2, question: "Tous les A sont B. Aucun B n’est C. Donc…", answer: "Aucun A n’est C", explanation: "Syllogisme valide." },

  { id: 100, type: "Mathématiques", difficulty: 2, question: "Une voiture roule 2h à 60 km/h puis 1h à 80 km/h. Distance totale ?", answer: "200 km", explanation: "120 + 80 = 200." },

  { id: 120, type: "Mémoire", difficulty: 1, question: "Répéter à l’envers : 4 – 9 – 2 – 7 – 1", answer: "1 – 7 – 2 – 9 – 4", explanation: "Inversion de la séquence." }
];

/* =========================================================
   2. STATISTIQUES UTILISATEUR
========================================================= */

const stats = {
  sessions: Number(localStorage.getItem("sessions") || 0),
  score: Number(localStorage.getItem("score") || 0),
  randomSuccess: Number(localStorage.getItem("randomSuccess") || 0),

  save() {
    localStorage.setItem("sessions", this.sessions);
    localStorage.setItem("score", this.score);
    localStorage.setItem("randomSuccess", this.randomSuccess);
  }
};

/* =========================================================
   3. AFFICHAGE DES EXERCICES
========================================================= */

function renderExercises(list) {
  const container = document.getElementById("exerciseContainer");
  container.innerHTML = "";

  list.forEach(ex => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-title">${ex.type}</div>
      <div class="card-body">
        <strong>Exercice :</strong> ${ex.question}
        <div class="card-example">
          <strong>Réponse :</strong> ${ex.answer}<br>
          <strong>Explication :</strong> ${ex.explanation}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/* =========================================================
   4. FILTRES DE CATÉGORIES
========================================================= */

function renderCategoryFilters() {
  const categories = [...new Set(exercises.map(e => e.type))];
  const container = document.getElementById("categoryFilters");

  categories.forEach(cat => {
    const pill = document.createElement("div");
    pill.className = "pill";
    pill.textContent = cat;

    pill.addEventListener("click", () => {
      document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const filtered = exercises.filter(e => e.type === cat);
      renderExercises(filtered);
    });

    container.appendChild(pill);
  });
}

/* =========================================================
   5. TRI DES EXERCICES
========================================================= */

document.getElementById("sortExercises").addEventListener("change", e => {
  const mode = e.target.value;
  let sorted = [...exercises];

  if (mode === "difficulty") sorted.sort((a, b) => a.difficulty - b.difficulty);
  if (mode === "type") sorted.sort((a, b) => a.type.localeCompare(b.type));
  if (mode === "random") sorted.sort(() => Math.random() - 0.5);

  renderExercises(sorted);
});

/* =========================================================
   6. MODULE : EXERCICE ALÉATOIRE (NOUVEAU)
========================================================= */

function startRandomExercise() {
  const box = document.getElementById("randomExerciseBox");
  const ex = exercises[Math.floor(Math.random() * exercises.length)];
  let attempts = 0;

  box.innerHTML = `
    <div class="card-title">Exercice aléatoire – ${ex.type}</div>
    <p><strong>Question :</strong> ${ex.question}</p>

    <input id="randomInput" class="quiz-input" placeholder="Votre réponse">
    <button class="btn btn-primary" id="randomCheck">Vérifier ma réponse</button>

    <div id="randomFeedback" style="margin-top:10px; font-size:0.9rem;"></div>

    <button class="btn btn-ghost" id="randomNew" style="margin-top:15px;">Nouvel exercice</button>
  `;

  const input = document.getElementById("randomInput");
  const feedback = document.getElementById("randomFeedback");

  document.getElementById("randomCheck").onclick = () => {
    const user = (input.value || "").trim().toLowerCase();
    const correct = ex.answer.toLowerCase();

    if (!user) {
      feedback.textContent = "Entre une réponse avant de vérifier.";
      feedback.style.color = "#f97373";
      return;
    }

    attempts++;

    if (user === correct) {
      feedback.textContent = "✅ Bravo, c’est la bonne réponse !";
      feedback.style.color = "#4ade80";

      stats.randomSuccess++;
      stats.save();
      updateStatsDisplay();
    }
    else if (attempts === 1) {
      feedback.textContent = "❌ Ce n’est pas ça. Réessaie encore une fois.";
      feedback.style.color = "#f97373";
    }
    else {
      feedback.innerHTML = `
        ❌ Toujours pas.<br>
        <strong>Bonne réponse :</strong> ${ex.answer}<br>
        <strong>Explication :</strong> ${ex.explanation}
      `;
      feedback.style.color = "#f97373";
    }
  };

  document.getElementById("randomNew").onclick = startRandomExercise;
}

/* =========================================================
   7. QUIZ INTERACTIF
========================================================= */

function startQuiz() {
  const quizBox = document.getElementById("quizContainer");
  const questions = [...exercises].sort(() => Math.random() - 0.5).slice(0, 10);

  let index = 0;
  let score = 0;

  function renderQuestion() {
    const q = questions[index];

    quizBox.innerHTML = `
      <div class="card-title">Question ${index + 1}/10</div>
      <p>${q.question}</p>
      <input id="quizInput" class="quiz-input" placeholder="Votre réponse">
      <button class="btn btn-primary" id="quizSubmit">Valider</button>
    `;

    document.getElementById("quizSubmit").onclick = () => {
      const user = document.getElementById("quizInput").value.trim().toLowerCase();
      if (user === q.answer.toLowerCase()) score++;

      index++;
      if (index < 10) renderQuestion();
      else renderResult();
    };
  }

  function renderResult() {
    quizBox.innerHTML = `
      <h3>Résultat : ${score}/10</h3>
      <p>${score >= 7 ? "Excellent !" : "Continue l’entraînement."}</p>
    `;
    stats.score += score;
    stats.sessions++;
    stats.save();
    updateStatsDisplay();
  }

  renderQuestion();
}

/* =========================================================
   8. EXAMEN CHRONOMÉTRÉ
========================================================= */

function startExam() {
  const examBox = document.getElementById("examContainer");
  const questions = [...exercises].sort(() => Math.random() - 0.5).slice(0, 20);

  let index = 0;
  let score = 0;
  let time = 180;

  const timer = setInterval(() => {
    time--;
    if (time <= 0) finishExam();
    examBox.querySelector(".exam-timer").textContent = time + "s";
  }, 1000);

  function renderQuestion() {
    const q = questions[index];

    examBox.innerHTML = `
      <div class="exam-timer">${time}s</div>
      <div class="card-title">Question ${index + 1}/20</div>
      <p>${q.question}</p>
      <input id="examInput" class="quiz-input" placeholder="Votre réponse">
      <button class="btn btn-primary" id="examSubmit">Valider</button>
    `;

    document.getElementById("examSubmit").onclick = () => {
      const user = document.getElementById("examInput").value.trim().toLowerCase();
      if (user === q.answer.toLowerCase()) score++;

      index++;
      if (index < 20) renderQuestion();
      else finishExam();
    };
  }

  function finishExam() {
    clearInterval(timer);
    examBox.innerHTML = `
      <h3>Résultat : ${score}/20</h3>
      <p>${score >= 14 ? "Très bon niveau !" : "Continue l’entraînement."}</p>
    `;
    stats.score += score;
    stats.sessions++;
    stats.save();
    updateStatsDisplay();
  }

  renderQuestion();
}

/* =========================================================
   9. DÉFI QUOTIDIEN
========================================================= */

function loadDailyChallenge() {
  const box = document.getElementById("dailyChallenge");
  const today = new Date().toDateString();

  let saved = localStorage.getItem("dailyChallengeDate");

  if (saved !== today) {
    const ex = exercises[Math.floor(Math.random() * exercises.length)];
    localStorage.setItem("dailyChallengeDate", today);
    localStorage.setItem("dailyChallenge", JSON.stringify(ex));
  }

  const challenge = JSON.parse(localStorage.getItem("dailyChallenge"));

  box.innerHTML = `
    <div class="card-title">${challenge.type}</div>
    <p><strong>Exercice :</strong> ${challenge.question}</p>
    <div class="card-example">
      <strong>Réponse :</strong> ${challenge.answer}<br>
      <strong>Explication :</strong> ${challenge.explanation}
    </div>
  `;
}

/* =========================================================
   10. TABLEAU DE BORD
========================================================= */

function updateStatsDisplay() {
  document.getElementById("statExercices").textContent = exercises.length;
  document.getElementById("statSessions").textContent = stats.sessions;
  document.getElementById("statScore").textContent = stats.score;
}

/* =========================================================
   11. ÉVÉNEMENTS
========================================================= */

document.getElementById("startTraining").onclick = () => {
  renderExercises(exercises);
  window.location.href = "#entrainement";
};

document.getElementById("startRandom").onclick = () => {
  startRandomExercise();
  window.location.href = "#aleatoire";
};

document.addEventListener("DOMContentLoaded", () => {
  renderCategoryFilters();
  renderExercises(exercises);
  loadDailyChallenge();
  updateStatsDisplay();
  startQuiz();
  startExam();
});