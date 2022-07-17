// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let name1 = prompt("Ingrese el primer nombre");
let name2 = prompt("Ingrese el segundo nombre");
let name3 = prompt("Ingrese el tercer nombre");
let age1 = parseInt(prompt("Ingrese la edad de " + name1));
let age2 = parseInt(prompt("Ingrese la edad de " + name2));
let age3 = parseInt(prompt("Ingrese la edad de " + name3));
let mayor = Math.max(age1, age2, age3);

if (mayor === age1 && age1 === age2 && age1 === age3) {
  document.write(`${name1}, ${name2} y ${name3} tienen ${age1} de edad`);
} else if (mayor === age1 && age1 === age2) {
  document.write(
    `los mayores son ${name1} y ${name2} que tienen ${age1} de edad`
  );
} else if (mayor === age1 && age1 === age3) {
  document.write(
    `los mayores son ${name1} y ${name3} que tienen ${age1} de edad`
  );
} else if (mayor === age2 && age2 === age3) {
  document.write(
    `los mayores son ${name2} y ${name3} que tienen ${age2} de edad`
  );
} else if (mayor === age1) {
  document.write(`El mayor de los 3 es ${name1} que tiene ${age1} de edad`);
} else if (mayor === age2) {
  document.write(`El mayor de los 3 es ${name2} que tiene ${age2} de edad`);
} else {
  document.write(`El mayor de los 3 es ${name3} que tiene ${age3} de edad`);
}
