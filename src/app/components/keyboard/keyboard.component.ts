import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {KeyboardGeneratorService} from '../../service/keyboard-generator.service';
import {
  BACK_SPACE_LABEL,
  LANGUAGE_EN,
  LANGUAGE_RU,
  SHIFT_LABEL_HOLD, SHIFT_LABEL_NONE, SHIFT_LABEL_ONE, SHIFT_MODE_HOLD,
  SHIFT_MODE_NONE, SHIFT_MODE_ONE, WHITE_SPACE_LABEL
} from '../../service/constants';
import {KeyModel} from '../../model/key.model';

@Component({
  selector: 'keyboard-component',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  commandLine = [];

  currentShiftMode = SHIFT_MODE_NONE;
  currentLanguage = LANGUAGE_EN;

  @Output()
  symbolClickKeyboard: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  backSpaceClick: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  clearClickKeyboard: EventEmitter<void> = new EventEmitter<void>();

  lines: KeyModel[][] = [];

  constructor(public keyboardGeneratorService: KeyboardGeneratorService) { }

  ngOnInit(): void {
    this.generateKeyboard();
    this.generateCommands();
  }

  private generateKeyboard(): void {
    switch (this.currentLanguage) {
      case LANGUAGE_EN:
        this.lines = this.keyboardGeneratorService.generateLinesEnglish();
        break;
      case LANGUAGE_RU:
        this.lines = this.keyboardGeneratorService.generateLinesRussian();
    }
    this.applyShift();
  }

  private applyShift() {
    if (this.currentShiftMode === SHIFT_MODE_HOLD)
      this.toUpperCase();
  }

  private applyNewShift(newValue: any) {
    if (newValue === SHIFT_MODE_NONE) {
      this.toLowerCase();
    } else if (newValue === SHIFT_MODE_ONE || newValue === SHIFT_MODE_HOLD) {
      this.toUpperCase();
    }
    this.currentShiftMode = newValue;
    this.generateCommands();
  }

  symbolClickLine(symbol: string):void {
    this.symbolClickKeyboard.emit(symbol);
    if (this.currentShiftMode === SHIFT_MODE_ONE) {
      this.currentShiftMode = SHIFT_MODE_NONE;
    }
    this.generateKeyboard();
    this.generateCommands();
  }

  commandClickLine(symbol: any):void {
    switch (symbol) {
      case LANGUAGE_EN:
      case LANGUAGE_RU:
        this.currentLanguage = symbol;
        this.generateKeyboard();
        break;

      case SHIFT_MODE_NONE:
      case SHIFT_MODE_ONE:
      case SHIFT_MODE_HOLD:
        this.applyNewShift(symbol);
        break;

      case BACK_SPACE_LABEL:
        this.backSpaceClick.emit();
        break;

      case WHITE_SPACE_LABEL:
        this.symbolClickLine(' ');
        break;
    }

  }

  private toLowerCase(): void {
    this.lines.forEach(line => {
      line.forEach(key => {
        key.label = key.label.toLowerCase();
        key.value = key.value.toLowerCase();
      })
    })
  }

  private toUpperCase(): void {
    this.lines.forEach(line => {
      line.forEach(key => {
        key.label = key.label.toUpperCase();
        key.value = key.value.toUpperCase();
      })
    })
  }

  clearClick(event): void {
    this.clearClickKeyboard.emit();
  }

  private generateCommands(): void {
    this.commandLine = [];
    this.languageCommands();
    this.shiftCommands();
    this.otherCommands();

  }

  private languageCommands() {
    const englishCommand = new KeyModel();
    englishCommand.label = LANGUAGE_EN;
    englishCommand.value = LANGUAGE_EN;
    this.commandLine.push(englishCommand);

    const russianCommand = new KeyModel();
    russianCommand.label = LANGUAGE_RU;
    russianCommand.value = LANGUAGE_RU;
    this.commandLine.push(russianCommand);
  }

  private shiftCommands() {
    const shiftCommand = new KeyModel();
    if (this.currentShiftMode === SHIFT_MODE_NONE) {
      shiftCommand.label = SHIFT_LABEL_ONE;
      shiftCommand.value = SHIFT_MODE_ONE;
    } else if (this.currentShiftMode === SHIFT_MODE_ONE) {
      shiftCommand.label = SHIFT_LABEL_HOLD;
      shiftCommand.value = SHIFT_MODE_HOLD;
    } else if (this.currentShiftMode === SHIFT_MODE_HOLD) {
      shiftCommand.label = SHIFT_LABEL_NONE;
      shiftCommand.value = SHIFT_MODE_NONE;
    }
    this.commandLine.push(shiftCommand);
  }

  private otherCommands() {
    const backSpaceCommand = new KeyModel();
    backSpaceCommand.label = BACK_SPACE_LABEL;
    backSpaceCommand.value = BACK_SPACE_LABEL;
    this.commandLine.push(backSpaceCommand);

    const whiteSpaceCommand = new KeyModel();
    whiteSpaceCommand.label = WHITE_SPACE_LABEL;
    whiteSpaceCommand.value = WHITE_SPACE_LABEL;
    this.commandLine.push(whiteSpaceCommand);
  }

}
