/*
En base al siguiente código: añadir una función para pasar de Farenheit a Celsius: 

*/
// EJERCICIOS 02 //

const num3 = document.getElementById("num3")
const respuesta5 = document.getElementById("respuesta5")

// Activando el button //
const calcular2 = document.getElementById("call2");

calcular2.onclick = function(){

    let grado = parseFloat(num3.value);
    let celcius = (grado-32)/1.8;

    // Presentacion de Salida //
    respuesta5.innerText = grado + " Grados Farenheight es igual a " + celcius.toFixed(2) + " Grados celcius";

}