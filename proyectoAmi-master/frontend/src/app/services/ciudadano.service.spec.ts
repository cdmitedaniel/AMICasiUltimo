import { TestBed, inject } from '@angular/core/testing';

import { CiudadanoService } from './ciudadano.service';


describe('CiudadanoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CiudadanoService]
    });
  });

  it('should be created', inject([CiudadanoService], (service: CiudadanoService) => {
    expect(service).toBeTruthy();
  }));
});

