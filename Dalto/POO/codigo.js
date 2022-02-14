class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
    }

    verInfo(){
        document.write(this.info + "<br>");
    }
}

class Perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        alert("!WAW!");
    }
}

let perro = new Perro("perro",5,"marron","doberman ");
let gato = new animal("gato",2,"blanco");
let cerdo = new animal("cerdo",2,"rosado");

// document.write(perro.info+ "<br>");
// document.write(gato.info + "<br>");
// document.write(cerdo.info + "<br>");

perro.ladrar();
// perro.verInfo();
gato.verInfo();
cerdo.verInfo();