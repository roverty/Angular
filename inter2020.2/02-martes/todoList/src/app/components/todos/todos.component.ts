import { Component, OnInit } from '@angular/core';
import Todo from '../../models/Todo';
// import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    // Llamada al servidor
    this.todos = [
      {
        id:1,
        titulo: 'Hacer los ejercicios de JS',
        completado: false
      },
      {
        id:2,
        titulo: 'Levantarse a las 7',
        completado: true
      },
      {
        id:3,
        titulo: 'Repasar JS',
        completado: false
      }
    ]
  }

}
