import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseHeaderComponent } from './response-header.component';

describe('ResponseHeaderComponent', () => {
  let component: ResponseHeaderComponent;
  let fixture: ComponentFixture<ResponseHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
