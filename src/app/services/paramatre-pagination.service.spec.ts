import { TestBed } from '@angular/core/testing';

import { ParamatrePaginationService } from './paramatre-pagination.service';

describe('ParamatrePaginationService', () => {
  let service: ParamatrePaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamatrePaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
