const sequencia = [">", ">", ">", ">", ">", ">", ">", ">", ">"];

let count = 0;

for (let carrousel of sequencia) {
  if (carrousel === ">") {
    count++;
    if (count > 6) {
      count = 0;
    }
  } else {
    count--;
    if (count < 0) {
      count = 6;
    }
  }
}

console.log(count);
