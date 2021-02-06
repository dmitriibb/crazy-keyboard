import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KeyModel} from '../../../../model/key.model';

@Component({
  selector: 'letter-component',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  @Input()
  symbol: KeyModel;

  @Output()
  symbolClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: any): void {
    this.symbolClick.emit(this.symbol.value);
  }

}
