import { TestBed } from '@angular/core/testing';

import {PublicationProviderService } from './publication-provider.service';

describe('DateProviderService', () => {
  let service:PublicationProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicationProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
