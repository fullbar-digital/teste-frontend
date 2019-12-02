import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Array<any> = [];
  constructor(private http: HttpClient) { }

  getPokemon(number){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+number);
  }

  getIntervalPokemons(initial, final){
    for(let i=initial;i<=final;i++){
      this.getPokemon(i).subscribe(res => {
        this.pokemons.push(res);
        return this.pokemons;
      });
    }
  }

  sortPokemon(pokemons){
    this.pokemons.sort((a,b)=>{
      if(a.id < b.id)
        return -1
      else if(a.id > b.id)
        return 1  
    })
    return this.pokemons;
  }

  getMovies(url){
    return this.http.get(url);
  }

  getDetailMove(move){
    return this.http.get(move.move.url);
  }
}
