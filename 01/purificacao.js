const test1 = "*Canis %lupus )familiaris";
const test2 = "Felis) silvestris *catus&";
const test3 = "$Ailuropoda@ melanoleuca!";

let dadoLimpo = "";

for (let caracteres of test3) {
    if (caracteres === "!" || caracteres === "@" || caracteres === "#" || caracteres === "$" || caracteres === "%" || caracteres === "&" || caracteres === "*" || caracteres === "(" || caracteres === ")") {
        //não faz nada
    } else {
        dadoLimpo += caracteres;
    }
}
console.log(dadoLimpo);


//neste caso ele availia carater por caracter e depois vai recolocando em ordem inclusive com os espaços.
//dadoLimpo = dadoLimpo + caractere; ou de forma abreviada como está acima.