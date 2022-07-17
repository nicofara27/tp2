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
