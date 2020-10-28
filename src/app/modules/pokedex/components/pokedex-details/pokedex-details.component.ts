import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../entities/pokemon';

@Component({
  selector: 'app-pokedex-details',
  templateUrl: './pokedex-details.component.html',
  styleUrls: ['./pokedex-details.component.scss']
})
export class PokedexDetailsComponent implements OnInit, OnDestroy {
  pokemonId: number;
  pokemon: Pokemon;
  isLoading = true;
  minPokeId = false;
  maxPokeId = false;
  private _sub: Subscription;

  constructor(
    private _pokedexSercive: PokedexService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;

    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this._router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    this.pokemonId = +this._route.snapshot.params.pokemonId;

    if (this.pokemonId < 0 || this.pokemonId > 151) {
      this._router.navigate(['/pokedex']);
    }

    this.isLoading = true;

    this._sub = this._pokedexSercive.getPokemon(this.pokemonId)
      .subscribe(pokemon => {
        this.pokemon = pokemon;
        this.isLoading = false;
      });

    this.minPokeId = this.pokemonId < 2 ? true : false;
    this.maxPokeId = this.pokemonId > 150 ? true : false;
  }

  toPrevius(): void {
    this._router.navigate([`/pokedex/${this.pokemonId - 1}`]);
  }

  toNext(): void {
    this._router.navigate([`/pokedex/${this.pokemonId + 1}`]);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
