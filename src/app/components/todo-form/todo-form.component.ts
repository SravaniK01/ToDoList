import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/interfaces/to-do';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() save = new EventEmitter<ToDo>()
  task1:string = ''
  todo1:ToDo = {
    task: '' ,
    completed: false
  }
  constructor() { }

  ngOnInit(): void {

  }
  addTask():any {
    console.log("in add")
     
    this.save.emit({
      task: this.task1,
      completed: false
    })

     }


}
