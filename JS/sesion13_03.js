
// EJERCICIO 03 //


const exam1 = document.getElementById("exam1");
const exam2 = document.getElementById("exam2");
const exam3 = document.getElementById("exam3");
const calcular3 = document.getElementById("call3");
const respuesta5 = document.getElementById("respuesta5");

calcular3.onclick = function() {

    let exa1 = exam1.value;
    let exa2 = exam2.value;
    let exa3 = exam3.value;

    let exm1 = (exa1 * 0.30);
    let exm2 = (exa2 * 0.30);
    let exm3 = (exa3 * 0.40);

    let notafinal = (exm1 + exm2 + exm3);
    
    // Presentacion final//
    respuesta5.innerText = "Su Calificacion Final es : " + notafinal.toFixed(2);
    
}
