import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseScreenComponent } from './response-screen.component';

describe('ResponseScreenComponent', () => {
  let component: ResponseScreenComponent;
  let fixture: ComponentFixture<ResponseScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
