const resultados = ["V", "E", "V", "E"];

const vitoria = 3;
const empate = 1;
let soma = 0;

for (let resultado of resultados) {
  if (resultado === "V") {
    soma += vitoria;
  } else if (resultado === "E") {
    soma += empate;
  }
}

console.log(soma);
