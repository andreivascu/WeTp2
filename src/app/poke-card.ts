import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.html',
  styleUrls: ['./poke-card.css'],
  standalone: false
})
export class PokeCard {
  @Input() selectedPokemonId: number | undefined;
  @Input() pokemonName: string | undefined;
}
