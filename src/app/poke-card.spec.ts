import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeCard } from './poke-card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PokeCard', () => {
  let component: PokeCard;
  let fixture: ComponentFixture<PokeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeCard],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PokeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have selectedPokemonId input property', () => {
    component.selectedPokemonId = 25;
    expect(component.selectedPokemonId).toBe(25);
  });

  it('should have pokemonName input property', () => {
    component.pokemonName = 'Pikachu';
    expect(component.pokemonName).toBe('Pikachu');
  });

  it('should initialize with undefined properties', () => {
    expect(component.selectedPokemonId).toBeUndefined();
    expect(component.pokemonName).toBeUndefined();
  });

  it('should update properties independently', () => {
    component.selectedPokemonId = 10;
    component.pokemonName = 'Caterpie';
    
    expect(component.selectedPokemonId).toBe(10);
    expect(component.pokemonName).toBe('Caterpie');
  });
});
