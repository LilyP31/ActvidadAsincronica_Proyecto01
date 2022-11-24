
//EJERCICIO 03 //

// Generamos variables // 


const number2 = document.getElementById("number2");

const respuesta4 = document.getElementById("respuesta4");

// Generamos la condicional If //

const calcular2 = document.getElementById("call2");

    calcular2.onclick = function(){

    num = number2.value;

    // Aplicamos condicional //
    let a = parseInt(num);
    let acumulador=1;
    for(i = 1; i<=a;i++){
        acumulador *=i;
    }
    respuesta4.innerText = "El factorial del numero " + num  + " = " + acumulador;
}