const disparos = [0, 50, 90, 80, 100, 80, 40];

let acerto = 0;

for (let alvo of disparos) {
  if (alvo > 70) {
    acerto++;
  }
}

if (acerto >= 3) {
  console.log(acerto);
} else {
  console.log("ELIMINADO");
}
