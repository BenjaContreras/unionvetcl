import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentVerifiedModalComponent } from './recent-verified-modal.component';

describe('RecentVerifiedModalComponent', () => {
  let component: RecentVerifiedModalComponent;
  let fixture: ComponentFixture<RecentVerifiedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentVerifiedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentVerifiedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
