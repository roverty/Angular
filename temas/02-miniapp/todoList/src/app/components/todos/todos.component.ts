import { Component, OnInit } from '@angular/core';
import Todo from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id:1,
        titulo:'Hacer los ejercicios de JS',
        completado: true
      },
      {
        id:2,
        titulo:'Instalar npm',
        completado: false
      },
      {
        id:3,
        titulo:'Inscribirse a Laravel',
        completado: 0
      },
    ]
  }

  borrarTodo(todo:Todo){
    console.log('borrame :(');
    this.todos = this.todos.filter(t => t.id!== todo.id) 
  }

  agregarTodo(todo:Todo){
    console.log("LO");
    
    this.todos.push(todo)
  }

}
