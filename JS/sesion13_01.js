
// EJERCICIO 01 //

const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const calcular = document.getElementById("call");
const respuesta1 = document.getElementById("respuesta");

calcular.onclick = function() {
    let n1 = nota1.value;
    let n2 = nota2.value;
    let n3 = nota3.value;
    let sum = (parseInt(n1)+parseInt(n2)+parseInt(n3))/3;
    respuesta1.innerHTML = `Tu promedio final  es : ${sum}`;
}