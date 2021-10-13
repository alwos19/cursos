// function sumar (num1, num2) {
//     let res = num1 + num2;
//     document.write(res);
//     document.write("<br>")

// }

// sumar(40,40);
// sumar(30,70);

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("cual es tu edad");
    if (edad > 18){
        if (time >= 2 && time < 7 && free==false){
            alert("podes pasar gratis, por que sos la priemra persona despues de las 2 am");
            free = true;
        } else {
            alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada`);
        }
    } else{
        alert("mira papu, sos menor de edad por ende no vas a pasar, MAQUINOLA");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);

