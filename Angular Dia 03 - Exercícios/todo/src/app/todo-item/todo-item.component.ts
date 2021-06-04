import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() toDo = {
    titulo: '',
    conteudo: '',
    finalizado: false,
    removido: false,

    setFinalizado(finalizado: boolean) {
      this.finalizado = finalizado;
    },
    setRemovido(removido: boolean) {
      this.removido = removido;
    },
  };
}
