// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingrese su texto");
let minus = texto.toLowerCase();

for (let i = 0; i <= minus.length; i++) {
  let vocal = minus.charAt(i);
  if (
    minus.includes("a") ||
    minus.includes("e") ||
    minus.includes("i") ||
    minus.includes("o") ||
    minus.includes("u")
  ) {
    if (
      vocal === "a" ||
      vocal === "e" ||
      vocal === "i" ||
      vocal === "o" ||
      vocal === "u"
    ) {
      document.write(`La letra numero ${i + 1} es la primera vocal del texto.`);
      break;
    }
  } else {
    document.write("El texto no tiene vocales.");
    break;
  }
}
