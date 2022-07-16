// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const fila = parseInt(prompt("Indique el numero de filas"));
const col = parseInt(prompt("Indique el numero de columnas"));
let tamañoTotal = fila * col;

document.write(`<table>
    <tbody>`);

for (let i = 0; i < fila; i++) {
  document.write(`<tr>`);
  for (let j = 0; j < col; j++) {
    document.write(`<td>${tamañoTotal}</td>`);
    tamañoTotal--;
  }
  document.write(`</tr>`);
}
document.write(`</tbody>
</table>`);
