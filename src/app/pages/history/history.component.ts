import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  // DI
  todoService = inject(TodoService)

  // Variables
  todoItems = this.todoService.todoItems

  // Delete
  deleteElement(id : any){
    this.todoService.delete(id)
  }

}
