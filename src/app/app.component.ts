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

    if(this.newTask.length <=0){
      return;
    }

    this.taskTodo.push(this.newTask);
  }

  clickCheck(){
    this.isChecked = !this.isChecked;
  }

  
}
