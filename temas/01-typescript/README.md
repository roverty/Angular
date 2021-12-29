# TypeScript

TypeScript es un lenguaje de programación de código abierto mantenido por Microsoft que se compila a lenguaje Javascript.

**Características**

* Tipado estático opcional 
* Inferencia de tipos
  * Evita errores en tiempo de ejecución
* Soporte para IDEs; refactors y debuging tools

Lo primero que necesitamos hacer es instalar *Typescript*, para lo cual haremos lo siguiente:

```sh
npm install -g typescript
```

Para ver la versión de typescript, esto nos permitirá verificar si se instalo correctamente.

```sh
tsc -v
```

Hagamos una prueba rápida para familiarizarnos con el ambiente.

Creemos el archivo  `main.ts` en la carpeta que queramos, siempre en cuando sepamos navegar hacia ella utilizando la terminal.

El archivo debe contener lo siguiente:

```ts
let hello = 'hello world'
console.log(hello)
```

Para compilarlo escribimos en un terminal lo siguiente

```sh
tsc main.ts
```

Si no hay errores nos generará un archivo con extensión `.js`, el cuál podemos ejecutar con ayuda de node:

```sh
node main.js
```

Ahora, esto puede ser tardado por lo cual podemos monitorear el archivo `main.ts` y hacer que este se compile cada que se detecten cambios en el, para ello:

```sh
tsc main --watch
```

### Declaración de variables

Para declarar variables tenemos dos palabras reservadas

* `let`
* `const`

Si utilizamos `const` la variable debe ser inicializada al mismo tiempo que es declarada, como se sigue en el ejemplo de abajo

```ts
const pi=3.14; // Bien
const pi; // mal
```

### Tipos de variables

Analicemos los 3 tipos de datos primitivos más importantes

* Boolean
* Number
* String

```ts
let isLog: boolean = true;
let total: number = 12;
let nombre: string = 'Rodrigo';
```

Gracias tener tipos de datos podemos tener código más conciso y con menos errores porque si una variable ya fue definida como `number` no se le podrá asignar un `string`, por poner un ejemplo.

Además, podemos usar `intelligence-sense`, en nuestro editor de texto, es decir, la capacidad para que del editor para que este nos ayude con nombre de métodos o propiedades de ciertas variables.

Otros tipos

* null
* undefined

Sin embargo por si solos no tienen sentido, por lo que el siguiente ejemplo ilustra su utilidad:

```ts
let numero:number = null;
let nombre:string = undefined;
```

**Areglos**

```ts
let listaNum: number[] = [1,2,3];
let lstaNumeros: Array<number> = [1,2,3];
```

**Tuplas**

```ts
let persona:[string,number] =['Rod',22];
```

**Enum**

```ts
enum colores {Rojo,Verde,Azul=2}
let c:colores = colores.Rojo
console.log(c)
```

**Tipo Any**

```ts
let valor:any = 10;
valor = true;
valor = 'Rod'
```

**Tipo unknown**

```ts
let variable:unknown = 10;
(variable as string).toUpperCase(); // Check this 
```

**Inferencia de tipos**

```ts
let edad = 20; // Infiere tipo numer
edad = true // Error
```

**Multipo de variables**

```ts
let estaLogeado : number | boolean;
estaLogeado = 1 // Bien
estaLogeado = true // Bien
// Diferencia con Any
// Multitple restringue al num de tipos que le indiquemos.
```

### Funciones

```ts
function sumar(numero1:number,numero2:number){
    return numero1 + numero2
}

// Se especifica tipo de retorno de la fn
function sumar(numero1:number,numero2:number):number{
    return numero1 + numero2
}

// Parametros opcionales
function sumar(numero1:number,numero2?:number):number{
    if(numero2){
        return numero1 + numero2
    }else
    	return numero1
}
sumar(5)

// Parametros por defecto
// De hecho los parametros opcionales solo son parametros por defecto con el valor undefined
function sumar(numero1:number,numero2:number=3):number{
    if(numero2){
        return numero1 + numero2
    }else
    	return numero1
}
sumar(5)
```

**Interfaces**

Imaginemos que queremos pasar como parámetro un objeto, cómo el código que tenemos a continuación:

```ts
function nombreCompleto(persona:{nombre:string,apellido:string}) {
    console.log(`${persona.nombre} ${persona.apellido}`);
    
}

let persona1 = {
    nombre:'Rodrigo',
    apellido:'Francisco'
}

nombreCompleto(persona1)
```

Pero, ¿qué pasa si tenemos muchisismas propiedades? Lo solucionamos creando una interfaz

```ts
interface Persona {
    nombre:string,
    apellido:string,
    edad?:number // Las propiedades pueden ser opcionales
}

function nombreCompleto(persona:Persona) {
    console.log(`${persona.nombre} ${persona.apellido}`);
    
}

let persona1 = {
    nombre:'Rodrigo',
    apellido:'Francisco'
}

nombreCompleto(persona1)
```

### Clases

```ts
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
```

**Extends**

```ts
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
```





















