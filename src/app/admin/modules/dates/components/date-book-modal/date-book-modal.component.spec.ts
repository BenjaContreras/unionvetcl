import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateBookModalComponent } from './date-book-modal.component';

describe('DateBookModalComponent', () => {
  let component: DateBookModalComponent;
  let fixture: ComponentFixture<DateBookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateBookModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
