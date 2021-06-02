import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  toDos = [
    {
      titulo: 'Exemplo 1',
      conteudo: 'Lorem ipsum dot net lest.',
      finalizado: false,
    },
    {
      titulo: 'Exemplo 2',
      conteudo: 'Lorem ipsum dot net lest.',
      finalizado: true,
    },
  ];
}
