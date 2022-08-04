// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let fraseCompleta = "";

while (confirm("¿Desea ingresar palabaras?")) {
  let textoIngresado = prompt("Ingrese una palabra");
  if (fraseCompleta == "") {
    fraseCompleta = fraseCompleta + textoIngresado;
  } else {
    fraseCompleta = fraseCompleta + " - " + textoIngresado;
  }
}

document.write(fraseCompleta);
