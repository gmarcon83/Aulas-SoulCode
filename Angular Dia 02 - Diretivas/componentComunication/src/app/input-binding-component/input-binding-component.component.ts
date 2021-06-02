import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding-component',
  templateUrl: './input-binding-component.component.html',
  styleUrls: ['./input-binding-component.component.css'],
})
export class InputBindingComponentComponent {
  @Input()
  title: string = '';

  @Input('myName')
  name: string = '';
}
