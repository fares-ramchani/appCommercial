import { TestBed } from '@angular/core/testing';

import { ShowComposantsupprimermagasinService } from './show-composantsupprimermagasin.service';

describe('ShowComposantsupprimermagasinService', () => {
  let service: ShowComposantsupprimermagasinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantsupprimermagasinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
