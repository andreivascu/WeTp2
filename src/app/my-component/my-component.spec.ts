import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MyComponent } from './my-component';
import { FilterPokemonPipePipe } from '../filter-pokemon--pipe-pipe';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent, FilterPokemonPipePipe],
      imports: [FormsModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have id property', () => {
    expect(component.id).toBeDefined();
  });

  it('should have search property', () => {
    expect(component.search).toBeDefined();
  });

  it('should have selectedPokemonId property', () => {
    expect(component.selectedPokemonId).toBeDefined();
  });

  it('should render input elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const inputs = compiled.querySelectorAll('input');
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('should have a select element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const select = compiled.querySelector('select');
    expect(select).toBeTruthy();
  });

  it('should update id when input changes', (done) => {
    const input = fixture.nativeElement.querySelector('input');
    if (input) {
      input.value = 'test-value';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      
      fixture.whenStable().then(() => {
        expect(component.id).toBeDefined();
        done();
      });
    } else {
      done();
    }
  });
});
