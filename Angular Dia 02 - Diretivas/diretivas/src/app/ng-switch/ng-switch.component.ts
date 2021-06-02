import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent {
  btnNumber: number = 1;

  changeBtnNumberValue(event: any) {
    this.btnNumber = event.target.value;
  }
}
