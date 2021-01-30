import {Component, OnInit, ViewChild} from '@angular/core';
import {OverlayPanel} from 'primeng/overlaypanel';
import {KeyboardComponent} from '../keyboard/keyboard.component';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  input = '';

  constructor() { }

  ngOnInit(): void {
  }

  symbolClickKeyboard(symbol): void {
    this.input += symbol;
  }

  backSpaceClickKeyboard(): void {
    if (this.input !== '')
      this.input = this.input.substring(0, this.input.length - 1);
  }

  clearClickKeyboard(): void {
    this.input = '';
  }

}
