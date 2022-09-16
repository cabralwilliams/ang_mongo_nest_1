import { TestBed } from '@angular/core/testing';

import { PowerDetailService } from './power-detail.service';

describe('PowerDetailService', () => {
  let service: PowerDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
