const palavra = "abelha";
const palpite = "a";
let soma = 0;

for (let letra of palavra) {
  if (letra === palpite) {
    soma++;
  }
}
console.log(soma);
