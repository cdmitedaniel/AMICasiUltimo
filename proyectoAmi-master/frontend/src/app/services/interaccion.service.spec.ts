import { TestBed, inject } from '@angular/core/testing';

import { InteraccionService } from './interaccion.service';

describe('InteraccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteraccionService]
    });
  });

  it('should be created', inject([InteraccionService], (service: InteraccionService) => {
    expect(service).toBeTruthy();
  }));
});
