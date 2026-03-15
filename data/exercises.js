/* =========================================================
   CORTEXLAB ULTRA – BASE DE DONNÉES DES EXERCICES
   50 exercices variés, classés par type et difficulté
========================================================= */

export const EXERCISES = [
  // Suites faciles
  { id: 1, type: "Suites faciles", difficulty: 1, question: "2, 4, 6, 8, ?", answer: "10", explanation: "Suite arithmétique de raison +2." },
  { id: 2, type: "Suites faciles", difficulty: 1, question: "1, 3, 5, 7, ?", answer: "9", explanation: "Nombres impairs croissants." },
  { id: 3, type: "Suites faciles", difficulty: 1, question: "5, 10, 15, 20, ?", answer: "25", explanation: "Suite +5." },
  { id: 4, type: "Suites faciles", difficulty: 1, question: "10, 9, 8, 7, ?", answer: "6", explanation: "Suite décroissante -1." },
  { id: 5, type: "Suites faciles", difficulty: 1, question: "0, 2, 4, 6, ?", answer: "8", explanation: "Nombres pairs croissants." },

  // Suites moyennes
  { id: 6, type: "Suites moyennes", difficulty: 2, question: "3, 6, 12, 24, ?", answer: "48", explanation: "Suite ×2." },
  { id: 7, type: "Suites moyennes", difficulty: 2, question: "7, 10, 16, 25, 37, ?", answer: "52", explanation: "Différences : +3, +6, +9, +12…" },
  { id: 8, type: "Suites moyennes", difficulty: 2, question: "2, 5, 10, 17, 26, ?", answer: "37", explanation: "Différences : +3, +5, +7, +9…" },
  { id: 9, type: "Suites moyennes", difficulty: 2, question: "1, 4, 9, 16, 25, ?", answer: "36", explanation: "Carrés parfaits." },
  { id: 10, type: "Suites moyennes", difficulty: 2, question: "2, 3, 5, 8, 12, 17, ?", answer: "23", explanation: "Différences croissantes." },

  // Suites difficiles
  { id: 11, type: "Suites difficiles", difficulty: 3, question: "3, 5, 9, 17, 33, ?", answer: "65", explanation: "×2 − 1." },
  { id: 12, type: "Suites difficiles", difficulty: 3, question: "1, 2, 4, 7, 11, 16, ?", answer: "22", explanation: "Différences croissantes." },
  { id: 13, type: "Suites difficiles", difficulty: 3, question: "2, 6, 15, 31, 56, ?", answer: "92", explanation: "Différences = carrés." },
  { id: 14, type: "Suites difficiles", difficulty: 3, question: "4, 9, 19, 39, 79, ?", answer: "159", explanation: "×2 +1." },
  { id: 15, type: "Suites difficiles", difficulty: 3, question: "10, 13, 19, 28, 40, ?", answer: "55", explanation: "Différences +3, +6, +9…" },

  // Analogies
  { id: 16, type: "Analogies", difficulty: 1, question: "Lune est à nuit comme Soleil est à …", answer: "jour", explanation: "Opposition naturelle." },
  { id: 17, type: "Analogies", difficulty: 1, question: "Chaud est à froid comme haut est à …", answer: "bas", explanation: "Opposés." },
  { id: 18, type: "Analogies", difficulty: 2, question: "Livre est à lire comme musique est à …", answer: "écouter", explanation: "Action associée." },
  { id: 19, type: "Analogies", difficulty: 2, question: "Peintre est à tableau comme écrivain est à …", answer: "livre", explanation: "Créateur → œuvre." },
  { id: 20, type: "Analogies", difficulty: 2, question: "Oiseau est à voler comme poisson est à …", answer: "nager", explanation: "Mode de déplacement." },

  // Logique verbale
  { id: 21, type: "Logique verbale", difficulty: 2, question: "Tous les chats sont des animaux. Certains animaux sont noirs. Peut-on conclure que certains chats sont noirs ?", answer: "non", explanation: "Pas de lien direct." },
  { id: 22, type: "Logique verbale", difficulty: 2, question: "Tous les A sont B. Aucun B n’est C. Donc…", answer: "aucun A n’est C", explanation: "Syllogisme valide." },
  { id: 23, type: "Logique verbale", difficulty: 3, question: "Certains étudiants sont sportifs. Tous les sportifs sont disciplinés. Peut-on conclure que certains étudiants sont disciplinés ?", answer: "oui", explanation: "Chaîne logique." },
  { id: 24, type: "Logique verbale", difficulty: 3, question: "Aucun médecin n’est musicien. Tous les musiciens sont créatifs. Peut-on conclure qu’aucun médecin n’est créatif ?", answer: "non", explanation: "Pas de lien." },
  { id: 25, type: "Logique verbale", difficulty: 3, question: "Tous les carrés sont des rectangles. Tous les rectangles sont des quadrilatères. Donc…", answer: "tous les carrés sont des quadrilatères", explanation: "Transitivité." },

  // Mathématiques
  { id: 26, type: "Mathématiques", difficulty: 2, question: "Une voiture roule 2h à 60 km/h puis 1h à 80 km/h. Distance totale ?", answer: "200", explanation: "120 + 80." },
  { id: 27, type: "Mathématiques", difficulty: 2, question: "Un article coûte 80€. Réduction 25%. Nouveau prix ?", answer: "60", explanation: "80 - 20." },
  { id: 28, type: "Mathématiques", difficulty: 2, question: "Un train parcourt 150 km en 2h30. Vitesse moyenne ?", answer: "60", explanation: "150 / 2,5." },
  { id: 29, type: "Mathématiques", difficulty: 3, question: "3x + 5 = 26. x ?", answer: "7", explanation: "21 / 3." },
  { id: 30, type: "Mathématiques", difficulty: 3, question: "La moitié d’un nombre vaut 18. Nombre ?", answer: "36", explanation: "×2." },

  // Mémoire
  { id: 31, type: "Mémoire", difficulty: 1, question: "Répéter à l’envers : 4 – 9 – 2 – 7 – 1", answer: "1 – 7 – 2 – 9 – 4", explanation: "Inversion." },
  { id: 32, type: "Mémoire", difficulty: 1, question: "Répéter à l’envers : A – C – F – B", answer: "B – F – C – A", explanation: "Inversion." },
  { id: 33, type: "Mémoire", difficulty: 2, question: "3 – 8 – 1 – 6 – 9 – 2", answer: "2 – 9 – 6 – 1 – 8 – 3", explanation: "Inversion." },
  { id: 34, type: "Mémoire", difficulty: 2, question: "K – M – R – T – L", answer: "L – T – R – M – K", explanation: "Inversion." },
  { id: 35, type: "Mémoire", difficulty: 3, question: "7 – 2 – 9 – 4 – 1 – 8 – 3", answer: "3 – 8 – 1 – 4 – 9 – 2 – 7", explanation: "Inversion." },

  // Séries alphabétiques
  { id: 36, type: "Séries alphabétiques", difficulty: 2, question: "A, C, E, G, ?", answer: "I", explanation: "+2 lettres." },
  { id: 37, type: "Séries alphabétiques", difficulty: 2, question: "B, E, H, K, ?", answer: "N", explanation: "+3 lettres." },
  { id: 38, type: "Séries alphabétiques", difficulty: 3, question: "Z, X, V, T, ?", answer: "R", explanation: "-2 lettres." },
  { id: 39, type: "Séries alphabétiques", difficulty: 3, question: "C, F, J, O, ?", answer: "U", explanation: "+3, +4, +5, +6." },
  { id: 40, type: "Séries alphabétiques", difficulty: 3, question: "D, H, M, S, ?", answer: "Z", explanation: "+4, +5, +6, +7." },

  // Problèmes
  { id: 41, type: "Problèmes", difficulty: 2, question: "2 ouvriers → 6 jours. 3 ouvriers ?", answer: "4", explanation: "12 journées / 3." },
  { id: 42, type: "Problèmes", difficulty: 2, question: "Robinet 5h. Deux robinets ?", answer: "2,5", explanation: "Débit ×2." },
  { id: 43, type: "Problèmes", difficulty: 3, question: "20 km/h pendant 45 min. Distance ?", answer: "15", explanation: "20 × 0,75." },
  { id: 44, type: "Problèmes", difficulty: 3, question: "Train A 14h (100 km/h). Train B 15h (130 km/h). Rattrapage ?", answer: "18h20", explanation: "Écart 100 km / 30 km/h." },

  // Matrices logiques
  { id: 45, type: "Matrices logiques", difficulty: 3, question: "Grille 2x2 : +1 ligne, +2 colonne. Case bas droite si haut gauche = 3 ?", answer: "6", explanation: "3 → 5 → 4 → 6." },
  { id: 46, type: "Matrices logiques", difficulty: 3, question: "Chaque case = somme des deux précédentes. 3e case ligne 3 si 3 et 5 ?", answer: "8", explanation: "3 + 5." },

  // Raisonnement combinatoire
  { id: 47, type: "Raisonnement combinatoire", difficulty: 3, question: "3 chemises × 2 pantalons. Tenues ?", answer: "6", explanation: "3 × 2." },
  { id: 48, type: "Raisonnement combinatoire", difficulty: 3, question: "2 lancers de pièce. Issues ?", answer: "4", explanation: "PP, PF, FP, FF." },
  { id: 49, type: "Raisonnement combinatoire", difficulty: 3, question: "4 lettres distinctes. Permutations ?", answer: "24", explanation: "4!." },
  { id: 50, type: "Raisonnement combinatoire", difficulty: 3, question: "Choisir 2 objets parmi 5. Combinaisons ?", answer: "10", explanation: "C(5,2)." }
];
