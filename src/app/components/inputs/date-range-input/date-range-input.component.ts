import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'date-range-input',
  templateUrl: './date-range-input.component.html',
  styleUrls: ['./date-range-input.component.css']
})
export class DateRangeInputComponent implements OnInit {

  selectedYears = [0, 1];

  @Input()
  yearMin = 2000;

  @Input()
  yearMax = 2050;

  @Output()
  datesSelected = new EventEmitter<Date[]>();

  @Input()
  yearStart: number;
  @Input()
  yearEnd: number;

  @Input()
  monthStart: number;
  @Input()
  monthEnd: number;

  @Input()
  dayStart: number;
  @Input()
  dayEnd: number;

  maxMonthStart = 12
  minMonthEnd = 1;

  monthStartMargin = '0%';
  monthEndMargin = '0%';

  constructor() { }

  ngOnInit(): void {
    this.yearStart = 2020;
    this.yearEnd = 2025;
    this.selectedYears[0] = this.yearStart;
    this.selectedYears[1] = this.yearEnd;
    this.monthStart = 1;
    this.monthEnd = 12;
    this.dayStart = 1;
    this.dayEnd = 31;

    this.emitNewDates();
  }

  onYearChange(e) {
    this.yearStart = this.selectedYears[0];
    this.yearEnd = this.selectedYears[1];
    this.shiftMonths();
    this.validateMonths();
    this.validateDays();
    this.emitNewDates();
  }

  onMonthChange(e) {
    this.validateMonths();
    this.validateDays();
    this.emitNewDates();
  }

  private validateMonths() {
    if (this.yearStart === this.yearEnd) {
      if (this.monthEnd < this.monthStart) {
        this.monthEnd = this.monthStart;
      }
      this.maxMonthStart = this.monthEnd;
      this.minMonthEnd = this.monthStart;
    }
  }

  private validateDays() {
    const lastDayOfMonthStart = new Date(this.yearStart, this.monthStart, 0).getDate();
    if (lastDayOfMonthStart < this.dayStart)
      this.dayStart = lastDayOfMonthStart;

    const lastDayOfMonthEnd = new Date(this.yearEnd, this.monthEnd, 0).getDate();
    if (lastDayOfMonthEnd < this.dayEnd)
      this.dayEnd = lastDayOfMonthEnd;
  }

  private shiftMonths() {
    const totalRange = this.yearMax - this.yearMin;
    const monthStartPercent = (this.yearStart - this.yearMin) / totalRange * 100 - 1;
    const monthEndPercent = 100 - (this.yearEnd - this.yearMin) / totalRange * 100 - 1;

    this.monthStartMargin = '' + monthStartPercent + '%';
    this.monthEndMargin = '' + monthEndPercent + '%';

    console.log('left: ' + monthStartPercent + ', right: ' + monthEndPercent);
  }

  private emitNewDates() {
    const startDate = new Date(this.yearStart, this.monthStart, this.dayStart);
    const endDate = new Date(this.yearEnd, this.monthEnd, this.dayEnd);
    this.datesSelected.emit([startDate, endDate]);
  }

}
