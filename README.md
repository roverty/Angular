# Curso Angular

```sh
Agosto de 2020
Author: rhodfra@gmail.com
```

Angular es un framework para crear aplicaciones web, esta basado en el lenguaje TypeScript, es open-source y actualmente se encuentra mantenido por un equipo de desarrollo de Google y la comunidad de contribuyentes individuales y de ciertas empresas,

No confundir Angular con AngularJS. Angular es una reescritura de un framework que se creo previamente llamado AngularJS

### ¿Cuándo utilizar Angular?

Angular se recomienda para proyectos de *mediana a grande escala* porque TypeScript tiene los los elementos para poder desarrollar projectos de dicha magnitud. Además la escala del proyecto considerar si este es:

* una **SPA** (Single Page Application). Angular fue diseñado para crear las famosas "aplicaciones de una página", dichas aplicaciones permiten tener contenido dinámico sin la necesidad de refrescar la página por lo que la buena experiencia de usuario aumenta.
* una **PWA** (Progressive Web Application)

Generalmente no se suele utilizar *Angular* En proyectos ligeros y que solo presenten contenido estático (landing pages, por ejemplo). Ten en cuenta esto o probalemente estes matando una mosca con un tanque de guerra.

Tampoco se recomienda utilizar Angular en Microservicios pues Angular se encarga por si mismo de dividir la aplicación en módulos, lo mismo que harían los microservicios pero llamandolos *servicios*.

### Documentación

SIempre que tengas un problema o quieras construir un componente de Angular y no sepas cómo, utiliza la documentación oficial, es la fuente más confiable y actualizada

* https://angular.io/docs

### Conocimientos requeridos

### Temario

1. TypeScript
   * ¿Qué es Typescript?
   * Tipos de datos
   * Programación Orientada a Objetos
   * Decoradores
2. Introducción a Angular
   * ¿Qué es angular?
   * Instalación
   * Primera aplicación
3. Componentes
   * Crear componentes
   * Ciclo de vida de los componentes
   * Renderizar información entre componentes
   * Directivas
4. Router
   * Creación de rutas
   * Navegando entre componetes
   * Modularización la aplicación
5. Comunicación entre componentes
   * Input
   * Output
   * Servicios
6. Formularios
   * Creación y manejo de formularios
   * Validaciones
   * ngModel, ngSubmit
   * Formularios reactivos
7. Servicios
   * HTTP Client
   * Peticiones HTTP
8. Deploy
   * ¿Qué es git y Github?
   * Subiendo la aplicación a Github Pages
   * Qué es Firebase?
   * Haciendo deploy en Firebase Hosting