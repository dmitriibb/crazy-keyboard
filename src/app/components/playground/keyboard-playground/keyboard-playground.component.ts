import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keyboard-playground',
  templateUrl: './keyboard-playground.component.html',
  styleUrls: ['./keyboard-playground.component.css']
})
export class KeyboardPlaygroundComponent implements OnInit {

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
