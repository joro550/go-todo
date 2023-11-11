import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from '../../components/todo/todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
