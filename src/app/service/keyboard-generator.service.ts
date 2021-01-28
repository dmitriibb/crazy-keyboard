import { Injectable } from '@angular/core';
import {ENGLISH_LETTERS, NUMBERS, SYMBOLS} from './constants';

@Injectable({
  providedIn: 'root'
})
export class KeyboardGeneratorService {


  constructor() { }

  public generateLines(linesNumber: number, width: number): string[][] {
    const maxLength = linesNumber * width;
    const symbols = this.generateSymbols(maxLength);

    const lines: string[][] = [];
    for (let i = 0; i < linesNumber; i++) {
      const start = i * width;
      const end = start + width;
      const line = symbols.slice(start, end);
      lines.push(line);
    }

    return lines;
  }

  private generateSymbols(maxLength: number): string[] {
    const arr = [];
    this.addSymbols(arr, ENGLISH_LETTERS, maxLength);
    this.addSymbols(arr, NUMBERS, maxLength);
    this.addSymbols(arr, SYMBOLS, maxLength);

    //const length = Math.min(arr.length, maxLength);

    return this.shuffle(arr);
  }

  private addSymbols(arr: string[], symbols: string[], maxLength: number): void {
    if (arr.length === maxLength) return;
    const addNumber = Math.min((maxLength - arr.length), symbols.length);
    arr.push(...symbols.slice(0, addNumber));
  }


  private shuffle(arr: string[]): string[] {
    const res: string[] = [];

    while (arr.length) {
      const position = this.randomPosition(arr.length - 1);
      res.push(arr[position]);
      arr.splice(position, 1);
    }

    return res;
  }

  private randomPosition(max: number): number {
    if (max === 0) return 0;

    const multiplier = 12;
    const decades = ('' + max).length;
    let position = Math.random();

    for (let i = 0; i < decades; i++)
      position *= multiplier;

    position = Math.floor(position);
    return position % max;
  }

}
