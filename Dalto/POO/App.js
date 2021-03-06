class App {
    constructor(descargas, puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente")
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desinstalada correctamente")
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App Cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
    
    
}

app = new App ("16.000", "4.5", "3.1MB");
app2 = new App ("1.000", "3.8", "3.2MB");
app3 = new App ("6.000", "4", "3.3MB");
app4 = new App ("23.000", "4.1", "3.4MB");
app5 = new App ("900", "4.2", "3.5MB");
app6 = new App ("17", "4.3", "3.6MB");
app7 = new App ("42.981", "4.4", "3.7MB");

// document.write(`
// ${app.appInfo()} <br>
// ${app2.appInfo()} <br>
// ${app3.appInfo()} <br>
// ${app4.appInfo()} <br>
// ${app5.appInfo()} <br>
// ${app6.appInfo()} <br>
// ${app7.appInfo()} <br>
// `);

// app.instalar()
app.abrir()
app.cerrar()
// app.desinstalar()