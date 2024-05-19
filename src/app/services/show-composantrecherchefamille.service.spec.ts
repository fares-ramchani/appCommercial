import { TestBed } from '@angular/core/testing';

import { ShowComposantrecherchefamilleService } from './show-composantrecherchefamille.service';

describe('ShowComposantrecherchefamilleService', () => {
  let service: ShowComposantrecherchefamilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantrecherchefamilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
