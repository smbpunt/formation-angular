// ============================================================
// TUPLE en TypeScript
// ============================================================
// Un tuple est un tableau dont on fixe à l'avance :
//   - le nombre d'éléments
//   - le type de chaque élément à chaque position
// Contrairement à un tableau classique (number[]), chaque
// position a son propre type.

// Déclaration d'un tuple
let personne: [string, number, boolean] = ["John", 25, true];

personne = ["John", 25, true];

// ts connait déjà le type de chaque élement du tableau et nous permet de faire de l'autocomplétion

console.log(personne[0].toUpperCase());
console.log(personne[1].toFixed(2));

let coordonnees: [x: number, y: number, z: number] = [1.5, 2.3, 0.0];

console.log(`Latitude : ${coordonnees[0]} Longitude : ${coordonnees[1]} Altitude : ${coordonnees[2]}`)

let paire: [string, number?];
paire = ["Solo"];
paire = ["Duo", 42];


const users: [string, number][] = [
    ["Bob", 42],
    ["Carla", 21],
    ["Dan", 13],
];

users.forEach(([nom, annee]) => {
    console.log(`${nom.toUpperCase()} a ${annee} ans`)
});