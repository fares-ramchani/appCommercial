import { TestBed } from '@angular/core/testing';

import { ShowComposantAlertsupprimerService } from './show-composant-alertsupprimer.service';

describe('ShowComposantAlertsupprimerService', () => {
  let service: ShowComposantAlertsupprimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantAlertsupprimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
