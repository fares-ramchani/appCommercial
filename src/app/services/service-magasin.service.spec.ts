import { TestBed } from '@angular/core/testing';

import { ServiceMagasinService } from './service-magasin.service';

describe('ServiceMagasinService', () => {
  let service: ServiceMagasinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMagasinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
