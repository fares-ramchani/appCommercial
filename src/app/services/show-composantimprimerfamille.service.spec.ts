import { TestBed } from '@angular/core/testing';

import { ShowComposantimprimerfamilleService } from './show-composantimprimerfamille.service';

describe('ShowComposantimprimerfamilleService', () => {
  let service: ShowComposantimprimerfamilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantimprimerfamilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
