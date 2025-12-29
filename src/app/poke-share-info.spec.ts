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

  it('should have stringVar Subject', () => {
    expect(service.stringVar).toBeDefined();
  });

  it('should have getObservable method', () => {
    expect(service.getObservable).toBeDefined();
    expect(typeof service.getObservable).toBe('function');
  });

  it('should emit values through Subject', (done) => {
    const testValue = 'test-pokemon';
    service.stringVar.subscribe((value) => {
      expect(value).toBe(testValue);
      done();
    });
    service.setValue(testValue);
  });

  it('should have setValue method', () => {
    expect(service.setValue).toBeDefined();
    expect(typeof service.setValue).toBe('function');
  });
});
