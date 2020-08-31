## Ejercicios de TypeScript 


1. Este es un código creado con JavaScript, para este ejercicio es necesario pasarlo a TypeScript

```js
let nombre;
nombre = "Miguelo" ;
let edad;
edad = 30 ;
 
const PERSONAJE = {
    nombre:nombre ,
    edad:edad
}
```    

2.	Crear una clase en TypeScript, cuyo nombre sea “SuperHero” y con dos atributos, su nombre y una colección de los poderes que pueda llegar a tener


3.	Crear una clase "Cuadrado", en donde le pases como parámetros al constructor sólo números positivos, tendrá dos atributos (base y altura) y sólo si estos dos son iguales se les asignará el valor a los atributos, sino pongan uno por default para ambos. Posteriormente creen un método que calcule su área e imprima el resultado (Instancien dos objetos para probarlo

```js
class Cuadrado{
    // Your code here
}

//Probamos el caso en donde la base difiere de la altura
let cuadrado1 = new Cuadrado(5,6);
//Probamos el caso en donde son iguales esos valores
let cuadrado2 = new Cuadrado(4,4);
//Impresion del primer cálculo
console.log(cuadrado1.calculaArea());
//Impresion del segundo cálculo
console.log(cuadrado2.calculaArea());
```
4. Modificar el ejercicio anterior, de tal forma que los atributos sean privados (esto implica los setters y getters)

5.	Retomen la clase “Persona” vista en el código del lunes, posteriormente creen dos clases que hereden de persona. La primera será “Alumno”, le añadirán el numero de cuenta como atributo, tendrá un valor por default en caso de que no se especifique en la instancia de sus objetos, sobrescribirán el método “saludar” (imprimiendo su nombre completo y su numero de cuenta), harán un método que se llame “presentarExamen” que será  fácil y solo imprimirá una frase como “Me voy a preparar lo mejor posible o algo así. La segunda clase será “Profesor”, en donde añadirán su cedula profesional que, de igual manera, tendrá un valor por default en caso de que no se especifique, a este se le añadirá el método “darClase” que sólo recibirá el nombre de la materia y lo imprimirá acompañado de una frase como “Me encanta la materia  de (materia) y la daré de la mejor forma” o algo similar.  

6.	Presentar de tres formas distintas la suma de dos números, una función flecha, una función con parámetros y valor de retorno y una función sin valor de retorno y que sea anónima.