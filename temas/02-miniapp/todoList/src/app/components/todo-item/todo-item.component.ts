import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import Todo from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoProp: Todo;
  @Output() borrarTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clasesCSS(){
    let clases = {
      todo: true,
      'is-complete': this.todoProp.completado === true
    }
    return clases;
  }

  toggle(todo:Todo){
    this.todoProp.completado = !todo.completado
    // Actualizar en el servidor
  }
  borrarItem(todo:Todo){
    console.log('Se quiere borrar el item');
    this.borrarTodo.emit(todo)
  }

}
