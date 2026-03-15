/* Module Pédagogie – fiches explicatives */

import { PEDAGO_CARDS } from "../data/pedago.js";

export const Pedago = {
  init() {
    const box = document.getElementById("pedagoContainer");
    if (!box) return;

    box.innerHTML = PEDAGO_CARDS.map(card => `
      <div class="card">
        <div class="card-title">${card.title}</div>
        <div class="card-subtitle">${card.subtitle}</div>
        <div class="card-body">${card.content}</div>
      </div>
    `).join("");
  }
};
