import { TestBed } from '@angular/core/testing';

import { FormErrorService } from './form-error.service';

describe('FormErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormErrorService = TestBed.get(FormErrorService);
    expect(service).toBeTruthy();
  });
});
