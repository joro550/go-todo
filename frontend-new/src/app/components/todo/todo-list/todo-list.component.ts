import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop'
import { TodoCreateComponent } from '../todo-create/todo-create.component';
import { Todo, TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoCreateComponent, CdkDrag, CdkDropList, CdkDropListGroup],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []
  completedTodos: Todo[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.fetchData()
  }

  private fetchData() {
    this.todoService.getInProgressTodo()
      .subscribe(data => this.todos = data.data)
  }

  todoCreated() {
    this.fetchData()
  }
}
