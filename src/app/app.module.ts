import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {InputTextModule} from 'primeng/inputtext';


import { AppComponent } from './app.component';
import { LetterComponent } from './components/letter/letter.component';
import { LineComponent } from './components/line/line.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { MainComponent } from './components/main/main.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    LineComponent,
    KeyboardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DialogModule,
    OverlayPanelModule,
    InputTextModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
