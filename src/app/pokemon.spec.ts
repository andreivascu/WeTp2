import { Pokemon } from './pokemon';

describe('Pokemon', () => {
  it('should create an instance', () => {
    const pokemon = new Pokemon(1, 'Bulbizarre');
    expect(pokemon).toBeTruthy();
  });

  it('should have correct id', () => {
    const pokemon = new Pokemon(1, 'Bulbizarre');
    expect(pokemon.id).toBe(1);
  });

  it('should have correct name', () => {
    const pokemon = new Pokemon(25, 'Pikachu');
    expect(pokemon.nom).toBe('Pikachu');
  });

  it('should create multiple pokemon instances', () => {
    const pokemon1 = new Pokemon(1, 'Bulbizarre');
    const pokemon2 = new Pokemon(4, 'Salameche');
    const pokemon3 = new Pokemon(7, 'Carapuce');

    expect(pokemon1.id).toBe(1);
    expect(pokemon2.nom).toBe('Salameche');
    expect(pokemon3.id).toBe(7);
  });
});
