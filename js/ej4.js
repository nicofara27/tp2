// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;

while(confirm("¿Desea ingresar un numero?")) {
    let numero = parseInt(prompt("Ingrese un numero"));
    if(isNaN(numero) === false) {
        suma = suma + numero;
    } else {
        alert("Usted no ingreso un numero, por favor intente nuevamente");
    }
}

document.write("El resultado de la suma es: " + suma);