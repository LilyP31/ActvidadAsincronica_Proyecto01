
// EJERCICIOS 01 //

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")

const respuesta1 = document.getElementById("respuesta1")
const respuesta2 = document.getElementById("respuesta2")
const respuesta3 = document.getElementById("respuesta3")
const respuesta4 = document.getElementById("respuesta4")

// Activando el button //
const calcular = document.getElementById("call");

calcular.onclick = function(){

      let number1 = parseInt(num1.value);
      let number2 = parseInt(num2.value);
        
        
        let suma = number1 + number2;
        let resta = number1 - number2;
        let multi = number1 * number2;
        let pot = Math.pow(number1,number2);
  
 
    // Presentacion de Salida //
    respuesta1.innerText = "La suma es : " + suma;
    respuesta2.innerText = "La resta es : " + resta;
    respuesta3.innerText = "La multiplicacion es : " + multi;
    respuesta4.innerText = "La potencia es : " + pot.toFixed(2);
}