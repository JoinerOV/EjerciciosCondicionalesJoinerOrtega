// Ejercicio 1
let numero1 = 20;
let numero2 = 25;  

if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo.");
} 
else {
    console.log("El primer número no es mayor que el segundo.");
}
// Ejercicio 2
let numero3 = 5;
let numero4 = 5;

if (numero3 === numero4) {
    console.log("Los números son iguales.");
} else {
    console.log("Los números son diferentes.");
}
// // Ejercicio 3
let numero5 = 50;
let numero6 = 30;

if (numero5 > numero6) {
    console.log("El primer número es el más grande.");
} else if (numero5 < numero6) {
    console.log("El segundo número es el más grande.");
} else {
    console.log("Los números son iguales.");
}
// // Ejercicio 4
// let num1 = parseInt(prompt("Introduce el primer número:"));
// let num2 = parseInt(prompt("Introduce el segundo número:"));
// let num3 = parseInt(prompt("Introduce el tercer número:"));

// if (num1 < num2 && num1 < num3) {
//     console.log("El primer número es el más chico.");
// } else if (num2 < num1 && num2 < num3) {
//     console.log("El segundo número es el más chico.");
// } else if (num3 < num1 && num3 < num2) {
//     console.log("El tercer número es el más chico.");
// } 

// // Ejercicio 5
// // Ingreso de datos para la persona 1
// let nombre1 = prompt("Ingrese el nombre de la primera persona:");
// let edad1 = parseInt(prompt("Ingrese la edad de la primera persona:"));
// let altura1 = parseInt(prompt("Ingrese la altura (en cm) de la primera persona:"));

// // Ingreso de datos para la persona 2
// let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
// let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona:"));
// let altura2 = parseInt(prompt("Ingrese la altura (en cm) de la segunda persona:"));

// // Comparación para determinar la persona más alta
// let personaMasAlta;
// if (altura1 > altura2) {
//     personaMasAlta = nombre1;
// } else if (altura2 > altura1) {
//     personaMasAlta = nombre2;
// } else {
//     personaMasAlta = "Ambas personas tienen la misma altura.";
// }

// // Comparación para determinar la persona de mayor edad
// let personaMayorEdad;
// if (edad1 > edad2) {
//     personaMayorEdad = nombre1;
// } else if (edad2 > edad1) {
//     personaMayorEdad = nombre2;
// } else {
//     personaMayorEdad = "Ambas personas tienen la misma edad.";
// }

// // Resultados
// console.log("La persona más alta es: " + personaMasAlta);
// console.log("La persona de mayor edad es: " + personaMayorEdad);

// // Ejercicio 6
// // Ingreso de datos por prompt
// let nombre = prompt("Ingrese su nombre:");
// let edad = parseInt(prompt("Ingrese su edad:"));
// let altura = parseInt(prompt("Ingrese su altura en cm:"));
// let vision = parseInt(prompt("Ingrese su visión (de 0 a 10):"));

// // Verificación de condiciones para determinar si puede conducir
// if (edad >= 18 && altura > 150 && vision >= 8) {
//     console.log(nombre + ", usted está capacitado para conducir.");
// } else {
//     console.log(nombre + ", usted no cumple con los requisitos para conducir.");
// }

// // Ejercicio 7
// // Ingreso de datos 
// let nombree = prompt("Ingrese su nombre:");
// let pase = prompt("Ingrese su tipo de pase (vip o normal):");
// let tieneEntrada = prompt("¿Posee entrada? (si/no)");

// // Verificación de condiciones
// if (nombree === "mi nombre" || pase === "vip") {
//     console.log("¡Bienvenido!");

//     if (tieneEntrada === "si") {
//         let usarEntrada = prompt("¿Desea utilizar su entrada? (si/no)");
//         if (usarEntrada === "si") {
//             console.log("¡Bienvenido!");
//         } else {
//             console.log("¡Bienvenido!");
//         }
//     } else {
//         console.log("¡Bienvenido!");
//     }
// } else {
//     let comprarEntrada = prompt("¿Desea comprar una entrada? (si/no)");

