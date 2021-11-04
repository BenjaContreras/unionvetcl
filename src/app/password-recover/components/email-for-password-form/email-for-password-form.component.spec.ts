import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailForPasswordFormComponent } from './email-for-password-form.component';

describe('EmailForPasswordFormComponent', () => {
  let component: EmailForPasswordFormComponent;
  let fixture: ComponentFixture<EmailForPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailForPasswordFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailForPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
