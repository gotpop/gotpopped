import { TestBed, inject } from '@angular/core/testing';

import { BehanceService } from './behance.service';

describe('BehanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BehanceService]
    });
  });

  it('should be created', inject([BehanceService], (service: BehanceService) => {
    expect(service).toBeTruthy();
  }));
});
