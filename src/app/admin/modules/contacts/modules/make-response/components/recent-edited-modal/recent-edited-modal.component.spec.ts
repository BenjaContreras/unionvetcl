import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEditedModalComponent } from './recent-edited-modal.component';

describe('RecentEditedModalComponent', () => {
  let component: RecentEditedModalComponent;
  let fixture: ComponentFixture<RecentEditedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentEditedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentEditedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
