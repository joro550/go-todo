import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
  <app-todo-add (toDoCreated)='todoCreated()'></app-todo-add>
  <app-todo-list></app-todo-list>

`
})
export class HomeComponent implements OnInit {
  // todos : Todo[] = [];

  // constructor(private todoService : TodoService) {}

  ngOnInit(): void {
    // this.getToDos()
  }

  public todoCreated() {
    // this.getToDos()
  }

  public getToDos() {
    // this.todoService.getTodo().subscribe(respone => {
    //   this.todos = respone.data
    // })
  }
}
