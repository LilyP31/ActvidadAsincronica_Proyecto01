
const cant1 = document.getElementById("cant1");
const cant2 = document.getElementById("cant2");
const cant3 = document.getElementById("cant3");
const calcular4 = document.getElementById("call4");
const respuesta6 = document.getElementById("respuesta6");
const respuesta7 = document.getElementById("respuesta7");


calcular4.onclick = function(){

// Contabilizando cantidad de estudiantes // 
cantvarones = cant1.value;
cantmujeres = cant2.value;
estudiantes = cant3.value;

// Calcular el porcentaje //
porcenvarones = cantvarones * 100 / estudiantes;
porcenmujeres = cantmujeres * 100 / estudiantes;

// Presentacion de Salida //
respuesta6.innerText = "Porcentaje de varones es : " + porcenvarones.toFixed(2) + "%";
respuesta7.innerText = "Porcentaje de mujeres es : " + porcenmujeres.toFixed(2) + "%";

}
