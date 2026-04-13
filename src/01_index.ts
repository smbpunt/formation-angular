console.log("Hello World TS");


let isDone: boolean = false;

let height: number = 100;
height = 12;

let nameT: string = "John";

let phrase: string = `Hello   ${nameT}`;
let phrase2: string = `Hello ` + nameT;

console.log(phrase);
console.log(phrase2);

function greeterString(person: string): string {
    return "Bonjour depuis la fonction, " + person;
}

console.log(greeterString("Bastien"));
