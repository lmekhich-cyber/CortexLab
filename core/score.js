/* =========================================================
   CORTEXLAB ULTRA – MODULE SCORE
   Calcul du CortexScore global
========================================================= */

import { XP } from "./xp.js";
import { Adaptive } from "./adaptive.js";

export const CortexScore = {
  compute() {
    const base = XP.value;
    const difficultyFactor = Adaptive.difficulty * 50;
    const varietyFactor = XP.lastType ? 30 : 0;

    return base + difficultyFactor + varietyFactor;
  }
};
