// ============================================================
// ENUM en TypeScript
// ============================================================
// Un enum (énumération) permet de définir un ensemble de
// constantes nommées. Il remplace les "magic numbers" ou les
// chaînes répétées dans le code, rendant celui-ci plus lisible
// et moins sujet aux fautes de frappe.

// ============================================================
// CAS 1 : Enum numérique (le plus courant)
// ============================================================
// Par défaut, les valeurs commencent à 0 et s'incrémentent.
enum Direction {
    Haut,    // 0
    Bas,     // 1
    Gauche,  // 2
    Droite,  // 3
}

// Utilisation : on accède aux membres comme des propriétés
let deplacement: Direction = Direction.Haut;
console.log(deplacement);          // 0  (valeur numérique sous-jacente)
console.log(Direction[0]);         // "Haut" (correspondance inverse : valeur => nom)

// Comparaison dans un if
if (deplacement === Direction.Haut) {
    console.log("On monte !");     // affiché car deplacement vaut Direction.Haut
}

// ============================================================
// CAS 2 : Enum numérique avec valeur de départ personnalisée
// ============================================================
// On peut forcer la première valeur ; les suivantes s'incrémentent.
enum CodeHTTP {
    OK = 200,
    CreePar = 201,   // 201
    NonTrouve = 404, // on peut aussi sauter des valeurs
    Erreur = 500,
}

console.log(CodeHTTP.OK);        // 200
console.log(CodeHTTP.NonTrouve); // 404

function gererReponse(code: CodeHTTP): void {
    switch (code) {
        case CodeHTTP.OK:
            console.log("Succès !");
            break;
        case CodeHTTP.NonTrouve:
            console.log("Ressource introuvable.");
            break;
        case CodeHTTP.Erreur:
            console.log("Erreur interne du serveur.");
            break;
        default:
            console.log(`Code non géré : ${code}`);
    }
}

gererReponse(CodeHTTP.OK);        // "Succès !"
gererReponse(CodeHTTP.NonTrouve); // "Ressource introuvable."

// ============================================================
// CAS 3 : Enum de chaînes (string enum)
// ============================================================
// Chaque membre reçoit une valeur string explicite.
// Avantage : les valeurs sont lisibles lors du débogage
// (on voit "ADMIN" plutôt que 0 dans les logs).
enum Role {
    Admin = "ADMIN",
    Editeur = "EDITEUR",
    Lecteur = "LECTEUR",
}

let monRole: Role = Role.Admin;
console.log(monRole); // "ADMIN"

function afficherAcces(role: Role): void {
    if (role === Role.Admin) {
        console.log("Accès total autorisé.");
    } else if (role === Role.Editeur) {
        console.log("Peut modifier le contenu.");
    } else {
        console.log("Lecture seule.");
    }
}

afficherAcces(Role.Editeur); // "Peut modifier le contenu."
afficherAcces(Role.Lecteur); // "Lecture seule."

// ============================================================
// CAS 4 : Const enum (optimisation)
// ============================================================
// "const enum" est remplacé par ses valeurs directement dans
// le code compilé : aucun objet n'est généré en JavaScript.
// => Idéal pour les performances quand on n'a pas besoin
// de la correspondance inverse (Direction[0]).
const enum Saison {
    Printemps,  // 0
    Ete,        // 1
    Automne,    // 2
    Hiver,      // 3
}

let saisonActuelle: Saison = Saison.Ete;
// Après compilation, la ligne ci-dessus devient : let saisonActuelle = 1;
console.log(saisonActuelle); // 1

// ============================================================
// RÉSUMÉ : quand utiliser quoi ?
// ============================================================
// enum numérique  => ensemble de constantes ordonnées (priorités, codes)
// enum string     => valeurs lisibles dans les logs et les API
// const enum      => optimisation quand la correspondance inverse est inutile
// union de types  => alternative légère : type Dir = "haut" | "bas" | ...
