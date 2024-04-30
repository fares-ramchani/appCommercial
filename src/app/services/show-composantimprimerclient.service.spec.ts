import { TestBed } from '@angular/core/testing';

import { ShowComposantimprimerclientService } from './show-composantimprimerclient.service';

describe('ShowComposantimprimerclientService', () => {
  let service: ShowComposantimprimerclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantimprimerclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
