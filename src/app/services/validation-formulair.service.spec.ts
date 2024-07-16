import { TestBed } from '@angular/core/testing';

import { ValidationFormulairService } from './validation-formulair.service';

describe('ValidationFormulairService', () => {
  let service: ValidationFormulairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationFormulairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
