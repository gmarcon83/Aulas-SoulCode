import { Component } from '@angular/core';

interface User {
  age: number;
  gender: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'propriedades';

  inputField = '';

  user: User = {
    age: 17,
    gender: 'M',
    name: 'João',
  };

  isDisabled = true;
  save(event: any) {
    console.log(event);
  }
}
