import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Pokedetail } from './pokedetail';

describe('Pokedetail', () => {
  let component: Pokedetail;
  let fixture: ComponentFixture<Pokedetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pokedetail],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokedetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have detail input property', () => {
    expect('detail' in component).toBeTruthy();
  });

  it('should initialize with undefined detail', () => {
    expect(component.detail === undefined || component.detail === null).toBeTruthy();
  });

  it('should render template content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toBeTruthy();
  });
});
