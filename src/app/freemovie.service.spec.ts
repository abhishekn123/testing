import { TestBed } from '@angular/core/testing';

import { FreemovieService } from './freemovie.service';

describe('FreemovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreemovieService = TestBed.get(FreemovieService);
    expect(service).toBeTruthy();
  });
});
