const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez","pedro","pepito","cofla","maria"],
        programacion: ["Dalto","Pedro","Juan","Pepito"],
        logica: ["Hernandez","pedro","Juan","Pepito","Cofla","Maria"],
        logica: ["Hernandez","pedro","Juan","Pepito","Cofla","Maria"],
    }

    if (materias[materia] !== undefined) {
        return materias[materia], materia;
    }
    else{
        return false
    }
}

let informacion = obtenerInformacion("programacion")[0];
if (informacion !== false) {
    document.write(`Alumnos presentes en <b> ${informacion[1]}</b> : <b stlye='color:red'> ${informacion}</b><br>`)    
}
