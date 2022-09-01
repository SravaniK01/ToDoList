import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ToDo } from 'src/app/interfaces/to-do';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:ToDo = {task:'' , completed: false} 
  @Output() complete = new EventEmitter<any>()
  @Output() remove = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  completeTask(l:ToDo) : void{

    this.complete.emit(l)
    console.log(l)
   
  }
  removeTask(l:ToDo):void{
    this.remove.emit(l)

  }

  

}
