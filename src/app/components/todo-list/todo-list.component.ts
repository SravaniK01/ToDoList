import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/interfaces/to-do';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list:ToDo[] = [{task:'fold clothes', completed : false} , 
  {task:'put clothes in dresser', completed: true} ,
   {task:'relax' , completed: false}]
  

  constructor() { }

  ngOnInit(): void {
  

  }

  addTaskToList(todo:ToDo): void{
    console.log('length' , this.list)
    let task = this.list.filter(t=> t.task=== todo.task)
  if(task.length === 0)
    this.list.push(todo)
  }
  updateComplete(flag:any): void{
    let index = this.list.findIndex(x => x.task === flag.task);
    this.list[index].completed = true
  }
  updateRecord(flag:any): void{
    let index = this.list.findIndex(x => x.task === flag.task);
    this.list.splice(index,1)
  }

}
