import { Component, EventEmitter, Output } from '@angular/core';
import { CreateTodo, TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Output() toDoCreated = new EventEmitter();

  model:CreateTodo = {
    title:"",
    description: ""
  }

  description:string = "";

  constructor(private todoService:TodoService) {}

  public addTodo(){
    this.todoService.createTodo(this.model).subscribe(data => {
      this.toDoCreated.emit(data);
    })
  }
}
