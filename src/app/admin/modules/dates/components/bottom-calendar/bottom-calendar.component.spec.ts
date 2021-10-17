import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCalendarComponent } from './bottom-calendar.component';

describe('BottomCalendarComponent', () => {
  let component: BottomCalendarComponent;
  let fixture: ComponentFixture<BottomCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
