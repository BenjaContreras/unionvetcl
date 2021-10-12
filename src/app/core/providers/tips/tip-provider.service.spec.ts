import { TestBed } from '@angular/core/testing';

import { TipProviderService } from './tip-provider.service';

describe('TipProviderService', () => {
  let service: TipProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
