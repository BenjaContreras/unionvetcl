import { TestBed } from '@angular/core/testing';

import { DatesProviderService } from './dates.service';

describe('DatesService', () => {
  let service: DatesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
