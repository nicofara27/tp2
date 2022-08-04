// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let num = parseInt(prompt("Ingrese un numero no mayor de 50"));
if (num <= 50 && num >= 1) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      document.write(j + 1);
    }
    document.write("<br>");
  }
} else {
  alert("Usted ingreso un numero invalido");
}



// Respuesta de profesora

// //solicitar un numero
// let numrep = parseInt(prompt("Ingresa un numero de repeticiones entre 1 y 50"));
// //verifico si es un numero
// if (!isNaN(numrep)) {
//     //verifico si el numero esta entre 1 y 50
//     if (numrep >= 1 && numrep <= 50) {
//         //bucle que comienza desde numrep hasta 1
//         for (let i = numrep; i >= 1; i--) {
//             //bucle interno desde i hasta 1
//             for (let rep = i; rep >= 1; rep--) {
//                 document.write(i);
//             }
//             document.write("<br>");
//         }
//     } else {
//         alert("El número introducido no es válido");
//     }
// } else {
//     alert("valor erroneo");
// }