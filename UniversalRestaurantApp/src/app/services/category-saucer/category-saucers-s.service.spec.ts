import { TestBed } from '@angular/core/testing';

import { CategorySaucersSService } from './category-saucers-s.service';

describe('CategorySaucersSService', () => {
  let service: CategorySaucersSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySaucersSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
