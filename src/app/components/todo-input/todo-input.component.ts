import { Component, OnInit } from '@angular/core';
// import { TodoService } from '../../services/todo.service';

// TodoService
@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  public todoText:'';
  public todoList = [];
public edit:boolean= true;
public editsTodo:boolean=true;
public todoSave:boolean=false;
  constructor() { 
    // this.todoText='';
  }

  ngOnInit() {
  }

  addTodo(){
  if(this.todoText){
    this.todoList.push(this.todoText)
  }
  else {
    return false
  }
this.todoText = '';
  }

  editTodo(){
this.edit=false;
this.editsTodo=false;
this.todoSave=true;
  }
  saveTodo(){
    this.edit=true;
    this.editsTodo=true;
    this.todoSave=false;
  }
}
