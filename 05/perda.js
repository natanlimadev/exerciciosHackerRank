const precos = [30, 10, 54, 76, 1, 4, 35];

let menorPrej = 99999;
for (let i = 0; i < precos.length; i++) {
  for (let j = i + 1; j < precos.length; j++) {
    const compra = precos[i];
    const venda = precos[j];
    const prej = compra - venda;

    if (prej > 0) {
      if (prej < menorPrej) {
        menorPrej = prej;
      }
    }
  }
}
console.log(menorPrej);
