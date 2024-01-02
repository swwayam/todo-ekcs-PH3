import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // Array to store todoItems
  todoItems : any = [];

  constructor() {}

  // to restrict user from accessing or modifying data we provide them with functionality
  add(todo: any) {
    this.todoItems.push(todo);
    console.log(this.todoItems);
  }

  delete(id: any) {
    this.todoItems = this.todoItems.filter((el: any) => el.id != id);
    console.log('Element deleted', id);
  }
}
