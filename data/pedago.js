export const Pedago = {
  init() {
    const container = document.getElementById("pedagoContainer");
    if (!container) return;

    container.innerHTML = `
      <div class="card">
        <div class="card-title">Méthode pour les suites</div>
        <p class="card-question">
          Commence par les différences, puis les rapports (×2, ÷3, etc.).
          Note les écarts sur un brouillon.
        </p>
      </div>
      <div class="card">
        <div class="card-title">Analogies verbales</div>
        <p class="card-question">
          Identifie la relation (synonyme, contraire, inclusion, fonction, cause → effet)
          avant de chercher un mot.
        </p>
      </div>
      <div class="card">
        <div class="card-title">Mémoire & répétition</div>
        <p class="card-question">
          Regroupe les éléments par blocs (2–3), répète mentalement, puis reconstruis
          à l’envers. La visualisation aide beaucoup.
        </p>
      </div>
    `;
  }
};
