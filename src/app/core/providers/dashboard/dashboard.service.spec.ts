import { TestBed } from '@angular/core/testing';

import { DashboardProviderService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
