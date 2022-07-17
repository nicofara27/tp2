// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

let nota = parseInt(prompt("Ingrese su nota"));

switch (true) {
  case nota <= 2: {
    alert("Usted tiene una nota muy deficiente");
    break;
  }
  case nota <= 4: {
    alert("Usted tiene una nota insuficiente");
    break;
  }
  case nota <= 6: {
    alert("Usted tiene una nota suficiente");
    break;
  }
  case nota <= 8: {
    alert("Usted tiene una nota notable");
    break;
  }
  case nota <= 10: {
    alert("Usted tiene una nota sobresaliente");
    break;
  }
  default: {
    alert("Ingrese una nota valida");
    break;
  }
}
