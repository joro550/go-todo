import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoModalViewComponent } from './todo-modal-view.component';

describe('TodoModalViewComponent', () => {
  let component: TodoModalViewComponent;
  let fixture: ComponentFixture<TodoModalViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoModalViewComponent]
    });
    fixture = TestBed.createComponent(TodoModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
