// Le type any permet de type une variable avec n'importe quel type, le compilateur laissera passer la mauvaise utilisation de la variable lors de la compilation.

let level;
level = 10;
level = 'a';

function render(document: any){
    console.log(document);
}