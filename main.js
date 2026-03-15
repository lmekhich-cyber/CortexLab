/* =========================================================
   CORTEXLAB ULTRA – MAIN
   Initialisation globale
========================================================= */

import { Training } from "./modules/training.js";
import { Daily } from "./modules/daily.js";
import { Revision } from "./modules/revision.js";
import { Badges } from "./modules/badges.js";
import { History } from "./modules/history.js";
import { Exam } from "./modules/exam.js";
import { Quiz } from "./modules/quiz.js";
import { Random } from "./modules/random.js";
import { Pedago } from "./modules/pedago.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialisation des modules
  Training.init();
  Daily.init();
  Revision.init();
  Badges.init();
  History.init();
  Pedago.init();

  /* ---------------------------------------------------------
     BOUTON : EXERCICE ALÉATOIRE (HERO)
     → Génère un exercice
     → Scroll automatique vers la section #aleatoire
  --------------------------------------------------------- */
  const btnRandom = document.getElementById("startRandom");
  if (btnRandom) {
    btnRandom.onclick = () => {
      Random.start();
      document.getElementById("aleatoire").scrollIntoView({ behavior: "smooth" });
    };
  }

  /* ---------------------------------------------------------
     BOUTON : EXAMEN
  --------------------------------------------------------- */
  const btnExam = document.getElementById("startExam");
  if (btnExam) {
    btnExam.onclick = () => {
      Exam.start();
      document.getElementById("examen").scrollIntoView({ behavior: "smooth" });
    };
  }

  /* ---------------------------------------------------------
     BOUTON : QUIZ
  --------------------------------------------------------- */
  const btnQuiz = document.getElementById("startQuiz");
  if (btnQuiz) {
    btnQuiz.onclick = () => {
      Quiz.start();
      document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
    };
  }

  /* ---------------------------------------------------------
     BOUTON : COMMENCER L’ENTRAÎNEMENT
  --------------------------------------------------------- */
  const btnTraining = document.getElementById("startTraining");
  if (btnTraining) {
    btnTraining.onclick = () => {
      document.getElementById("entrainement").scrollIntoView({ behavior: "smooth" });
    };
  }
});
