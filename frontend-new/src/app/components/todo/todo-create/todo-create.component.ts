import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTodo, TodoService } from '../../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.css'
})
export class TodoCreateComponent {
  @Output() todoCreated = new EventEmitter();

  todo: CreateTodo = {
    title: '',
    description: ''
  }

  constructor(private todoService: TodoService) {
    this.resetModel();
  }

  create() {
    console.log('here')
    this.todoService.createTodo(this.todo).subscribe(() => {
      this.todoCreated.emit();
      this.resetModel();
    })
  }

  resetModel() {
    this.todo = {
      title: '',
      description: ''
    }
  }
}
