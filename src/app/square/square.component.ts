import { Component, input, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../class/todo';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';


@Component({
  selector: 'app-square',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgTemplateOutlet, NgClass],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {

  todoValue:string = '';
 
  todoList: Todo[] = [
    {
    content: "Todo 1",
    value: false
    },
    {
      content: "Todo 2",
      value: false
      },
      
       
  ];
  finishedList: Todo[] = [

  ];

//isModalOpen: Boolean = false;

// openMOdal(){
//   this.isModalOpen = true;
// }

// closeModal(){
//   this.isModalOpen = false;
// }

isRequired:Boolean = false;
addTodo(){
  if(this.todoValue.length > 0){
  this.todoList.push({content:this.todoValue, value:false});
  this.todoValue = '';
} else {
 this.isRequired = true;
}
}

  editTodo(){

  }
  delTodo(i:number){
    this.todoList.splice(i,1);
  }

  changeTodo(i: number){
      const todoItem = this.todoList.splice(i,1);
      this.finishedList.push(todoItem[0]);
  }

  changeFinished(i: number){
    const todoItem = this.finishedList.splice(i,1);
    this.todoList.push(todoItem[0]);
  }
 
}
