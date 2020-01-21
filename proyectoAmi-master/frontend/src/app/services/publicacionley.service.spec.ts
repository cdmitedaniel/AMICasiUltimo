import { TestBed, inject } from '@angular/core/testing';

import { PublicacionleyService } from './publicacionley.service';


describe('PublicacionleyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicacionleyService]
    });
  });

  it('should be created', inject([PublicacionleyService], (service: PublicacionleyService) => {
    expect(service).toBeTruthy();
  }));
});

