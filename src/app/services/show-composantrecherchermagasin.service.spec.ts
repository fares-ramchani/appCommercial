import { TestBed } from '@angular/core/testing';

import { ShowComposantrecherchermagasinService } from './show-composantrecherchermagasin.service';

describe('ShowComposantrecherchermagasinService', () => {
  let service: ShowComposantrecherchermagasinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantrecherchermagasinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
