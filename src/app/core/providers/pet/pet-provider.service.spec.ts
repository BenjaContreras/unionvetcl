import { TestBed } from '@angular/core/testing';

import { PetProviderService } from './pet-provider.service';

describe('PetProviderService', () => {
  let service: PetProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
