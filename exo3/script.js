"use strict"; // Activation du mode strict

// Déclaration de la structure de données Students fournie dans le sujet (vu dans le cours - structures de données)
// Chaque étudiant : [Matricule, Prénom, Nom, Moyenne (float), Absences/Groupe]
let Students = [
    [1000, "JOHN", "DOE", 14.0, 5],
    [2000, "BOB", "CARLTON", 7.0, 1],
    [3000, "RAYANE", "SMITH", 13.0, 3]
];

// Fonction B : Prend un seul paramètre de type float (la moyenne) et retourne un booléen (vu dans le cours - paramètres et valeur de retour)
function B(moyenne) {
    // Retourne true si la moyenne >= 10, sinon false (vu dans le cours - opérateurs de comparaison)
    return moyenne >= 10.0;
}

// Fonction A : Fonction principale appelée au clic sur le bouton "Délibération"
// Elle appelle la fonction B pour chaque étudiant (vu dans le cours - appel de fonctions intermédiaires)
function A() {
    // Parcours de la liste des étudiants avec une boucle for (vu dans le cours - itération)
    for (let i = 0; i < Students.length; i++) {
        let matricule = Students[i][0]; // Récupération du matricule (1er champ)
        let moyenne = Students[i][3];   // Récupération de la moyenne (4ème champ, float)
        
        // Appel de la fonction B avec le float en paramètre
        let estAdmis = B(moyenne);
        
        // Structure conditionnelle if / else pour déterminer le statut (vu dans le cours - conditions)
        if (estAdmis) {
            console.log(matricule + ": ADMIS");
        } else {
            console.log(matricule + ": AJOURNÉ");
        }
    }
}