//     if (comprarEntrada === "si") {
//         let dineroDisponible = parseInt(prompt("Ingrese el dinero disponible:"));
//         if (dineroDisponible >= 1000) {
//             console.log("Venta de entrada realizada. ¡Bienvenido!");
//         } else {
//             console.log("No cuenta con suficiente dinero para comprar la entrada. Rechazo de venta.");
//         }
//     } else {
//         console.log("¡Hasta luego!");
//     }
// }

// // Ejercicio 8
// Generar un número aleatorio entre 1 y 10 
// let numeroIncognita = 7;
// // Intento 1
// let numeroIngresado1 = parseInt(prompt("Intento 1: Ingrese un número del 1 al 10"));
// if (numeroIngresado1 === numeroIncognita) {
//     console.log("¡Ganaste, haz adivinado el número!");
// } else if (numeroIngresado1 > numeroIncognita) {
//     console.log("El número ingresado es mayor, vuelve a intentarlo.");
// } else {
//     console.log("El número ingresado es menor, vuelve a intentarlo.");
// }

// // Intento 2 
// if (numeroIngresado1 !== numeroIncognita) {
//     let numeroIngresado2 = parseInt(prompt("Intento 2: Ingrese un número del 1 al 10"));
//     if (numeroIngresado2 === numeroIncognita) {
//         console.log("¡Ganaste, haz adivinado el número!");
//     } else if (numeroIngresado2 > numeroIncognita) {
//         console.log("El número ingresado es mayor, vuelve a intentarlo.");
//     } else {
//         console.log("El número ingresado es menor, vuelve a intentarlo.");
//     }

//     // Intento 3 
//     if (numeroIngresado2 !== numeroIncognita) {
//         let numeroIngresado3 = parseInt(prompt("Intento 3: Ingrese un número del 1 al 10"));
//         if (numeroIngresado3 === numeroIncognita) {
//             console.log("¡Ganaste, haz adivinado el número!");
//         } else if (numeroIngresado3 > numeroIncognita) {
//             console.log("El número ingresado es mayor, vuelve a intentarlo.");
//         } else {
//             console.log("El número ingresado es menor, vuelve a intentarlo.");
//         }

//         // Si no se adivinó después del tercer intento
//         if (numeroIngresado3 !== numeroIncognita) {
//             console.log("Se acabaron los intentos. El número era: " + numeroIncognita);
//         }
//     }
// }

// Ejercicio 9
// Ingreso de la edad por prompt
// let age = parseInt(prompt("Ingrese su edad:"));

// // Verificación y categorización de la edad
// if (age >= 0 && age <= 12) {
//     console.log("Eres un infante.");
// } else if (age >= 13 && age <= 18) {
//     console.log("Eres un adolescente.");
// } else if (age >= 19 && age <= 45) {
//     console.log("Eres un mayor joven.");
// } else if (age > 45 && age <= 100) {
//     console.log("Eres un anciano.");
// } else if (age > 100) {
//     let confirmacion = prompt("¿Realmente tienes " + age + " años? (si/no)");
//     if (confirmacion === "si") {
//         console.log("Respetamos tu respuesta.");
//     } else {
//         console.log("Por favor, ingresa una edad válida.");
//     }
// } else {
//     console.log("Por favor, ingresa una edad válida.");
// }

// // // Ejercicio 10
// // Ingreso de jugadas por prompt
// let jugador1 = prompt("Jugador 1: Ingrese PIEDRA, PAPEL o TIJERAS");
// let jugador2 = prompt("Jugador 2: Ingrese PIEDRA, PAPEL o TIJERAS");

// // Verificación y determinación del ganador
// if ((jugador1 === "PIEDRA" || jugador1 === "PAPEL" || jugador1 === "TIJERAS") &&
//     (jugador2 === "PIEDRA" || jugador2 === "PAPEL" || jugador2 === "TIJERAS")) {
    
