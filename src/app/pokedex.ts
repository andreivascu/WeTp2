import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeDetail, PokeDexServiceRes } from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class Pokedex {
  

  constructor(private http: HttpClient) {}

  // Q11 : Récupérer la liste des pokémons
  getPokemons(): Observable<PokeDexServiceRes> {
    return this.http.get<PokeDexServiceRes>(url);
  }

  // Q13 : Récupérer les infos d'un pokémon par son id ou nom
  getPokemonDetails(id: string): Observable<PokeDetail> {
    return this.http.get<PokeDetail>(url + id + '/');
  }
  
}
