import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverNavComponent } from './recover-nav.component';

describe('RecoverNavComponent', () => {
  let component: RecoverNavComponent;
  let fixture: ComponentFixture<RecoverNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
