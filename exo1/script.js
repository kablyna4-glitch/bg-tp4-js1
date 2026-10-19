
"use strict"; // Directive mode strict obligatoire (vu dans le cours sur les bases JS)

// Déclaration de variables globales avec let et const (vu dans le cours - variables et types)
let nom = "John";           // Variable de type String (chaîne de caractères)
let prenom = "Doe";         // Variable de type String
let age = 30;               // Variable de type Number (entier)
let note = 15;              // Variable de type Number (entier)
const PI = 3.14;            // Constante numérique flottante (vu dans le cours - constantes)

// Fonction f1 : Affiche le nom (vu dans le cours - fonctions)
function f1() {
    console.log(nom); // Affichage console (seule sortie autorisée)
}

// Fonction f2 : Affiche le prénom
function f2() {
    console.log(prenom);
}

// Fonction f3 : Affiche le nom complet concaténé avec un tiret (vu dans le cours - concaténation de chaînes)
function f3() {
    console.log(nom + "-" + prenom);
}

// Fonction f4 : Affiche l'âge
function f4() {
    console.log(age);
}

// Fonction f5 : Affiche la note
function f5() {
    console.log(note);
}

// Fonction f6 : Affiche la valeur de Pi
function f6() {
    console.log(PI);
}

