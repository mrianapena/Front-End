const nombre = "Mariana";
const apellido = "Pena";
let edad = 32;

function calcular() {
    event.preventDefault();
    let resultado = 0;
    let color = "";
    //Ingreso desde el formulario como STRING
    let num1 = document.getElementById('idNum1').value;
    let num2 = document.getElementById('idNum2').value;
    let operacion = parseInt(document.getElementById('idOperacion').value);
    //Parseo (pasaje/conversion) de String a Integer
    num1 = parseInt(num1);
    console.log (num1);
    num2 = parseInt(num2);
    console.log (num2);

    console.log (num1+num2);

    if (operacion === 1 ) {
        resultado = num1+num2;
        color = "pink";
    }
    if (operacion === 2 ) {
        resultado = num1-num2;
        color = "blue";
    } 
    if (operacion === 3 ) {
        resultado = num1*num2;
        color = "grey";
    } 
    if (operacion === 4 ) {
        resultado = num1/num2;
        color = "green";
    }  

    //innerHTML inserta en el archivo html pisando el contenido previo 
    document.getElementById('idResultado').innerHTML = resultado; 
}