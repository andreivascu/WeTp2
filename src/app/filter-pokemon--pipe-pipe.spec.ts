import { FilterPokemonPipePipe } from './filter-pokemon--pipe-pipe';

describe('FilterPokemonPipePipe', () => {
  let pipe: FilterPokemonPipePipe;

  beforeEach(() => {
    pipe = new FilterPokemonPipePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter pokemon by name', () => {
    const pokemons = [
      { id: 1, nom: 'Pikachu' },
      { id: 2, nom: 'Raichu' },
      { id: 3, nom: 'Charizard' }
    ];

    const result = pipe.transform(pokemons, 'nom', 'Pikachu');
    expect(result.length).toBe(1);
    expect(result[0].nom).toBe('Pikachu');
  });

  it('should return all items when filter is empty', () => {
    const pokemons = [
      { id: 1, nom: 'Pikachu' },
      { id: 2, nom: 'Raichu' }
    ];

    const result = pipe.transform(pokemons, 'nom', '');
    expect(result.length).toBe(2);
  });

  it('should handle undefined input by returning empty array', () => {
    // The pipe returns an empty array for undefined
    const result = pipe.transform(undefined, 'nom', 'test');
    expect(result).toEqual([]);
  });

  it('should filter case insensitive', () => {
    const pokemons = [
      { id: 1, nom: 'Pikachu' },
      { id: 2, nom: 'RAICHU' }
    ];

    const result = pipe.transform(pokemons, 'nom', 'pikachu');
    expect(result.length).toBe(1);
    expect(result[0].nom).toBe('Pikachu');
  });
});
