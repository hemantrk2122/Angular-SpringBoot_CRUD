import { Component, OnInit } from '@angular/core';
import { fade, flyInOut, pageAnimations, slideIn } from '../animations';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
  animations:[flyInOut]
})
export class TodoAppComponent implements OnInit {

  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Applly for a car insourance'
  ];
  constructor() { }

  ngOnInit(): void {
  }
  addItem(input:HTMLInputElement){
    this.items.splice(0,0,input.value);
    input.value = '';
  }
  removeItem(input:HTMLInputElement){
    const index = this.items.indexOf(input, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

}


