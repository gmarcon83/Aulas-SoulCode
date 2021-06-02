import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent {
  users = [
    { name: 'João', age: 17, isAdmin: true },
    { name: 'Renato', age: 18, isAdmin: false },
    { name: 'Flávia', age: 19, isAdmin: false },
    { name: 'Ana', age: 21, isAdmin: true },
  ];
}
