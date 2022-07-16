// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

while(confirm("¿Desea ingresar un DNI?")) {
    let dni = parseInt(prompt("Ingrese un DNI"));
    let resto = "";

    if(dni > 99999999 || dni < 0 || isNaN(dni)) {
         alert("Ingrese un DNI correcto");
    } else {
        resto = dni % 23;
    }

     switch(resto) {
        case 0: {
            document.write("DNI " + dni + ": la letra que le corresponde es T<br>");
            break;
        }
        case 1: {
            document.write("DNI " + dni + ": la letra que le corresponde es R<br>");
            break;
        }
        case 2: {
            document.write("DNI " + dni + ": la letra que le corresponde es W<br>");
            break;
        }
        case 3: {
            document.write("DNI " + dni + ": la letra que le corresponde es A<br>");
            break;
        }
        case 4: {
            document.write("DNI " + dni + ": la letra que le corresponde es G<br>");
            break;
        }
        case 5: {
            document.write("DNI " + dni + ": la letra que le corresponde es M<br>");
            break;
        }
        case 6: {
            document.write("DNI " + dni + ": la letra que le corresponde es Y<br>");
            break;
        }
        case 7: {
            document.write("DNI " + dni + ": la letra que le corresponde es F<br>");
            break;
        }
        case 8: {
            document.write("DNI " + dni + ": la letra que le corresponde es P<br>");
            break;
        }
        case 9: {
            document.write("DNI " + dni + ": la letra que le corresponde es D<br>");
            break;
        }case 10: {
            document.write("DNI " + dni + ": la letra que le corresponde es X<br>");
            break;
        }case 11: {
            document.write("DNI " + dni + ": la letra que le corresponde es B<br>");
            break;
        }case 12: {
            document.write("DNI " + dni + ": la letra que le corresponde es N<br>");
            break;
        }case 13: {
            document.write("DNI " + dni + ": la letra que le corresponde es J<br>");
            break;
        }case 14: {
            document.write("DNI " + dni + ": la letra que le corresponde es Z<br>");
            break;
        }case 15: {
            document.write("DNI " + dni + ": la letra que le corresponde es S<br>");
            break;
        }case 16: {
            document.write("DNI " + dni + ": la letra que le corresponde es Q<br>");
            break;
        }case 17: {
            document.write("DNI " + dni + ": la letra que le corresponde es V<br>");
            break;
        }case 18: {
            document.write("DNI " + dni + ": la letra que le corresponde es H<br>");
            break;
        }
        case 19: {
            document.write("DNI " + dni + ": la letra que le corresponde es L<br>");
            break;
        }case 20: {
            document.write("DNI " + dni + ": la letra que le corresponde es C<br>");
            break;
        }case 21: {
            document.write("DNI " + dni + ": la letra que le corresponde es K<br>");
            break;
        }case 22: {
            document.write("DNI " + dni + ": la letra que le corresponde es E<br>");
            break;
        }
    }
}