/* =========================================================
   CORTEXLAB ULTRA – MODULE XP
   Gestion de l'expérience gagnée par exercice
   Calcul des bonus (difficulté, rapidité, variété)
   Stockage local
========================================================= */

export const XP = {
  value: Number(localStorage.getItem("xp") || 0),
  lastType: null,

  /* ---------------------------------------------------------
     Calcul XP de base
  --------------------------------------------------------- */
  base(difficulty) {
    return difficulty * 10; // facile = 10, moyen = 20, difficile = 30
  },

  /* ---------------------------------------------------------
     Bonus de rapidité
  --------------------------------------------------------- */
  speedBonus(timeMs) {
    if (timeMs < 5000) return 10;   // < 5 sec
    if (timeMs < 10000) return 5;   // < 10 sec
    return 0;
  },

  /* ---------------------------------------------------------
     Bonus de variété
  --------------------------------------------------------- */
  varietyBonus(type) {
    if (this.lastType && this.lastType !== type) return 5;
    return 0;
  },

  /* ---------------------------------------------------------
     Gain total
  --------------------------------------------------------- */
  gain({ difficulty, type, timeMs }) {
    const total =
      this.base(difficulty) +
      this.speedBonus(timeMs) +
      this.varietyBonus(type);

    this.value += total;
    this.lastType = type;

    localStorage.setItem("xp", this.value);
    return total;
  }
};
