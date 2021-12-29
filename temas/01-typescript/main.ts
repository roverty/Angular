class Employer {
    nombre:string
    constructor(nombre:string) {
        this.nombre = nombre
    }
    saludo(){
        console.log('Hola '+ this.nombre); 
    }
}

let em = new Employer('Rodrigo')

console.log(em);

class Manager extends Employer {
    constructor(nombre:string) {
        super(nombre)
    }
    mandar(){
        console.log('Estoy mandando :v');
    }
}

let manager = new Manager('Raul')
manager.mandar()
manager.saludo()
console.log(manager.nombre)