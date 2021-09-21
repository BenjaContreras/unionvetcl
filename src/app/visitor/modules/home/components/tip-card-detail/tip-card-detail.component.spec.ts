import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipCardDetailComponent } from './tip-card-detail.component';

describe('TipCardDetailComponent', () => {
  let component: TipCardDetailComponent;
  let fixture: ComponentFixture<TipCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
