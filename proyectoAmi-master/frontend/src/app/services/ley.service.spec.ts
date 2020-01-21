import { TestBed, inject } from '@angular/core/testing';

import { LeyService } from './ley.service';

describe('LeyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeyService]
    });
  });

  it('should be created', inject([LeyService], (service: LeyService) => {
    expect(service).toBeTruthy();
  }));
});
