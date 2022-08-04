// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingrese su texto");
texto = texto.toLowerCase();

for (let i = 0; i <= texto.length; i++) {
  let vocal = texto.charAt(i);
  if (
    texto.includes("a") ||
    texto.includes("e") ||
    texto.includes("i") ||
    texto.includes("o") ||
    texto.includes("u")
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
