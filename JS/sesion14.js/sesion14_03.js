// EJERCICIO 03 //

const entra1 = document.getElementById("entra1");
const entra2 = document.getElementById("entra2");
const entra3 = document.getElementById("entra3");

const calcular6 = document.getElementById("call6");
const respuesta13 = document.getElementById("respuesta13");
const respuesta14 = document.getElementById("respuesta14");
const respuesta15 = document.getElementById("respuesta15");
const respuesta16 = document.getElementById("respuesta16");



calcular6.onclick = function(){

    // Ingresar cantidades  //
    entradasG =  entra1.value;
    entradasMayor =  entra2.value;
    entradasMenor =  entra3.value;

    totalG = entradasG * 150;
    totalMayor = entradasMayor * 50;
    totalMenor = entradasMenor * 80;
    totalR = totalG + totalMayor + totalMenor;

    // Presentacion //
    respuesta13.innerText = "Total de Entrada General : " + totalG.toFixed(2);
    respuesta14.innerText = "Total de Entrada Mayores : " + totalMayor.toFixed(2);
    respuesta15.innerText = "Total de Entrada Menores : " + totalMenor.toFixed(2);
    respuesta16.innerText = "Total Recaudado : " + totalR.toFixed(2);
    
}


