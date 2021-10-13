class Calculadora {
    constructor(){
}

sumar (num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

restar (num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

multiplicar(num1, num2){
    return parseInt(num1) * parseInt(num2);
}

dividir(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}
potenciar (num1,exp){
    let numero = num1;
    for (var i=1; i< exp; i++) {
        numero= numero * num;
    }
    return numero;
}

}

alert("Que operación deseas realizar?");
let operacion = prompt ("1: suma, 2: resta, 3: division, 4: multiplicación");

if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("Segundo número para sumar");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
 
else if (operacion == 2) {
    let numero1 = prompt("primer numero para restart");
    let numero2 = prompt("Segundo número para restar");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operacion == 3) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("Segundo número para dividir");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operacion == 4) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("Segundo número para multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else {
    alert("No se ha encontrado la operación")
}

