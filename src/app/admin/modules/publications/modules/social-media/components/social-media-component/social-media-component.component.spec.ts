import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaComponentComponent } from './social-media-component.component';

describe('SocialMediaComponentComponent', () => {
  let component: SocialMediaComponentComponent;
  let fixture: ComponentFixture<SocialMediaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
