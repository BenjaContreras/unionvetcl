import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersInlineComponent } from './filters-inline.component';

describe('FiltersInlineComponent', () => {
  let component: FiltersInlineComponent;
  let fixture: ComponentFixture<FiltersInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersInlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
