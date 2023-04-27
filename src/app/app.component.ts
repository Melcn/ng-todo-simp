import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public newTask : String = '';
  public taskTodo :  String[] = [];
  public isChecked: boolean = false;


  addTask(){
  this.taskTodo.push(this.newTask);
  }

  clickCheck(){
    this.isChecked = !this.isChecked;
  }

  
}
