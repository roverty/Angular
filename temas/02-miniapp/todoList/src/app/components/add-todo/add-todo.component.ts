import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() agregarTodo: EventEmitter<any> = new EventEmitter();

  titulo:string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      id: 10,
      titulo:this.titulo,
      completado: false
    }
    this.agregarTodo.emit(todo)
    console.log("LO");
  }
}
