const enum Genre {
    Action,
    Rpg,
    Strategie,
    Sport
}

interface IJeu {
    id: number,
    titre: string,
    genre: Genre,
    note: number,
    multijoueur: boolean | undefined
}

type InfoStock = { quantite: number, magasin: string }
type JeuEnStock = IJeu & InfoStock;

let bibliotheque: JeuEnStock[] = [
    {
        id: 1,
        titre: 'The Witcher 3: Wild Hunt',
        genre: Genre.Rpg,
        note: 19,
        multijoueur: false,
        quantite: 12,
        magasin: 'Micromania'
    },
    {
        id: 2,
        titre: 'Counter-Strike 2',
        genre: Genre.Action,
        note: 17,
        multijoueur: true,
        quantite: 25,
        magasin: 'Steam'
    },
    {
        id: 3,
        titre: 'Age of Empires IV',
        genre: Genre.Strategie,
        note: 16,
        multijoueur: true,
        quantite: 8,
        magasin: 'Fnac'
    },
    {
        id: 4,
        titre: 'FIFA 24',
        genre: Genre.Sport,
        note: 14,
        multijoueur: true,
        quantite: 30,
        magasin: 'Micromania'
    },
    {
        id: 5,
        titre: 'Elden Ring',
        genre: Genre.Rpg,
        note: 20,
        multijoueur: undefined,
        quantite: 15,
        magasin: 'Cultura'
    },
];

bibliotheque = bibliotheque.sort((a: JeuEnStock, b: JeuEnStock) => (b.note - a.note));

if (bibliotheque.length < 3) {
    throw new Error('Bibliothèque insuffisante pour former un podium');
}
// Parce qu'on est sur que sort n'enlève pas d'items dans notre tableau
let podium: [string, string, string] = [
    bibliotheque[0]!.titre,
    bibliotheque[1]!.titre,
    bibliotheque[2]!.titre,
];

console.log(podium);

function rechercherParGenre(jeux: JeuEnStock[], genre: Genre): JeuEnStock[] {
    return jeux.filter((jeu: JeuEnStock) => jeu.genre === genre)
}

console.log(rechercherParGenre(bibliotheque, Genre.Rpg));