import { Training } from "./modules/training.js";
import { Daily } from "./modules/daily.js";
import { Revision } from "./modules/revision.js";
import { Badges } from "./modules/badges.js";
import { History } from "./modules/history.js";
import { Exam } from "./modules/exam.js";
import { Quiz } from "./modules/quiz.js";
import { Random } from "./modules/random.js";
import { Pedago } from "./modules/pedago.js";
import { XP } from "./core/xp.js";

document.addEventListener("DOMContentLoaded", () => {
  XP.init();

  Training.init();
  Daily.init();
  Revision.init();
  Badges.init();
  History.init();
  Exam.init();
  Quiz.init();
  Pedago.init();

  const btnRandom = document.getElementById("startRandom");
  if (btnRandom) {
    btnRandom.onclick = () => {
      Random.start();
      const section = document.getElementById("aleatoire");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    };
  }

  const btnExam = document.getElementById("startExam");
  if (btnExam) {
    btnExam.onclick = () => {
      Exam.startExam();
      const section = document.getElementById("examen");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    };
  }

  const btnQuiz = document.getElementById("startQuiz");
  if (btnQuiz) {
    btnQuiz.onclick = () => {
      Quiz.start();
      const section = document.getElementById("quiz");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    };
  }

  const btnTraining = document.getElementById("startTraining");
  if (btnTraining) {
    btnTraining.onclick = () => {
      const section = document.getElementById("entrainement");
      if (section) section.scrollIntoView({ behavior: "smooth" });
      XP.newSession();
    };
  }
});
