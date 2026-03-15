/* =========================================================
   CORTEXLAB ULTRA – MODULE HISTORY
   Historique de progression
========================================================= */

import { XP } from "../core/xp.js";
import { Levels } from "../core/levels.js";

export const History = {
  logSession() {
    const history = JSON.parse(localStorage.getItem("history") || "[]");

    history.push({
      date: new Date().toLocaleDateString(),
      xp: XP.value,
      level: Levels.level
    });

    localStorage.setItem("history", JSON.stringify(history));
  },

  init() {
    const box = document.getElementById("historyBox");
    const history = JSON.parse(localStorage.getItem("history") || "[]");

    if (history.length === 0) {
      box.innerHTML = "<p>Aucune donnée pour le moment.</p>";
      return;
    }

    box.innerHTML = history
      .map(h => `<div>${h.date} — XP : ${h.xp} — Niveau : ${h.level}</div>`)
      .join("");
  }
};
