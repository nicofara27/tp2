// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingrese su texto");
let minus = texto.toLowerCase();
let vocales = 0;

for (let i = 0; i <= minus.length; i++) {
  if (
    minus.charAt(i) === "a" ||
    minus.charAt(i) === "e" ||
    minus.charAt(i) === "i" ||
    minus.charAt(i) === "o" ||
    minus.charAt(i) === "u"
  ) {
    vocales++;
  }
}

document.write(`Hay ${vocales} vocales en el texto`);
