import { TestBed } from '@angular/core/testing';

import { EmploeeRegService } from './emploee-reg.service';

describe('EmploeeRegService', () => {
  let service: EmploeeRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploeeRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
