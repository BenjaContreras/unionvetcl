import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationCardDetailComponent } from './publication-card-detail.component';

describe('PublicationCardDetailComponent', () => {
  let component: PublicationCardDetailComponent;
  let fixture: ComponentFixture<PublicationCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
