import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoistAddComponent } from './todoist-add.component';

describe('TodoistAddComponent', () => {
  let component: TodoistAddComponent;
  let fixture: ComponentFixture<TodoistAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoistAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
