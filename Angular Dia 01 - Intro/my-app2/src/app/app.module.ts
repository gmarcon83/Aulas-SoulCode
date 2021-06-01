import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomInputButtonComponent } from './custom-input-button/custom-input-button.component';

@NgModule({
  declarations: [AppComponent, CustomInputComponent, CustomInputButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
