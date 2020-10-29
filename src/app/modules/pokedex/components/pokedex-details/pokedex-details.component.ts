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
  lowerThenMinId = false;
  higherThenMaxId = false;
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
    this.isLoading = true;
    this.pokemonId = +this._route.snapshot.params.pokemonId;

    if (isNaN(this.pokemonId) || this.pokemonId < 1 || this.pokemonId > 151) {
      this._router.navigate(['/pokedex']);
    }

    this._sub = this._pokedexSercive.getPokemon(this.pokemonId)
      .subscribe(pokemon => {
        this.pokemon = pokemon;
        this.isLoading = false;
      });

    this.lowerThenMinId = this.pokemonId < 2 ? true : false;
    this.higherThenMaxId = this.pokemonId > 150 ? true : false;
  }

  toPrevious(): void {
    this._router.navigate([`/pokedex/${this.pokemonId - 1}`]);
  }

  toNext(): void {
    this._router.navigate([`/pokedex/${this.pokemonId + 1}`]);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
