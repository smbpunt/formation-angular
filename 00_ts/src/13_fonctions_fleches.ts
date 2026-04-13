// ============================================================
// FONCTIONS FLÉCHÉES en TypeScript
// ============================================================
// Les fonctions fléchées (arrow functions) sont une syntaxe
// compacte introduite en ES6. En TypeScript, on y ajoute
// le typage des paramètres et du retour.
// Rappel syntaxe : (params) => expression  OU  (params) => { bloc }

// ============================================================
// CAS 1 : Syntaxe de base
// ============================================================
// Forme longue avec bloc et "return" explicite
const multiplier = (a: number, b: number): number => {
    return a * b;
};

// Forme courte : si le corps est une expression unique,
// pas besoin d'accolades ni de "return".
const multiplierCourt = (a: number, b: number): number => a * b;

console.log(multiplier(4, 5));      // 20
console.log(multiplierCourt(4, 5)); // 20

// ============================================================
// CAS 2 : Un seul paramètre => parenthèses optionnelles
// ============================================================
const doubler = (n: number): number => n * 2;
// Équivalent sans parenthèses (style non recommandé avec TypeScript
// car on ne peut pas annoter le type sans les parenthèses) :
// const doubler = n => n * 2;

console.log(doubler(7)); // 14

// ============================================================
// CAS 3 : Aucun paramètre
// ============================================================
const direBonjour = (): string => "Bonjour tout le monde !";
console.log(direBonjour()); // "Bonjour tout le monde !"

// ============================================================
// CAS 4 : Retour d'un objet littéral
// ============================================================
// ATTENTION : sans parenthèses, les accolades seraient interprétées
// comme un bloc de code, pas comme un objet. Il faut donc englober
// l'objet dans des parenthèses.
const creerUtilisateur = (nom: string, age: number): { nom: string; age: number } =>
    ({nom, age}); // les () autour de {} sont obligatoires ici

console.log(creerUtilisateur("Alice", 30)); // { nom: "Alice", age: 30 }

// ============================================================
// CAS 5 : Fonctions fléchées dans les tableaux (map, filter, reduce)
// ============================================================
// C'est l'usage le plus fréquent des fonctions fléchées.
const notes: number[] = [12, 8, 17, 5, 14, 9];

// map : transforme chaque élément
const notesSur20: number[] = notes.map((n: number) => n);

// filter : garde uniquement les éléments qui passent le test
const notesSuperieures10: number[] = notes.filter((n: number) => n > 10);

// reduce : accumule les éléments en une valeur unique
const moyenne: number = notes.reduce((acc: number, n: number) => acc + n, 0) / notes.length;

console.log(notesSuperieures10); // [12, 17, 14]
console.log(moyenne.toFixed(2)); // "10.83"

// ============================================================
// CAS 6 : "this" et fonctions fléchées
// ============================================================
// Différence clé avec les fonctions classiques :
// une fonction fléchée capture le "this" du contexte englobant.
// Elle ne crée PAS son propre "this".

class Minuteur {
    secondes: number = 0;

    demarrer(): void {
        // ICI : si on utilisait function() { ... }, "this" serait undefined
        // en mode strict. Avec une arrow function, "this" reste le Minuteur.
        const tick = () => {
            this.secondes++; // "this" fait bien référence à l'instance Minuteur
            console.log(`Secondes écoulées : ${this.secondes}`);
        };

        tick(); // 1
        tick(); // 2
        tick(); // 3
    }
}

const minuteur = new Minuteur();
minuteur.demarrer();

// ============================================================
// CAS 7 : Typer une variable de type fonction fléchée
// ============================================================
// On peut annoter explicitement le type d'une variable qui
// contiendra une fonction fléchée.
const diviser: (a: number, b: number) => number = (a, b) => a / b;
console.log(diviser(10, 4)); // 2.5
