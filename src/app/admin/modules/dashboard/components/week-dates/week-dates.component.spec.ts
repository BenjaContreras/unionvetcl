import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDatesComponent } from './week-dates.component';

describe('WeekDatesComponent', () => {
  let component: WeekDatesComponent;
  let fixture: ComponentFixture<WeekDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
