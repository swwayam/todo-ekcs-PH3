import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  todoService = inject(TodoService)

  // Lets have a temp id
  id = 0;

  // We will use a vaibale to store the userInput and show it on screen

  // : any[] means that we can put any data type inside the arrays.
  todoItems = this.todoService.todoItems

  flag: any = false;

  // This function takes input from user
  getUserInput(todoText: any) {    
    this.flag = false;
    if (todoText.value != '') {
      this.todoService.add({
        id: this.id,
        todo: todoText.value,
      });
      this.id++;
      todoText.value = '';
    } else {
      alert('Value cannot be empty');
    }

    // We used return false to avoid page refresh
    return false;
  }

  deleteElement(id: any) {
    // Old version
    // this.todoItems = this.todoItems.filter((el) => {
    //   if(el.id != id){
    //     return el
    //   }
    // })
    this.flag = false
    this.todoService.delete(id)
  
  }

}
