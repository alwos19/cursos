let salario = prompt ('Ingrese salario ');

if (parseInt (salario) < 1000) {
    let nSalario = parseInt (salario) * 0.1;
    salario = parseInt (nSalario) + parseInt (salario);
    console.log(salario);
    
    alert(salario);
    
} else {
    alert (salario);
    
}

