import { TestBed } from '@angular/core/testing';

import { ShowComposantsurprimmerFornisseurService } from './show-composantsurprimmer-fornisseur.service';

describe('ShowComposantsurprimmerFornisseurService', () => {
  let service: ShowComposantsurprimmerFornisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantsurprimmerFornisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
