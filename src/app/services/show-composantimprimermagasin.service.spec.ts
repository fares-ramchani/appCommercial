import { TestBed } from '@angular/core/testing';

import { ShowComposantimprimermagasinService } from './show-composantimprimermagasin.service';

describe('ShowComposantimprimermagasinService', () => {
  let service: ShowComposantimprimermagasinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantimprimermagasinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
