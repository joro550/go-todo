import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/todo.service';
import {NgFor} from '@angular/common';
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { TodoModalViewComponent } from '../todo-modal-view/todo-modal-view.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, NgFor, CdkDrag, TodoModalViewComponent ],
})
export class ListComponent implements OnInit {
  inProgressTodo : Todo[] = [];
  completedTodo : Todo[] = [];

  shouldShow:boolean = false;
  viewingItem:Todo  = {id:0, title:'', description:'' }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchData()
  }

  showModal(model:Todo){
    this.viewingItem = model
    this.shouldShow = true;
  }

  closeModal(){

  }

  private fetchData() {
    this.inProgressTodo = [
      {id: 1, title:'Title', description: 'description' },
      {id: 1, title:'Title 2', description: 'description' }
    ]
    // this.todoService.getCompletedTodo().subscribe(respone => {
    //   this.completedTodo = respone.data
    // })
    // this.todoService.getInProgressTodo().subscribe(respone => {
    //   this.inProgressTodo = respone.data
    // })
  }

  drop(event: CdkDragDrop<Todo[]>) {
    // var data:Todo = event.previousContainer.data[event.previousIndex];

    // this.todoService.completeTodo(data.id).subscribe(() => {
    //   this.fetchData()

    // })
  }

}

