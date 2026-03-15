/* =========================================================
   CORTEXLAB ULTRA – MODULE ADAPTIVE
   Ajuste automatiquement la difficulté
   Analyse réussites / échecs
========================================================= */

export const Adaptive = {
  streakSuccess: 0,
  streakFail: 0,
  difficulty: 1,

  success() {
    this.streakSuccess++;
    this.streakFail = 0;

    if (this.streakSuccess >= 3 && this.difficulty < 3) {
      this.difficulty++;
      this.streakSuccess = 0;
    }
  },

  fail() {
    this.streakFail++;
    this.streakSuccess = 0;

    if (this.streakFail >= 2 && this.difficulty > 1) {
      this.difficulty--;
      this.streakFail = 0;
    }
  }
};
