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
potenciar (num,exp){
    let numero = num;
    for (var i=1; i< exp; i++) {
        numero = numero * num;
    }
    return numero;
}

raizCuadrada(num){
    return Math.sqrt(num);
}
raizCubica(num){
    return Math.cbrt(num)
}

}

const calculadora = new Calculadora();

alert("Que operación deseas realizar?");
let operacion = prompt ("1: suma, 2: resta, 3: division, 4: multiplicación, 5: Potenciar, 6: Raiz cuadrada, 7: Raiz Cubica");

if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("Segundo número para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
 
else if (operacion == 2) {
    let numero1 = prompt("primer numero para restart");
    let numero2 = prompt("Segundo número para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operacion == 3) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("Segundo número para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operacion == 4) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("Segundo número para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operacion == 5) {
    let numero1 = prompt("número a potenciar");
    let numero2 = prompt("exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operacion == 6) {
    let numero = prompt("Conocer la raiz cuadrada");
    resultado = calculadora.raizCuadrada(numero);
    alert(`tu resultado es ${resultado}`);
}

else if (operacion == 7) {
    let numero = prompt("conocer la raiz cubica");
    resultado = calculadora.raizCubica(numero);
    alert(`tu resultado es ${resultado}`);
}

else {
    alert("No se ha encontrado la operación")
}

