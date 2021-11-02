import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePetFormDetailComponent } from './create-pet-form-detail.component';

describe('CreateComponentsComponent', () => {
  let component: CreatePetFormDetailComponent;
  let fixture: ComponentFixture<CreatePetFormDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePetFormDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePetFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
