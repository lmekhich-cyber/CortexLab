/* =========================================================
   CORTEXLAB ULTRA – MODULE DAILY
   Programme quotidien (5 minutes)
========================================================= */

import { EXERCISES } from "../data/exercises.js";
import { Cards } from "../ui/cards.js";
import { XP } from "../core/xp.js";

export const Daily = {
  init() {
    const box = document.getElementById("dailyChallenge");

    const today = new Date().toDateString();
    const saved = localStorage.getItem("dailyDate");

    if (saved !== today) {
      const daily = this.generate();
      localStorage.setItem("daily", JSON.stringify(daily));
      localStorage.setItem("dailyDate", today);
    }

    const challenge = JSON.parse(localStorage.getItem("daily"));
    Cards.render(box, challenge);
  },

  generate() {
    const pick = type =>
      EXERCISES.filter(e => e.type === type)[
        Math.floor(Math.random() * EXERCISES.filter(e => e.type === type).length)
      ];

    const daily = [
      pick("Mémoire"),
      pick("Logique verbale"),
      pick("Suites faciles"),
      pick("Analogies")
    ];

    // Bonus XP quotidien
    XP.value += 20;
    localStorage.setItem("xp", XP.value);

    return daily;
  }
};
