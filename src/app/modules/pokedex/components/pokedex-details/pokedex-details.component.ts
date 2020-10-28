import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../entities/pokemon';

@Component({
  selector: 'app-pokedex-details',
  templateUrl: './pokedex-details.component.html',
  styleUrls: ['./pokedex-details.component.scss']
})
export class PokedexDetailsComponent implements OnInit {
  pokemonId: number;
  pokemon$: Observable<Pokemon>;
  pokemon: Pokemon;

  constructor(
    private _pokedexSercive: PokedexService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.pokemonId = +this._route.snapshot.params.pokemonId;
    /* check if the id is from a Kanto pokemon */
    if (this.pokemonId < 0 || this.pokemonId > 151) {
      // this._router.navigate(['/pokedex']);
    }

    this.pokemon$ = this._pokedexSercive.getPokemon(this.pokemonId);
    this.pokemon$.subscribe(pokemon => {
        this.pokemon = pokemon;
      });
  }
}
