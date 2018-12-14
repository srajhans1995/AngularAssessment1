import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos;
  @Output() addNewToDoButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNewButtonClick() {
    this.addNewToDoButtonClicked.emit();
  }


  deleteFieldValue(todo) {
    this.todos = this.todos.filter(t => t.name !== todo.name);
    }
  

  onEditButtonClick() {
    this.addNewToDoButtonClicked.emit();
  }

}
