import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputBindingComponentComponent } from './input-binding-component/input-binding-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
