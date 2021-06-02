import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  toDos = [];

  criarToDo(event: any) {
    let formTitulo = document.getElementById('titulo') as HTMLInputElement;
    let formDesc = document.getElementById('desc') as HTMLInputElement;

    if (formTitulo.value === '' || formDesc.value === '') {
      alert('Não deixe campos vazios.');
      return;
    }

    event.preventDefault();
    let toDo = {
      titulo: formTitulo.value,
      conteudo: formDesc.value,
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

    formTitulo.value = '';
    formDesc.value = '';
  }
}
