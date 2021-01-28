import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KeyboardGeneratorService} from '../../service/keyboard-generator.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  @Output()
  symbolClickKeyboard: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  cancelClickKeyboard: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  clearClickKeyboard: EventEmitter<void> = new EventEmitter<void>();

  lines: string[][] = [];


  constructor(public keyboardGeneratorService: KeyboardGeneratorService) { }

  ngOnInit(): void {
    this.generateKeyboard();
  }

  private generateKeyboard(): void {
    this.lines = this.keyboardGeneratorService.generateLines(3, 10);
  }

  symbolClickLine(symbol: string):void {
    this.generateKeyboard();
    this.symbolClickKeyboard.emit(symbol);
  }

  cancelClick(event): void {
    this.cancelClickKeyboard.emit();
  }

  clearClick(event): void {
    this.clearClickKeyboard.emit();
  }

}
