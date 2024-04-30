import { TestBed } from '@angular/core/testing';

import { ShowComposantrechercherclientService } from './show-composantrechercherclient.service';

describe('ShowComposantrechercherclientService', () => {
  let service: ShowComposantrechercherclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantrechercherclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
