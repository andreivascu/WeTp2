import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pokedex {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/1';

  constructor(private http: HttpClient) {}

  // Q11 : Récupérer la liste des pokémons
  getPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Q13 : Récupérer les infos d'un pokémon par son id ou nom
  getPokemonDetails(idOrName: string | number): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
  }
  
}
