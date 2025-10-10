import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class MyComponent {
  id: string = '';
  selectedPokemonId: number = 1; // Valeur par défaut
  search: string = '';

  pokemons: Pokemon[] = [
    new Pokemon(1, 'Bulbizarre'),
    new Pokemon(2, 'Salamèche'),
    new Pokemon(3, 'Carapuce'),
    new Pokemon(4, 'Pikachu')
  ];

  validerChoix() {
  const pokemon = this.pokemons.find(p => p.id === Number(this.selectedPokemonId));
  if (pokemon) {
    console.log(`ID : ${pokemon.id}, Nom : ${pokemon.nom}`);
  } else {
    console.log('Aucun Pokémon sélectionné');
  }
}

};
