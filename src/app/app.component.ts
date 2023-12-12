import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // We will use a vaibale to store the userInput and show it on screen
  todoItem!: any;

  // This function takes input from user
  getUserInput(todoText: any) {
    if (todoText.value != '') {
      console.log(todoText.value);
      this.todoItem = todoText.value;
      todoText.value = '';
    } else {
      alert('Value cannot be empty');
    }

    // We used return false to avoid page refresh
    return false;
  }
}
