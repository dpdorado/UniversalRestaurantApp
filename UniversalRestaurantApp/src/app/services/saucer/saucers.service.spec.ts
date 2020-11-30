import { TestBed } from '@angular/core/testing';

import { SaucersService } from './saucers.service';

describe('SaucersService', () => {
  let service: SaucersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaucersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
