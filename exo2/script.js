"use strict"; // Activation du mode strict

// 1. Déclaration d'un tableau simple (Array) (vu dans le cours - les Tableaux)
let tabEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// 2. Déclaration d'un objet littéral (Object) avec paires clé/valeur (vu dans le cours - les Objets)
let objetEtudiant = {
    nom: 'John',
    prenom: 'DOE',
    age: 30
};

// 3. Déclaration d'un tableau d'objets (vu dans le cours - tableaux d'objets)
let tabObjetsEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

// Fonction f1 : Parcourt et affiche les éléments du tableau un par un (vu dans le cours - boucles for / for...of)
function f1() {
    for (let i = 0; i < tabEtudiants.length; i++) {
        console.log(tabEtudiants[i]);
    }
}

// Fonction f2 : Affiche directement l'objet étudiant dans la console
function f2() {
    console.log(objetEtudiant);
}

// Fonction f3 : Parcourt le tableau d'objets et affiche chaque étudiant au format 'nom-prenom-age' (vu dans le cours - accès aux propriétés d'un objet)
function f3() {
    for (let i = 0; i < tabObjetsEtudiants.length; i++) {
        let e = tabObjetsEtudiants[i];
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}
