import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Pokemon } from '../entities/pokemon';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  readonly pokedexEndPoint = `${environment.pokeapiUrl}pokedex/2/`;
  readonly pokemonEndPoint = `${environment.pokeapiUrl}pokemon/`;

  constructor(
    private _httpService: HttpClient
  ) { }

  getAllPokemonsFromKanto(): Observable<Pokemon[]> {
    return this._httpService.get<any>(this.pokedexEndPoint)
      .pipe(map(doc => {
        return doc.pokemon_entries.map(pokemon => {
          return { id: pokemon.entry_number, name: pokemon.pokemon_species.name as Pokemon };
        });
      }));
  }

  getPokemon(pokemonId: number): Observable<any> {
    return this._httpService.get<any>(`${this.pokemonEndPoint}${pokemonId}`)
      .pipe(map(doc => {
        return {
          id: doc.id,
          name: doc.name,
          types: doc.types.map(e => e.type.name),
          abilities: doc.abilities.map(e => e.ability.name),
          imgPathMini: doc.sprites.front_default,
          imgPathLarge: doc.sprites.other.dream_world.front_default,
          stats: [
            { name: 'HP', value: doc.stats[0].base_stat },
            { name: 'Attack', value: doc.stats[1].base_stat },
            { name: 'Defense', value: doc.stats[2].base_stat },
            { name: 'Special Attack', value: doc.stats[3].base_stat },
            { name: 'Special Defense', value: doc.stats[4].base_stat },
            { name: 'Speed', value: doc.stats[5].base_stat },
          ]
        };
      }));
  }
}
