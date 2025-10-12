import { Component } from '@angular/core';
import { PokeDetail, Pokemon } from '../pokemon';
import { OnInit } from '@angular/core';
import { Pokedex } from '../pokedex';
import { PokeShareInfo } from '../poke-share-info';
@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
  providers: [Pokedex]
})
export class MyComponent implements OnInit {
  id: string = '';
  selectedPokemonId: string = '';
  search: string = '';
  pokemons: Pokemon[] = [];
  pokeDetail: PokeDetail | undefined ;
  constructor(private pokedex: Pokedex, private pokeShareInfo: PokeShareInfo) {}

  ngOnInit(): void {
    this.pokedex.getPokemons().subscribe(data => {
      data.results.forEach((e: any, index: number) => {
        this.pokemons.push(new Pokemon(index, e.name, e.url));
      });
    });
  }

  go(){
    if(this.selectedPokemonId != '') {
      this.pokedex.getPokemonDetails(this.selectedPokemonId.toString()).subscribe(data => this.pokeDetail = data);
      this.pokeShareInfo.setValue(this.selectedPokemonId);
    }
  } 
};