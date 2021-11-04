import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverScreenComponent } from './recover-screen.component';

describe('RecoverScreenComponent', () => {
  let component: RecoverScreenComponent;
  let fixture: ComponentFixture<RecoverScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
