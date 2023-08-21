const primeiraLetra = "a";
const segundaLetra = "v";
const palavras = ["aveia", "manha", "ave"];

const insp = [];

for (let carac of palavras) {
  const primeira = carac[0];
  const segunda = carac[1];

  if (primeira === primeiraLetra && segunda === segundaLetra) {
    insp.push(carac);
    console.log(carac);
  }
}

if (insp.length === 0) {
  console.log("NENHUMA");
}
