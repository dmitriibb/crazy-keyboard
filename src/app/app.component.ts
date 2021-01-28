import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crazy-keyboard';
  input = '';

  symbolClickKeyboard(symbol): void {
    this.input += symbol;
  }

  cancelClickKeyboard(): void {
    if (this.input !== '')
      this.input = this.input.substring(0, this.input.length - 1);
  }

  clearClickKeyboard(): void {
    this.input = '';
  }

}
