import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardPlaygroundComponent } from './keyboard-playground.component';

describe('KeyboardPlaygroundComponent', () => {
  let component: KeyboardPlaygroundComponent;
  let fixture: ComponentFixture<KeyboardPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardPlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
