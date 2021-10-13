class Celular {
    constructor(color, peso, tamaño, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado")
            this.encendido = false
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert("reinciando celular");
        } else {
            alert("El celular esta apagado");
        }
    }
    tomarFoto() {
        alert(`Foto tomada en una resolución de: ${this.resolucionDeCamara}`);
    }
    grabarVideo() {
        alert(`Grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo() {
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.resolucionDePantalla}</b></br>
        Resoluición de Video: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        `;
    }

    
    
}

class CelularAltaGama  extends Celular {
        constructor(color, peso, tamaño, rdc, ram, rdce){
            super(color,peso,tamaño,rdc,ram);
            this.resolucionDeCamaraExtra = rdce;
    
        }
        grabarVideoLento(){
            alert("Estas grabando en camara lenta");
        }
        reconocimientoFacial(){
            alert("Iniciando reconocieminto facial");
        }
        infoAltaGama() {
            return this.mobileInfo() + ` Resolución de Camara Extra: ${this.resolucionDeCamaraExtra}`;
        }
    }



celular1 = new Celular("rojo", "150g", "5", "hd", "2GB");
celular2 = new Celular("negro", "155g", "5.4", "full hd", "4GB");
celular3 = new Celular("blanco", "154g", "5.9", "full hd", "6GB");
celular4 = new CelularAltaGama("Azul", "150g", "7'", "4K", "8GB", "hd" );

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
    ${celular4.infoAltaGama()} <br>
`);