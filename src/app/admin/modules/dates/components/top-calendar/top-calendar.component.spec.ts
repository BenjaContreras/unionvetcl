import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCalendarComponent } from './top-calendar.component';

describe('TopCalendarComponent', () => {
  let component: TopCalendarComponent;
  let fixture: ComponentFixture<TopCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
