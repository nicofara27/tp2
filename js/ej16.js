// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("Ingrese su texto");

texto = texto.split("");
texto = texto.reverse("");
texto = texto.join("");

document.write(texto);
