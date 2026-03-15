/* =========================================================
   CORTEXLAB ULTRA – MODULE FILTERS
   Filtres + bouton “Tout”
========================================================= */

export const Filters = {
  render(container, exercises, onFilter) {
    container.innerHTML = "";

    const categories = [...new Set(exercises.map(e => e.type))];

    // Bouton "Tout"
    const all = document.createElement("div");
    all.className = "pill active";
    all.textContent = "Tout";

    all.addEventListener("click", () => {
      document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      all.classList.add("active");
      onFilter(exercises);
    });

    container.appendChild(all);

    // Autres catégories
    categories.forEach(cat => {
      const pill = document.createElement("div");
      pill.className = "pill";
      pill.textContent = cat;

      pill.addEventListener("click", () => {
        document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");

        const filtered = exercises.filter(e => e.type === cat);
        onFilter(filtered);
      });

      container.appendChild(pill);
    });
  }
};
