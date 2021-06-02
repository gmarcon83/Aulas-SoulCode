import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  myColor!: string;
  myFontSize: string = '10px';

  constructor() {}

  ngOnInit(): void {}

  changeColor(event: any) {
    this.myColor = event.target.value;
  }

  changeFontSize(event: any) {
    this.myFontSize = event.target.checked ? event.target.value : '10px';
  }
}
