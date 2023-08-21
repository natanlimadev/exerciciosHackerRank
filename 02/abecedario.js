const letra = "m";
const palavra = [
  "mamao",
  "maca",
  "melao",
  "melancia",
  "laranja",
  "mato",
  "limao",
  "marraom",
  "lima",
];

let count = 0;
for (let part of palavra) {
  const l = part[0];

  if (l === letra) {
    // console.log("ok!")
  } else {
    count++;
  }
}

console.log(count);
