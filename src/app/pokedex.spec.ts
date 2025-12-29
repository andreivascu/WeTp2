import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Pokedex } from './pokedex';

describe('Pokedex', () => {
  let service: Pokedex;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(Pokedex);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
