import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  inpTitulo = '';
  inpDesc = '';
  toDos = [];

  criarToDo(event: any) {
    event.preventDefault();
    let toDo = {
      titulo: this.inpTitulo,
      conteudo: this.inpDesc,
      finalizado: false,
      removido: false,

      setFinalizado(finalizado: boolean) {
        this.finalizado = finalizado;
      },
      setRemovido(removido: boolean) {
        this.removido = removido;
      },
    };
    (this.toDos as object[]).push(toDo);

    this.inpTitulo = '';
    this.inpDesc = '';
  }
}