//     if (jugador1 === jugador2) {
//         console.log("¡Ha habido un empate!");
//     } else if (
//         (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
//         (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
//         (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
//     ) {
//         console.log("¡Jugador 1 ha ganado!");
//     } else {
//         console.log("¡Jugador 2 ha ganado!");
//     }

// } else {
//     console.log("Uno de los jugadores ha hecho trampa. Ingrese solo PIEDRA, PAPEL o TIJERAS.");
// }

// // Ejercicio 11
// // Ingreso del color por prompt
// let color = prompt("Ingrese un color (Blanco, Negro, Verde, Azul, Amarillo, Rojo, Marron):");

// // Mostrar mensaje según el color ingresado
// switch (color) {
//     case "blanco":
//     case "negro":
//         console.log("Falta de color");
//         break;
//     case "verde":
//         console.log("El color de la naturaleza");
//         break;
//     case "azul":
//         console.log("El color del agua");
//         break;
//     case "amarillo":
//         console.log("El color del sol");
//         break;
//     case "rojo":
//         console.log("El color del fuego");
//         break;
//     case "marron":
//         console.log("El color de la tierra");
//         break;
//     default:
//         console.log("Excelente elección, no lo teníamos pensado.");
// }

// //Ejercicio 12
// // Ingreso de valores y operación por prompt
// let valor1 = parseInt(prompt("Ingrese el primer valor numérico:"));
// let valor2 = parseInt(prompt("Ingrese el segundo valor numérico:"));
// let operacion = prompt("Ingrese la operación deseada (suma, resta, multiplicacion, division):");

// // Realización de la operación y mostrar resultado
// switch (operacion) {
//     case "suma":
//         console.log("La suma de " + valor1 + " y " + valor2 + " es: " + (valor1 + valor2));
//         break;
//     case "resta":
//         console.log("La resta de " + valor1 + " y " + valor2 + " es: " + (valor1 - valor2));
//         break;
//     case "multiplicacion":
//         console.log("La multiplicacion de " + valor1 + " y " + valor2 + " es: " + (valor1 * valor2));
//         break;
//     case "division":
//         if (valor2 !== 0) {
//             console.log("La division de " + valor1 + " entre " + valor2 + " es: " + (valor1 / valor2));
//         } else {
//             console.log("ERROR: No se puede dividir por cero.");
//         }
//         break;
//     default:
//         console.log("Operación no válida. Ingrese suma, resta, multiplicación o división.");
// }

// // Ejercicio 13
// // Ingreso de datos del DNI por prompt
// let nombree = prompt("Ingrese su nombre:");
// let apellidoo = prompt("Ingrese su apellido:");
// let dni = prompt("Ingrese su número de DNI:");
// let fechaNacimiento = prompt("Ingrese su fecha de nacimiento:");
// let lugarNacimiento = prompt("Ingrese su lugar de nacimiento:");

// // Mostrar los datos ingresados y confirmación
// console.log("Datos ingresados:");
// console.log("Nombre: " + nombree);
// console.log("Apellido: " + apellidoo);
// console.log("DNI: " + dni);
// console.log("Fecha de Nacimiento: " + fechaNacimiento);
// console.log("Lugar de Nacimiento: " + lugarNacimiento);

// // Confirmación de los datos ingresados
// let confirmacion = prompt("¿Los datos ingresados son correctos? (si/no)");

// // Procesamiento de la confirmación
// if (confirmacion === "si" || confirmacion === "Si" || confirmacion === "SI" || confirmacion === "sI") {
//     // Crear objeto dni con los datos ingresados
//     let dniObject = {
//         nombre: nombree,
//         apellido: apellidoo,
//         dni: dni,
//         fechaNacimiento: fechaNacimiento,
//         lugarNacimiento: lugarNacimiento
//     };

//     // Mostrar objeto dni utilizando console.table()
//     console.log("Registro exitoso. Datos del DNI:");
//     console.table(dniObject);
//     console.log("¡Registro exitoso!");

// } else {
//     console.log("Vuelva a intentarlo en 1 mes.");
// }


