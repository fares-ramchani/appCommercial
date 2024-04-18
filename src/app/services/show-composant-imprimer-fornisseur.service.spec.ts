import { TestBed } from '@angular/core/testing';

import { ShowComposantImprimerFornisseurService } from './show-composant-imprimer-fornisseur.service';

describe('ShowComposantImprimerFornisseurService', () => {
  let service: ShowComposantImprimerFornisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantImprimerFornisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
