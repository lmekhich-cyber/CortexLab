export const EXERCISES = [
  // Difficulté 1
  {
    id: 1,
    type: "Suites faciles",
    question: "2, 4, 6, 8, ?",
    answer: "10",
    explanation: "Suite +2",
    difficulty: 1
  },
  {
    id: 2,
    type: "Suites faciles",
    question: "1, 3, 5, 7, ?",
    answer: "9",
    explanation: "Suite +2",
    difficulty: 1
  },
  {
    id: 3,
    type: "Suites faciles",
    question: "5, 10, 15, 20, ?",
    answer: "25",
    explanation: "Suite +5",
    difficulty: 1
  },
  {
    id: 4,
    type: "Suites faciles",
    question: "10, 9, 8, 7, ?",
    answer: "6",
    explanation: "Suite -1",
    difficulty: 1
  },
  {
    id: 5,
    type: "Suites faciles",
    question: "0, 2, 4, 6, ?",
    answer: "8",
    explanation: "Suite +2",
    difficulty: 1
  },
  {
    id: 6,
    type: "Analogies",
    question: "Lune est à nuit comme Soleil est à ...",
    answer: "jour",
    explanation: "Opposition naturelle",
    difficulty: 1
  },

  // Difficulté 2
  {
    id: 7,
    type: "Suites moyennes",
    question: "3, 6, 12, 24, ?",
    answer: "48",
    explanation: "×2",
    difficulty: 2
  },
  {
    id: 8,
    type: "Suites moyennes",
    question: "7, 10, 16, 25, 37, ?",
    answer: "52",
    explanation: "+3, +6, +9, +12, ...",
    difficulty: 2
  },
  {
    id: 9,
    type: "Suites moyennes",
    question: "2, 5, 10, 17, 26, ?",
    answer: "37",
    explanation: "+3, +5, +7, +9, ...",
    difficulty: 2
  },
  {
    id: 10,
    type: "Suites moyennes",
    question: "1, 4, 9, 16, 25, ?",
    answer: "36",
    explanation: "Carrés parfaits",
    difficulty: 2
  },
  {
    id: 11,
    type: "Suites moyennes",
    question: "2, 3, 5, 8, 12, 17, ?",
    answer: "23",
    explanation: "+1, +2, +3, +4, +5, ...",
    difficulty: 2
  },
  {
    id: 12,
    type: "Analogies",
    question: "Livre est à lire comme musique est à ...",
    answer: "écouter",
    explanation: "Relation d’usage",
    difficulty: 2
  },

  // Difficulté 3
  {
    id: 13,
    type: "Suites difficiles",
    question: "3, 5, 9, 17, 33, ?",
    answer: "65",
    explanation: "×2 -1",
    difficulty: 3
  },
  {
    id: 14,
    type: "Suites difficiles",
    question: "1, 2, 4, 7, 11, 16, ?",
    answer: "22",
    explanation: "+1, +2, +3, +4, +5, ...",
    difficulty: 3
  },
  {
    id: 15,
    type: "Suites difficiles",
    question: "2, 6, 15, 31, 56, ?",
    answer: "92",
    explanation: "+4, +9, +16, +25, ...",
    difficulty: 3
  },
  {
    id: 16,
    type: "Suites difficiles",
    question: "4, 9, 19, 39, 79, ?",
    answer: "159",
    explanation: "×2 +1",
    difficulty: 3
  },
  {
    id: 17,
    type: "Suites difficiles",
    question: "10, 13, 19, 28, 40, ?",
    answer: "55",
    explanation: "+3, +6, +9, +12, ...",
    difficulty: 3
  },
  {
    id: 18,
    type: "Logique verbale",
    question: "Certains étudiants sont sportifs. Tous les sportifs sont disciplinés. Peut-on conclure que certains étudiants sont disciplinés ?",
    answer: "oui",
    explanation: "Certains étudiants ∈ sportifs, tous sportifs ⊂ disciplinés.",
    difficulty: 3
  },

  // Mémoire / logique verbale simples
  {
    id: 19,
    type: "Mémoire",
    question: "Répéter à l’envers : 4 - 9 - 2 - 7 - 1",
    answer: "1 - 7 - 2 - 9 - 4",
    explanation: "Inversion de la séquence",
    difficulty: 1
  },
  {
    id: 20,
    type: "Logique verbale",
    question: "Aucun médecin n’est musicien. Tous les musiciens sont créatifs. Peut-on conclure qu’aucun médecin n’est créatif ?",
    answer: "non",
    explanation: "Pas de lien direct entre médecin et créatif.",
    difficulty: 2
  },

  // --- Suites géométriques (formes) ---
  {
    id: 101,
    type: "Formes géométriques",
    question: "■ ■ ■ □ □ □ ■ ■ □ □ ?",
    answer: "■",
    explanation: "Alternance par blocs de 3 : carré plein (■) puis carré vide (□).",
    difficulty: 1
  },
  {
    id: 102,
    type: "Formes géométriques",
    question: "● ▲ ● ▲ ● ▲ ● ?",
    answer: "▲",
    explanation: "Alternance simple cercle / triangle.",
    difficulty: 1
  },
  {
    id: 103,
    type: "Formes géométriques",
    question: "■ ● ■ ● ■ ● ?",
    answer: "■",
    explanation: "Alternance carré / cercle.",
    difficulty: 1
  },
  {
    id: 104,
    type: "Formes géométriques",
    question: "● ● ● ○ ○ ○ ● ● ○ ○ ?",
    answer: "●",
    explanation: "Blocs de 3 cercles pleins puis 3 cercles vides.",
    difficulty: 1
  },
  {
    id: 105,
    type: "Formes géométriques",
    question: "▲ ▲ ■ ▲ ▲ ■ ▲ ▲ ?",
    answer: "■",
    explanation: "Répétition : deux triangles puis un carré.",
    difficulty: 2
  },
  {
    id: 106,
    type: "Formes géométriques",
    question: "● ■ ▲ ● ■ ▲ ● ■ ?",
    answer: "▲",
    explanation: "Cycle de 3 formes : cercle → carré → triangle.",
    difficulty: 2
  },
  {
    id: 107,
    type: "Formes géométriques",
    question: "● ● ■ ● ● ■ ● ● ?",
    answer: "■",
    explanation: "Deux cercles puis un carré.",
    difficulty: 2
  },
  {
    id: 108,
    type: "Formes géométriques",
    question: "▲ ● ● ▲ ● ● ▲ ● ?",
    answer: "●",
    explanation: "Un triangle suivi de deux cercles.",
    difficulty: 2
  },
  {
    id: 109,
    type: "Formes géométriques",
    question: "▲ ▼ ▲ ▼ ▲ ▼ ▲ ?",
    answer: "▼",
    explanation: "Alternance triangle haut ▲ / triangle bas ▼.",
    difficulty: 1
  },
  {
    id: 110,
    type: "Formes géométriques",
    question: "■ ▲ ● ■ ▲ ● ■ ▲ ?",
    answer: "●",
    explanation: "Cycle de 3 formes : carré → triangle → cercle.",
    difficulty: 3
  },
  {
    id: 111,
    type: "Formes géométriques",
    question: "● ● ● ● ○ ○ ○ ○ ● ● ● ● ?",
    answer: "○",
    explanation: "Blocs de 4 cercles pleins puis 4 cercles vides.",
    difficulty: 2
  },
  {
    id: 112,
    type: "Formes géométriques",
    question: "▲ ■ ■ ▲ ■ ■ ▲ ■ ?",
    answer: "■",
    explanation: "Un triangle suivi de deux carrés.",
    difficulty: 2
  },
  {
    id: 113,
    type: "Formes géométriques",
    question: "● ▲ ■ ● ▲ ■ ● ▲ ?",
    answer: "■",
    explanation: "Cycle de 3 formes, répétition.",
    difficulty: 3
  },
  {
    id: 114,
    type: "Formes géométriques",
    question: "● ● ▲ ● ● ▲ ● ● ?",
    answer: "▲",
    explanation: "Deux cercles puis un triangle.",
    difficulty: 2
  },
  {
    id: 115,
    type: "Formes géométriques",
    question: "■ ● ■ ● ● ■ ● ● ■ ● ● ?",
    answer: "■",
    explanation: "Motif : carré, cercle, carré, cercle, cercle.",
    difficulty: 3
  }
];
