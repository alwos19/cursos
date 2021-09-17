let cantidad = prompt("Cuantos alumnos son");
let alumnosTotales= [];

for (i=0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre,p)=>{
    let prsencia = prompt(nombre);
    if (precencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}
