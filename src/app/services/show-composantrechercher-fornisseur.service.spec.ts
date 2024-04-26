import { TestBed } from '@angular/core/testing';

import { ShowComposantrechercherFornisseurService } from './show-composantrechercher-fornisseur.service';

describe('ShowComposantrechercherFornisseurService', () => {
  let service: ShowComposantrechercherFornisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantrechercherFornisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
