import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipComponentComponent } from './tip-component.component';

describe('TipComponentComponent', () => {
  let component: TipComponentComponent;
  let fixture: ComponentFixture<TipComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
