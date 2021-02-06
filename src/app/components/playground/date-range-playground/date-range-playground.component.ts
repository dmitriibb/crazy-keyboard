import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'date-range-playground',
  templateUrl: './date-range-playground.component.html',
  styleUrls: ['./date-range-playground.component.css']
})
export class DateRangePlaygroundComponent implements OnInit {

  dateFormat = 'dd-MM-YYYY';
  pipe = new DatePipe('en-US');

  startDate = '';
  endDate = '';

  constructor() { }

  ngOnInit(): void {
    this.startDate = this.pipe.transform(new Date(), this.dateFormat);
    this.endDate = this.pipe.transform(new Date(), this.dateFormat);
  }

  datesSelected(dates: Date[]) {
    this.startDate = this.pipe.transform(dates[0], this.dateFormat);
    this.endDate = this.pipe.transform(dates[1], this.dateFormat);
  }

}
