import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';


import { AppComponent } from './app.component';
import { LetterComponent } from './components/letter/letter.component';
import { LineComponent } from './components/line/line.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    LineComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
