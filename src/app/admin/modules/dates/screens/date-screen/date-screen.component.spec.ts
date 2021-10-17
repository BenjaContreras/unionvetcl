import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateScreenComponent } from './date-screen.component';

describe('DateScreenComponent', () => {
  let component: DateScreenComponent;
  let fixture: ComponentFixture<DateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
