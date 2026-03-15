/* =========================================================
   CORTEXLAB ULTRA – MODULE LEVELS
   Conversion XP → Niveau
   Déblocage de fonctionnalités
========================================================= */

import { XP } from "./xp.js";

export const Levels = {
  get level() {
    return Math.floor(XP.value / 100) + 1;
  },

  get nextLevelXP() {
    return (this.level * 100) - XP.value;
  },

  unlocked() {
    return {
      trainingAdvanced: this.level >= 3,
      examAdaptive: this.level >= 5,
      badges: this.level >= 7,
      history: this.level >= 10
    };
  }
};
