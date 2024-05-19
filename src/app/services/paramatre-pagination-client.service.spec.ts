import { TestBed } from '@angular/core/testing';

import { ParamatrePaginationClientService } from './paramatre-pagination-client.service';

describe('ParamatrePaginationClientService', () => {
  let service: ParamatrePaginationClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamatrePaginationClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
