import { TestBed } from '@angular/core/testing';

import { ShowComposantsupprimerclientService } from './show-composantsupprimerclient.service';

describe('ShowComposantsupprimerclientService', () => {
  let service: ShowComposantsupprimerclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowComposantsupprimerclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
