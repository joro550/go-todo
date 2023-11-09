import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  public getTodo() {
    return this.http.get<Respone<Todo[]>>('http://localhost:8080/todo');
  }

  public getInProgressTodo() {
    return this.http.get<Respone<Todo[]>>('http://localhost:8080/todo/in-progress');
  }

  public getCompletedTodo() {
    return this.http.get<Respone<Todo[]>>('http://localhost:8080/todo/completed');
  }

  public completeTodo(id: number) {

    return this.http.post<Pong>(`http://localhost:8080/todo/complete/${id}`, null);
  }

  public createTodo(todo: CreateTodo) {
    return this.http.post<Pong>('http://localhost:8080/todo', todo);
  }
}

export interface Pong {
  message: string
}

export interface Todo {
  id: number,
  title: string
  description: string
}

export interface CreateTodo {
  title: string
  description: string
}

export interface Respone<T> {
  data: T
}
