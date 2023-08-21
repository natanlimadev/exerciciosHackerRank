const valores = [100, 500, 100, 200, 50];

const vendas = valores.length;
let pg = 0;
let pg1 = 0;
let menor = valores[0];

for (let valor of valores) {
  if (valor < menor) {
    menor = valor;
  }
}

for (let i = 0; i < vendas; i++) {
  if (vendas < 5) {
    pg += valores[i];
  } else {
    pg1 += valores[i];
  }
}

if (vendas < 5) {
  console.log(pg);
} else {
  console.log(pg1 - menor);
}
