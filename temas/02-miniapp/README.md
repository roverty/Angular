## Introducción a Angular

Con esta miniapp se tiene como objetivo familiarizarse con los "comandos" y componentes de Angular

**Nota: Se esta usando la viersión 10 de Angular**

En caso de no tener un proyecto de Angular, revisar la sección de [instalacion](../01-instalacion/README.md)

Todos los frameworks de JS para frontend (Angular, ReactJS, VueJS, ...) permiten modularizar y jerarquizar nuestro código por defecto. Además proveen de mecanismos para controlar el estado de los componentes de nuestra aplicación, entre otras cosas.

En particular, Angular trabaja muy arraiga con el patrón de diseño  *MVC (Modelo Vista Controlador)*, el cual en resumidas cuentas separa la lógica de la aplicación de la vista y además separa de estos dos la lógica para realizar peticiones a servicios o web o consultas al modelo de datos.

Trabajar asiduamente con el modelo MVC puede tener la ventaja de tener modularizado nuestro código pero también puede tener la desventaja de generar una jerarquía innecesariamente compleja, *¿cuál es la solución?* Debemos estar muy seguros si conviene utilizar Angular para nuestra aplicación o necesitamos algo menos potente.

### Estructura de un proyecto en Angular

### Directorios importantes

* `e2e`. Es una carpeta en donde se almacenan configuraciones para hacer pruebas *end to end* (e2e)
* `node_modules` En esta carpeta se encuentra el código de todas las dependencias de nuestro proyecto definidas en el archivo `package.json`
* ` src`. Aquí se encuentra el código fuente de nuestra aplicación
  * Dentro de `src` tenemos el directorio `assets` en el cual podremos todos los recursos gráficos para la parte estática de la página, imágenes, pequeños videos, animaciones, etc.
  * `environments`. Se definen ambientes de trabajo los distintos estados de nuestra aplicación (producción o desarrollo, generalmente)
  * `app`. Contiene los archivos que hemos creamos para los componentes de nuestra aplicación.

#### Archivos importantes de un proyecto en Angular

* `package.json`. En este archivo se incluyen las configuración del proyecto, por ejemplo, el nombre, la versión y principalmente las dependencias que este necesita. Este archivo se crea al momento de crear al proyecto y se va actualizando cada que instalamos nuevas bibilotecas a nuestro proyecto.
* `.gitignore`. En este archivo se definen los nombre de archivos o directorios que queremos que el controlador de versión GIT ignore.
* `angular.json`. Se definen configuraciones propias de angular, por ejemplo, la estructura de la app y sus configuraciones.
* `.browserlistrc`. Define una lista de navegadores que el autoprefix ajustará para darles soporte CSS.
* ` tsconfig.json`. Define la configuración de la compilación de archivos TypeScript
* `tsconfig.app.json`. Se utiliza para escribir las configuraciones especifícas de la aplicación. Este archivo sobreescribe las configuraciones de `tsconfig.json`
* `tsconfig.spec.json`. Define las configuraciones para realizar *pruebas unitarias*, sobreescribe las configuraciones de `tsconfig.json`
* `tslint.json`. Es el archivo de configuración de reglas que puede usar cualquier *linter* para comprobar que el archivo no tiene errores, bugs, errores de estilo, construcciones sospechosas, etc.
* `karma.conf.js`.  Archivo de configuración para realizar pruebas de ejecución.

*Archivos que se encuentrar en `src`*

* `favicon.icon`. Este archivo especifica un pequeño icono que aparece junto a la pestaña del navegador de un sitio web.
* `index.html`. Este es el archivo de entrada que contiene el contenedor de alto nivel para la aplicación angular.
* `polyfills.ts`. Este archivo es un conjunto de código que se puede utilizar para proporcionar compatibilidad con navegadores antiguos. El código de Angular 7 está escrito principalmente en las especificaciones del lenguaje ES6.
* `test.ts`. Este es el archivo principal que la herramienta `ng` de angular CLI utiliza para transversar todas las pruebas unitarias de la aplicación y ejecutarlas.
* `style.css`. Es el archivo de estilos a nivel global de la aplicación.
* `mains.ts`. Este es el primer archivo `.ts` que se ejecutará. Este archivo arranca (inicia) el AppModule desde app.module.ts y se puede usar para definir configuraciones globales.

Angular trabaja con componentes y módulos, los cuales se explicarán *a posteriori*, por defecto tenemos un componente llamado *app*, por lo cual se explicará la estructura de su archivos.

* `app.component.css`. Define los estilos del componente
* `app.component.html`. Contiene las estructuras `html` necesarias para nuestro componente. Este archivo es requerido por angular la inyectarle los datos provenientes de nuestro modelo de datos o *web service*.
* `app.component.spec.ts`. Este archivo es un archivo de prueba unitario relacionado con el componente de la aplicación.
* `app.component.ts`.  Este es el archivo `ts` más importante que incluye la lógica de vista detrás del componente.

### Comandos CLI de Angular 

* CLI significa Commands Line Interface

Angular define muchos comandos de línea comandos muy utiles, entre sus principales funciones están:

* Agregar librerías
* Generar componentes
* Arrancar el servidor de pruebas de *ng*, etc.

Para tirar comandos de angular necesitamos una terminal abierta en el directorio correspondiente al proyecto en donde estamos trabajando. Algunos comandos utiles para un usuario sin previo conocimiento del manejo de un terminal son:

* ls
* pwd
* cd / dir

La sintaxis para ejecutar comandos de angular, de manera general es:

```sh
ng <comando> [opciones]
```

Aunque puede haber variaciones.

<!-- Describir la diferencia entre módulos y componentes, agregar imágenes -->



### Referencias

* [JavaTpoint](https://www.javatpoint.com/angular-7-files-explanation)

