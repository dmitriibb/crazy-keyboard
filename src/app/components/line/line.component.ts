import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  @Input()
  symbols: string[];

  @Output()
  symbolClickLine: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log("line--");
  }

  symbolClick(symbol: string): void {
    this.symbolClickLine.emit(symbol);
  }

}
