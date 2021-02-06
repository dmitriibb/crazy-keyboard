import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {InputTextModule} from 'primeng/inputtext';


import { AppComponent } from './app.component';
import { LetterComponent } from './components/inputs/input-keyboard/letter/letter.component';
import { LineComponent } from './components/inputs/input-keyboard/line/line.component';
import { KeyboardComponent } from './components/inputs/input-keyboard/keyboard/keyboard.component';
import { MainComponent } from './components/main/main.component';
import {FormsModule} from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import { KeyboardPlaygroundComponent } from './components/playground/keyboard-playground/keyboard-playground.component';
import { DateRangeInputComponent } from './components/inputs/date-range-input/date-range-input.component';
import { DateRangePlaygroundComponent } from './components/playground/date-range-playground/date-range-playground.component';
import {SliderModule} from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    LineComponent,
    KeyboardComponent,
    MainComponent,
    KeyboardPlaygroundComponent,
    DateRangeInputComponent,
    DateRangePlaygroundComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DialogModule,
    OverlayPanelModule,
    InputTextModule,
    FormsModule,
    TabViewModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
