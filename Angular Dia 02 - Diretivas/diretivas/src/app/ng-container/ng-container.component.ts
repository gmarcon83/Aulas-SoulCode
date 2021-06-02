import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css'],
})
export class NgContainerComponent {
  users = [
    { name: 'João', age: 17, isAdmin: true },
    { name: 'Renato', age: 18, isAdmin: false },
    { name: 'Flávia', age: 19, isAdmin: false },
    { name: 'Ana', age: 21, isAdmin: true },
  ];
}
