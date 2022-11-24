
// EJRCICIO 2 //

 const number1 = document.getElementById("number1");
 const number2 = document.getElementById("number2");
 const number3 = document.getElementById("number3");
 const calcular2 = document.getElementById("call2");
 const respuesta2 = document.getElementById("respuesta2");
 const respuesta3 = document.getElementById("respuesta3");
 const respuesta4 = document.getElementById("respuesta4");
 
 calcular2.onclick = function() {
     let n1 = number1.value;
     let n2 = number2.value;
     let n3 = number3.value;

    let aum1 = (n1 * 0.10)/100;
    let aum2 = (n2 * 0.12)/100;
    let aum3 = (n3 * 0.15)/100;

   respuesta2.innerText = "El sueldo del Primer Empleado es: " + n1 + " mas su aumento del 10% es " + aum1.toFixed(2);
   respuesta3.innerText = "El sueldo del Primer Empleado es: " + n2 + " mas su aumento del 10% es " + aum2.toFixed(2);
   respuesta4.innerText = "El sueldo del Primer Empleado es: " + n3 + " mas su aumento del 10% es " + aum3.toFixed(2);
 }


