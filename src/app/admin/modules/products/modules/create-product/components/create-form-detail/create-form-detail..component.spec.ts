import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormDetailComponent } from './create-form-detail.component';

describe('CreateComponentsComponent', () => {
  let component: CreateFormDetailComponent;
  let fixture: ComponentFixture<CreateFormDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
