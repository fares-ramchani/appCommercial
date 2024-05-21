import { TestBed } from '@angular/core/testing';

import { ServicefamilleService } from './servicefamille.service';

describe('ServicefamilleService', () => {
  let service: ServicefamilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicefamilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
