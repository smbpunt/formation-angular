// ============================================================
// FONCTIONS en TypeScript
// ============================================================
// TypeScript permet de typer les paramètres ET la valeur de
// retour d'une fonction. Si le type de retour ne correspond pas,
// une erreur est signalée dès la compilation.

// ============================================================
// CAS 1 : Fonction basique typée
// ============================================================
// On déclare le type de chaque paramètre et le type de retour
// après les parenthèses (ici "number").
function additionner(a: number, b: number): number {
    return a + b; // TypeScript vérifie que le retour est bien un number
}

console.log(additionner(3, 5)); // 8
// additionner("3", 5); // ERREUR : "3" n'est pas un number

// ============================================================
// CAS 2 : Paramètres optionnels
// ============================================================
// Le "?" rend un paramètre optionnel. S'il est absent, il vaut
// "undefined" à l'intérieur de la fonction.
function saluer(prenom: string, titre?: string): string {
    if (titre) {
        return `Bonjour ${titre} ${prenom}`;
    }
    return `Bonjour ${prenom}`;
}

console.log(saluer("Alice"));          // "Bonjour Alice"
console.log(saluer("Alice", "Mme"));   // "Bonjour Mme Alice"

// ============================================================
// CAS 3 : Paramètres avec valeur par défaut
// ============================================================
// Si le paramètre est absent ou undefined, la valeur par défaut
// est utilisée. Plus besoin du "?" car le défaut couvre le cas.
function puissance(base: number, exposant: number = 2): number {
    return Math.pow(base, exposant);
}

console.log(puissance(3));    // 9   (exposant vaut 2 par défaut)
console.log(puissance(3, 3)); // 27

// ============================================================
// CAS 4 : Paramètre rest (nombre variable d'arguments)
// ============================================================
// "...nombres" regroupe tous les arguments restants dans un tableau.
// Le type est "number[]" car on reçoit plusieurs numbers.
function somme(...nombres: number[]): number {
    return nombres.reduce((total, n) => total + n, 0);
}

console.log(somme(1, 2, 3));          // 6
console.log(somme(10, 20, 30, 40));   // 100

// ============================================================
// CAS 5 : Type de retour void
// ============================================================
// "void" indique que la fonction ne retourne aucune valeur utile.
// Utilisé pour les fonctions qui ont des effets de bord (console, DOM...).
function afficherMessage(message: string): void {
    console.log(`[INFO] ${message}`);
    // pas de "return valeur" ici
}

afficherMessage("Démarrage de l'application");

// ============================================================
// CAS 6 : Surcharge de fonction (overloading)
// ============================================================
// On déclare plusieurs signatures possibles avant l'implémentation.
// TypeScript choisit la bonne signature selon les arguments reçus.
function formater(valeur: number): string;          // signature 1
function formater(valeur: string): string;          // signature 2
function formater(valeur: number | string): string { // implémentation réelle
    if (typeof valeur === "number") {
        return valeur.toFixed(2); // ex: 3 => "3.00"
    }
    return valeur.trim().toUpperCase(); // ex: "  bonjour  " => "BONJOUR"
}

console.log(formater(3.14159)); // "3.14"
console.log(formater("  hello  ")); // "HELLO"

// ============================================================
// CAS 7 : Typage d'une variable de type fonction
// ============================================================
// On peut typer une variable pour qu'elle n'accepte QUE des
// fonctions ayant une signature précise.
let operation: (x: number, y: number) => number;

operation = additionner; // OK : même signature
console.log(operation(10, 5)); // 15

// operation = saluer; // ERREUR : signature incompatible

