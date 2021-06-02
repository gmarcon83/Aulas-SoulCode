import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent {
  addBox: boolean = false;
  addBoxRed: boolean = false;

  changeBox(event: any) {
    this.addBox = event.target.checked;
  }
  changeBoxRed(event: any) {
    this.addBoxRed = event.target.checked;
  }
}
