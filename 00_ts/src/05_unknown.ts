let mystere: unknown;

mystere = true;
mystere = { nom: 'John'};

mystere = 'bonjour';
if(typeof mystere == "string") {
    console.log(mystere.toUpperCase());
}

mystere = 42;
if(typeof mystere == "number") {
    console.log(mystere.toFixed(2));
}



function traiterApiResponse(response: unknown): void {
    if(typeof response === "object" && response !== null && "nom" in response) {
        console.log((response as { nom: string }).nom.toUpperCase());
    } else {
        console.log("Erreur de traitement");
    }
}

traiterApiResponse({ nom: "John" });
traiterApiResponse(42);