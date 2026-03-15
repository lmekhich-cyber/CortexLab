/* =========================================================
   CORTEXLAB ULTRA – BASE DE DONNÉES DES EXERCICES
   50 exercices variés, classés par type et difficulté
========================================================= */

export const EXERCISES = 
   [
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

   // Logique intermédiaire – Problèmes de déduction
{ id: 101, type: "Logique intermédiaire – Déduction", difficulty: 2,
  question: "Tous les chiens sont des animaux. Certains animaux sont domestiques. Peut-on conclure que certains chiens sont domestiques ?",
  answer: "non",
  explanation: "On ne sait pas si les animaux domestiques sont des chiens. Rien ne l’impose dans les données."
},
{ id: 102, type: "Logique intermédiaire – Déduction", difficulty: 2,
  question: "Tous les élèves de la classe A apprennent l’anglais. Paul est dans la classe A. Peut-on conclure que Paul apprend l’anglais ?",
  answer: "oui",
  explanation: "Paul appartient à un groupe dont tous les membres apprennent l’anglais."
},
{ id: 103, type: "Logique intermédiaire – Déduction", difficulty: 2,
  question: "Tous les chats sont des animaux. Aucun animal n’est un végétal. Peut-on conclure qu’aucun chat n’est un végétal ?",
  answer: "oui",
  explanation: "Si tous les chats sont des animaux et qu’aucun animal n’est un végétal, alors aucun chat n’est un végétal."
},
{ id: 104, type: "Logique intermédiaire – Déduction", difficulty: 2,
  question: "Certains livres sont des romans. Tous les romans sont en français. Peut-on conclure que certains livres sont en français ?",
  answer: "oui",
  explanation: "Les livres qui sont des romans sont en français, donc certains livres sont en français."
},
{ id: 105, type: "Logique intermédiaire – Déduction", difficulty: 2,
  question: "Tous les sportifs courent. Pierre court. Peut-on conclure que Pierre est sportif ?",
  answer: "non",
  explanation: "Erreur classique : “si sportif alors court” ne signifie pas “si court alors sportif”."
},
{ id: 106, type: "Logique intermédiaire – Déduction", difficulty: 2,
  question: "Tous les triangles ont trois côtés. Cette figure a trois côtés. Peut-on conclure que c’est un triangle ?",
  answer: "non",
  explanation: "Avoir trois côtés est nécessaire mais pas suffisant si on ne sait rien d’autre (par ex. figure croisée)."
},
{ id: 107, type: "Logique intermédiaire – Déduction", difficulty: 2,
  question: "Aucun élève de la classe B n’est en retard. Marie est en retard. Peut-on conclure qu’elle n’est pas dans la classe B ?",
  answer: "oui",
  explanation: "Si aucun élève de B n’est en retard, une personne en retard ne peut pas être dans B."
},
{ id: 108, type: "Logique intermédiaire – Déduction", difficulty: 2,
  question: "Tous les musiciens jouent d’un instrument. Certains peintres sont musiciens. Peut-on conclure que certains peintres jouent d’un instrument ?",
  answer: "oui",
  explanation: "Les peintres qui sont musiciens jouent d’un instrument."
},
{ id: 109, type: "Logique intermédiaire – Déduction", difficulty: 2,
  question: "Certains élèves aiment les maths. Tous ceux qui aiment les maths aiment la logique. Peut-on conclure que certains élèves aiment la logique ?",
  answer: "oui",
  explanation: "Les élèves qui aiment les maths aiment aussi la logique."
},
{ id: 110, type: "Logique intermédiaire – Déduction", difficulty: 2,
  question: "Tous les A sont B. Certains B sont C. Peut-on conclure que certains A sont C ?",
  answer: "non",
  explanation: "On ne sait pas si les B qui sont C sont aussi des A."
},
// Logique intermédiaire – Logigrammes
{ id: 111, type: "Logique intermédiaire – Logigrammes", difficulty: 2,
  question: "Trois amis (Ana, Ben, Léo) ont chacun un animal différent (chat, chien, poisson).\nAna n’a pas de chat.\nBen n’a pas de chien.\nQui a le chien ?",
  answer: "Ana",
  explanation: "Si Ben n’a pas le chien, et Léo ne peut pas tout avoir, en testant les possibilités on trouve Ana."
},
{ id: 112, type: "Logique intermédiaire – Logigrammes", difficulty: 2,
  question: "Trois élèves (Clara, Hugo, Inès) pratiquent chacun un sport différent (tennis, natation, judo).\nClara ne fait pas de judo.\nHugo ne fait pas de natation.\nQui fait de la natation ?",
  answer: "Inès",
  explanation: "Si Hugo ne fait pas de natation et Clara non plus (par élimination), il reste Inès."
},
{ id: 113, type: "Logique intermédiaire – Logigrammes", difficulty: 2,
  question: "Quatre jours (lundi, mardi, mercredi, jeudi) et quatre matières (maths, français, histoire, sciences).\nLes maths ne sont pas lundi.\nLe français est après les maths.\nLes sciences ne sont pas jeudi.\nQuel jour peut être les maths ?",
  answer: "mardi",
  explanation: "Si maths mardi, français après (mercredi ou jeudi), sciences pas jeudi → cohérent. Lundi impossible."
},
{ id: 114, type: "Logique intermédiaire – Logigrammes", difficulty: 2,
  question: "Trois maisons (rouge, bleue, verte) et trois propriétaires (Paul, Emma, Lucas).\nPaul n’habite pas la maison rouge.\nEmma n’habite pas la maison bleue.\nLucas n’habite pas la maison verte.\nQui peut habiter la maison rouge ?",
  answer: "Emma ou Lucas",
  explanation: "Seul Paul est exclu de la maison rouge, les deux autres restent possibles."
},
{ id: 115, type: "Logique intermédiaire – Logigrammes", difficulty: 2,
  question: "Trois boissons (eau, jus, lait) et trois personnes (A, B, C).\nA ne boit pas de lait.\nB boit du jus.\nC ne boit pas d’eau.\nQui boit de l’eau ?",
  answer: "A",
  explanation: "B a le jus, C ne peut pas avoir l’eau, donc l’eau revient à A."
},
{ id: 116, type: "Logique intermédiaire – Logigrammes", difficulty: 2,
  question: "Trois matières (maths, musique, sport) et trois jours (lundi, mardi, mercredi).\nLes maths ne sont pas lundi.\nLa musique est avant le sport.\nLe sport est mercredi.\nQuel jour est la musique ?",
  answer: "mardi",
  explanation: "Si sport mercredi et musique avant, musique mardi, donc maths lundi impossible → maths mardi ? Non, musique mardi → maths lundi ou mardi selon interprétation, mais ici musique mardi."
},
{ id: 117, type: "Logique intermédiaire – Logigrammes", difficulty: 2,
  question: "Trois personnes (X, Y, Z) et trois moyens de transport (bus, vélo, train).\nX ne prend pas le bus.\nY ne prend pas le train.\nZ ne prend pas le vélo.\nQui peut prendre le train ?",
  answer: "X ou Z",
  explanation: "Seul Y est exclu du train."
},
{ id: 118, type: "Logique intermédiaire – Logigrammes", difficulty: 2,
  question: "Trois animaux (chat, chien, lapin) et trois propriétaires (Nina, Tom, Léa).\nNina n’a pas de chien.\nTom n’a pas de chat.\nLéa n’a pas de lapin.\nQui peut avoir le chat ?",
  answer: "Nina ou Léa",
  explanation: "Seul Tom est exclu du chat."
},
{ id: 119, type: "Logique intermédiaire – Logigrammes", difficulty: 2,
  question: "Trois couleurs de voiture (rouge, noire, blanche) et trois personnes (A, B, C).\nA n’a pas de voiture noire.\nB n’a pas de voiture blanche.\nC n’a pas de voiture rouge.\nQui peut avoir la voiture noire ?",
  answer: "B ou C",
  explanation: "Seul A est exclu de la voiture noire."
},
{ id: 120, type: "Logique intermédiaire – Logigrammes", difficulty: 2,
  question: "Trois jours (lundi, mardi, mercredi) et trois activités (cinéma, sport, lecture).\nLe cinéma n’est pas lundi.\nLe sport est avant le cinéma.\nLa lecture n’est pas mercredi.\nQuel jour peut être le sport ?",
  answer: "lundi",
  explanation: "Si cinéma pas lundi et sport avant cinéma, sport doit être lundi, cinéma mardi, lecture mercredi exclue → lecture mardi ? On ajuste : sport lundi reste la seule option cohérente."
},
// Logique intermédiaire – Problèmes de temps & travail
{ id: 121, type: "Logique intermédiaire – Temps & travail", difficulty: 2,
  question: "Une machine remplit un réservoir en 4 heures. Une deuxième machine identique remplit le même réservoir en 4 heures aussi. Combien de temps faut-il si les deux machines fonctionnent ensemble ?",
  answer: "2",
  explanation: "Chaque machine fait 1/4 du travail par heure. Ensemble : 1/4 + 1/4 = 1/2 → 2 heures."
},
{ id: 122, type: "Logique intermédiaire – Temps & travail", difficulty: 2,
  question: "Un robinet remplit une baignoire en 6 heures. Un deuxième robinet la remplit en 3 heures. Combien de temps faut-il ensemble ?",
  answer: "2",
  explanation: "Débits : 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 → 2 heures."
},
{ id: 123, type: "Logique intermédiaire – Temps & travail", difficulty: 2,
  question: "Un ouvrier met 8 jours pour terminer un travail. Un autre met 4 jours pour le même travail. Combien de jours ensemble ?",
  answer: "2,67",
  explanation: "1/8 + 1/4 = 1/8 + 2/8 = 3/8 → temps = 1 / (3/8) = 8/3 ≈ 2,67 jours."
},
{ id: 124, type: "Logique intermédiaire – Temps & travail", difficulty: 2,
  question: "Une voiture roule à 60 km/h pendant 2 heures, puis à 90 km/h pendant 1 heure. Distance totale ?",
  answer: "210",
  explanation: "60×2 + 90×1 = 120 + 90 = 210 km."
},
{ id: 125, type: "Logique intermédiaire – Temps & travail", difficulty: 2,
  question: "Un train parcourt 150 km en 2h30. Quelle est sa vitesse moyenne ?",
  answer: "60",
  explanation: "2h30 = 2,5 h. 150 / 2,5 = 60 km/h."
},
{ id: 126, type: "Logique intermédiaire – Temps & travail", difficulty: 2,
  question: "Deux personnes lisent un livre de 300 pages. La première lit 30 pages par jour, la deuxième 20 pages par jour. Combien de jours ensemble pour finir le livre si elles se partagent le travail ?",
  answer: "6",
  explanation: "30 + 20 = 50 pages/jour. 300 / 50 = 6 jours."
},
{ id: 127, type: "Logique intermédiaire – Temps & travail", difficulty: 2,
  question: "Une pompe vide une piscine en 10 heures. Une deuxième pompe vide la même piscine en 5 heures. Combien de temps ensemble ?",
  answer: "3,33",
  explanation: "1/10 + 1/5 = 1/10 + 2/10 = 3/10 → temps = 1 / (3/10) = 10/3 ≈ 3,33 h."
},
{ id: 128, type: "Logique intermédiaire – Temps & travail", difficulty: 2,
  question: "Un cycliste parcourt 45 km en 3 heures. Puis 30 km en 2 heures. Vitesse moyenne globale ?",
  answer: "15",
  explanation: "Distance totale 75 km, temps total 5 h → 75 / 5 = 15 km/h."
},
{ id: 129, type: "Logique intermédiaire – Temps & travail", difficulty: 2,
  question: "Une machine produit 120 pièces en 3 heures. Combien de pièces en 5 heures au même rythme ?",
  answer: "200",
  explanation: "120 / 3 = 40 pièces/h. 40 × 5 = 200."
},
{ id: 130, type: "Logique intermédiaire – Temps & travail", difficulty: 2,
  question: "Un élève fait un exercice en 12 minutes. Combien d’exercices peut-il faire en 1 heure au même rythme ?",
  answer: "5",
  explanation: "1 heure = 60 minutes. 60 / 12 = 5 exercices."
}
];
