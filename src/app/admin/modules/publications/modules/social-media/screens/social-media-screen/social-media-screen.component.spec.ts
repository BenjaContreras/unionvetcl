import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaScreenComponent } from './social-media-screen.component';

describe('SocialMediaScreenComponent', () => {
  let component: SocialMediaScreenComponent;
  let fixture: ComponentFixture<SocialMediaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
