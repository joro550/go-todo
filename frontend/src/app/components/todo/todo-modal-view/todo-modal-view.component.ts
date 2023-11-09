import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-modal-view',
  templateUrl: './todo-modal-view.component.html',
  styleUrls: ['./todo-modal-view.component.css'],
  standalone: true
})
export class TodoModalViewComponent {
  @Input() item!:Todo;
  @Input() shouldShow!:boolean;

  @Output() shouldShowChange = new EventEmitter<boolean>();

  close() {
    this.shouldShow = false;
    this.shouldShowChange.emit(false);
  }

}
