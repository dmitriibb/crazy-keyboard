import { Injectable } from '@angular/core';
import {ARITHMETIC_SYMBOLS, ENGLISH_LETTERS, NUMBERS, RUSSIAN_LETTERS, SPECIAL_SYMBOLS, TEXT_SYMBOLS} from './constants';
import {KeyModel} from '../model/key.model';

@Injectable({
  providedIn: 'root'
})
export class KeyboardGeneratorService {

  defaultHeight = 4;
  defaultWidth = 10;

  constructor() { }

  public generateLinesEnglish(): KeyModel[][] {
    const arr: string[] = [...ENGLISH_LETTERS];
    arr.push(...TEXT_SYMBOLS);
    return this.generateLines(arr, this.defaultHeight, this.defaultWidth);
  }

  public generateLinesRussian(): KeyModel[][] {
    const arr: string[] = [...RUSSIAN_LETTERS];
    arr.push(...TEXT_SYMBOLS);
    return this.generateLines(arr, this.defaultHeight, this.defaultWidth);
  }

  public generateLinesArithmetic(): KeyModel[][] {
    const arr: string[] = [...ARITHMETIC_SYMBOLS];
    return this.generateLines(arr, this.defaultHeight, this.defaultWidth);
  }

  public generateLinesDefault(symbols: string[]): KeyModel[][] {
    return this.generateLines(symbols, this.defaultHeight, this.defaultWidth);
  }

  public generateLines(symbols: string[], height: number, width: number): KeyModel[][] {
    const maxLength = height * width;
    symbols = symbols.slice(0, maxLength);
    symbols = this.doubleShuffle(symbols);
    const keys = this.createKeys(symbols);

    const lines: KeyModel[][] = [];
    for (let i = 0; i < height; i++) {
      const start = i * width;

      if (start >= keys.length) break;

      const end = start + width;
      const line = keys.slice(start, end);
      lines.push(line);
    }

    return lines;
  }

  private addSymbols(arr: string[], symbols: string[], maxLength: number): void {
    if (arr.length === maxLength) return;
    const addNumber = Math.min((maxLength - arr.length), symbols.length);
    arr.push(...symbols.slice(0, addNumber));
  }

  private doubleShuffle(arr: string[]): string[] {
    let res = this.shuffle(arr);
    this.reverse(res);
    return this.shuffle(res);
  }

  private shuffle(arr: string[]): string[] {
    const arrCopy = [...arr];
    const res: string[] = [];

    while (arrCopy.length) {
      const position = this.randomPosition(arrCopy.length - 1);
      res.push(arrCopy[position]);
      arrCopy.splice(position, 1);
    }

    return res;
  }

  private reverse(arr: string[]): void {
    let tmp;
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
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

  private createKeys(symbols: string[]): KeyModel[] {
    return symbols.map(symbol => {
      const key = new KeyModel();
      key.label = symbol;
      key.value = symbol;
      return key;
    });
  }

}
