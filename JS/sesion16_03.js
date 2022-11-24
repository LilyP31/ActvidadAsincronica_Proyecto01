
// EJERCICIO 03 //

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const respuesta6 = document.getElementById("respuesta6")

// Activando Button // 
const calcular3 = document.getElementById("call3");

calcular3.onclick = function(){

    let num1 = parseInt(number1.value);
    let num2 = parseInt(number2.value);

    let suma = num1 + num2;

    // Presentacion de Salida // 
    respuesta6.innerText = "La suma de ambos numeros es : " + suma.toFixed(2);
}