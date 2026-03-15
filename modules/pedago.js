/* =========================================================
   CORTEXLAB ULTRA – MODULE PEDAGO
   Méthodes, conseils, erreurs classiques
========================================================= */

export const Pedago = {
  init() {
    const container = document.getElementById("pedagoContainer");
    if (!container) return;

    container.innerHTML = `
      <div class="card">
        <div class="card-title">Méthode pour les suites</div>
        <p class="card-question">
          Commence toujours par regarder les différences entre les termes,
          puis les rapports (×2, ÷3, etc.). Note les écarts sur un brouillon.
        </p>
      </div>

      <div class="card">
        <div class="card-title">Analogies verbales</div>
        <p class="card-question">
          Identifie d’abord la relation exacte (synonyme, contraire, inclusion,
          fonction, cause → effet) avant de chercher un mot.
        </p>
      </div>

      <div class="card">
        <div class="card-title">Mémoire & répétition</div>
        <p class="card-question">
          Pour les séries à retenir, répète mentalement en blocs (2–3 éléments),
          puis reconstruis à l’envers. La visualisation aide énormément.
        </p>
      </div>
    `;
  }
};
