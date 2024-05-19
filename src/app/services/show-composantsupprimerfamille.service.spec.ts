import { TestBed } from '@angular/core/testing';

import { ShowComposantsupprimerfamilleService } from './show-composantsupprimerfamille.service';

describe('ShowComposantsupprimerfamilleService', () => {
  let service: ShowComposantsupprimerfamilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantsupprimerfamilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
