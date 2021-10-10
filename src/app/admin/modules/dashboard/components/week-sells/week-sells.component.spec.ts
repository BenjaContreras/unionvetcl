import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekSellsComponent } from './week-sells.component';

describe('WeekSellsComponent', () => {
  let component: WeekSellsComponent;
  let fixture: ComponentFixture<WeekSellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekSellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekSellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
