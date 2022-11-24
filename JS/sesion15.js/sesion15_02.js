
// EJERCICIO 02 //

//Declaramos variables // 


const number1 = document.getElementById("number1");
 const respuesta3 = document.getElementById("respuesta3");

 // Activando el button //

 const calcular1 = document.getElementById("call1");

    calcular1.onclick = function(){

        num = number1.value;
        resultado = 0;

        // Aplicando condicional if //
        
        if(num > 500) {
            resultado = num * 0.18;
            // Presentamos  la Salida // 
            respuesta3.innerText = "El 18% del numero es igual a : " + resultado; 
        } else{
            respuesta3.innerText ="El numero es : " + num;
        }
        
    }
