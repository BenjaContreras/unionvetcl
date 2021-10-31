import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipScreenComponent } from './tip-screen.component';

describe('TipScreenComponent', () => {
  let component: TipScreenComponent;
  let fixture: ComponentFixture<TipScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
