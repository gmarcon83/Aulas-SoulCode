import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyledInputComponent } from './styled-input/styled-input.component';
import { StyledButtonComponent } from './styled-button/styled-button.component';

@NgModule({
  declarations: [AppComponent, StyledInputComponent, StyledButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
