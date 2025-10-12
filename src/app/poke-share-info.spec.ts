import { TestBed } from '@angular/core/testing';

import { PokeShareInfo } from './poke-share-info';

describe('PokeShareInfo', () => {
  let service: PokeShareInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeShareInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
