import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePlaygroundComponent } from './date-range-playground.component';

describe('DateRangePlaygroundComponent', () => {
  let component: DateRangePlaygroundComponent;
  let fixture: ComponentFixture<DateRangePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRangePlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
