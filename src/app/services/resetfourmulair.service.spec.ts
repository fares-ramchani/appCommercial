import { TestBed } from '@angular/core/testing';

import { ResetfourmulairService } from './resetfourmulair.service';

describe('ResetfourmulairService', () => {
  let service: ResetfourmulairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetfourmulairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
