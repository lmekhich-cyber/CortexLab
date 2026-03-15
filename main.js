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
  Training.init();
  Daily.init();
  Revision.init();
  Badges.init();
  History.init();
  Pedago.init();

  const btnExam = document.getElementById("startExam");
  if (btnExam) btnExam.onclick = () => Exam.start();

  const btnQuiz = document.getElementById("startQuiz");
  if (btnQuiz) btnQuiz.onclick = () => Quiz.start();

  const btnRandom = document.getElementById("startRandom");
  if (btnRandom) btnRandom.onclick = () => Random.start();
});
