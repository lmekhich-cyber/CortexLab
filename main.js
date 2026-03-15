=========================================================
   CORTEXLAB ULTRA – MAIN
   Initialisation globale
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  Training.init();
  Daily.init();
  Revision.init();
  Badges.init();
  History.init();
  Pedago.init();
  Random.init?.(); // si ton module a un init

  const btnExam = document.getElementById("startExam");
  if (btnExam) btnExam.onclick = () => Exam.start();

  const btnQuiz = document.getElementById("startQuiz");
  if (btnQuiz) btnQuiz.onclick = () => Quiz.start();

  const btnRandom = document.getElementById("startRandom");
  if (btnRandom) btnRandom.onclick = () => Random.start();
});
