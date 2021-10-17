import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectScreenComponent } from './redirect-screen.component';

describe('RedirectScreenComponent', () => {
  let component: RedirectScreenComponent;
  let fixture: ComponentFixture<RedirectScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
