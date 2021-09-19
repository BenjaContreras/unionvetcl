import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceScreenComponent } from './service-screen.component';

describe('ServiceScreenComponent', () => {
  let component: ServiceScreenComponent;
  let fixture: ComponentFixture<ServiceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
