import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './to-do.component';

describe('ToDoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture< TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  TodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
