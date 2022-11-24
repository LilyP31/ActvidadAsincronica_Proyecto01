// EJERCICIO 02 //

const monto1 = document.getElementById("monto1");

const calcular5 = document.getElementById("call5");
const respuesta8 = document.getElementById("respuesta8");
const respuesta9 = document.getElementById("respuesta9");
const respuesta10 = document.getElementById("respuesta10");
const respuesta11 = document.getElementById("respuesta11");
const respuesta12 = document.getElementById("respuesta12");




calcular5.onclick = function(){

    // Leer los montos // 
    let monto = monto1.value;

    aveA = monto * 0.35;
    aveB = monto * 0.25;
    aveC = monto * 0.10;
    aveD = monto * 0.15;
    aveE = (monto
         - aveA - aveB - aveC -aveD);

    // Presentacion de la Salida //

    respuesta8.innerText = "La avenida la mar recibira : " + "$/." + aveA.toFixed(2);
    respuesta9.innerText = "La avenida Abancay recibira : " + "$/." + aveB.toFixed(2);
    respuesta10.innerText = "La avenida 28 de Julio recibira : " + "$/." + aveC.toFixed(2);
    respuesta11.innerText = "La avenida Aviacion recibira : " + "$/." + aveD.toFixed(2);
    respuesta12.innerText = "La avenida Tacna recibira : " + "$/." + aveE.toFixed(2);

}