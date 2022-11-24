/*
/// EJERCICO 01 //
*/
// Declarando variables //

const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");

const respuesta1 = document.getElementById("respuesta1");
const respuesta2 = document.getElementById("respuesta2");


// Activando el button //

const calcular = document.getElementById("call");

calcular.onclick = function(){

    trabajador = nota1.value;
    let suelBasic = nota2.value;
    let hijos = nota3.value;
    let bonificacion = 0;
    let sueldo = parseInt(suelBasic);
   

    // Se aplica condicional if // 
    if(hijos > 0){
        bonificacion = suelBasic * 0.07;
    }else{

    }
    suelTotal = sueldo + bonificacion;

    // Presentacion de Salida //
    respuesta1.innerText = "Te corresponde una Bonificacion de s/ : " + bonificacion.toFixed(2);
    respuesta2.innerText = "Tu sueldo Total es : s/ " + suelTotal;
}
// if( sueldo =="")
