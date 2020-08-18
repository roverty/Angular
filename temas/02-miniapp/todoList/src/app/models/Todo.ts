export default class Todo {
    id:number;
    titulo:string;
    completado: number | boolean;

    constructor(
        id?:number,
        titulo?:string,
        completado?:number|boolean
    ) {
        if (id && titulo && completado) {
            this.id = id;
            this.titulo = titulo;
            this.completado = completado
        }
    }
}