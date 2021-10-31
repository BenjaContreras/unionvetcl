import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseComponentComponent } from './response-component.component';

describe('ResponseComponentComponent', () => {
  let component: ResponseComponentComponent;
  let fixture: ComponentFixture<ResponseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
