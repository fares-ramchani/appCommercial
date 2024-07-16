import { TestBed } from '@angular/core/testing';

import { ShowComposantAlertmodifierService } from './show-composant-alertmodifier.service';

describe('ShowComposantAlertmodifierService', () => {
  let service: ShowComposantAlertmodifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantAlertmodifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
