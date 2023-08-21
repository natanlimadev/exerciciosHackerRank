const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let maior = notas[0];
let menor = notas[0];
let media = 0;
let soma = 0;

for (let posicao of notas) {
  if (posicao > maior) {
    maior = posicao;
  } else if (posicao < menor) {
    menor = posicao;
  }
}

for (let num of notas) {
  soma += num;
}
media = (soma - menor - maior) / (notas.length - 2);

console.log(media);
