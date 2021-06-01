import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
})
export class CustomInputComponent implements OnInit {
  @Input() nome = '';
  @Input() tipo = '';

  constructor() {}

  ngOnInit(): void {}
}
