// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad() {
    if (numero % 2 == 0) {
        console.log('El numero es par')
    } else {
        console.log('El numero es impar')
    }
}
// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    if (edad >= 65) {
        console.log("Eres Adulto mayor")
    } else if (edad >= 18 && edad < 65) {
        console.log("Eres un adulto")
    } else {
        console.log("Eres menor")
    }
}

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva() {
    let cuentaatras = 10
    while (cuentaatras > 0) {
        console.log(cuentaatras)
        cuentaatras = cuentaatras - 1
    }
}


//Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador = 5;
    do {
        contador = contador - 1
        console.log("Estoy aprendiendo JavaScript")
    } while (contador > 0)
}

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares() {

    for (let NumerosPares = 0; NumerosPares <= 10; NumerosPares++)
        if (NumerosPares % 2 === 0) {
            console.log(NumerosPares)
        }
    }

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for (let Cont = 0; Cont <= 10; Cont++){
        console.log(Cont)
    if (Cont === 6) {
            break;
            }
    }
}

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for (let Cont = 0; Cont <= 10; Cont++){
        if (Cont === 5) {
            continue;
        }
        console.log(Cont)
    }
}


// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    // Tu código aquí
    switch (dia) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número no válido. Debe ser del 1 al 7.";
    }
}

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(vocal) {
    switch (vocal) {
        case "a":
            
        case "e":
            
        case "i":
            
        case "o":
            
        case "u":
            console.log("Es una vocal")
            break;
    }
}

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
    function evaluarNumeros(a, b, c) {
        let resultado = "";
        if (a > 0 && b > 0 && c > 0) {
            resultado = "Todos son positivos";
        }
        else if (a < 0 && b < 0 && c < 0) {
            resultado = "Todos son negativos";
        }
        else if (a < 0 || b < 0 ||  c < 0) {
            resultado = "Al menos uno es negativo";
        }
        return resultado;
    }
    console.log(evaluarNumeros(1, 2, 3));
    console.log(evaluarNumeros(-1, 2, 3));
    console.log(evaluarNumeros(-1, -2, -3));

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};