import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PokemonService} from '../../services/pokemon.service';
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonPerPage = 10;
  config: any
  public pokemons: Array<any> = [];

  constructor(private pokemonService: PokemonService, private router: Router,private route: ActivatedRoute,) {
    this.updateCurrentPage();
  }

  ngOnInit() {
    this.getPokemon(1, 150);
  }

  getPokemon(initial, final) {
    for(let i=initial;i<=final;i++){
      this.pokemonService.getPokemon(i).subscribe(res => {
        this.pokemons.push(res);
        this.sortPokemon();
      });
    }
  }

  getPokemonFilter(interval) {
    console.log(interval)
    this.pokemonPerPage = interval[2];
    if(interval[3])
      this.config.itemsPerPage = this.pokemonPerPage;
    else
      this.config.itemsPerPage = interval[1];
    this.pokemons = [];
    for(let i=Number(interval[0]);i<=Number(interval[1]);i++){
      this.pokemonService.getPokemon(i).subscribe(res => {
        this.pokemons.push(res);
        console.log(res)
        this.sortPokemon();
      });
    }
  }

  sortPokemon(){
    this.pokemons.sort((a,b)=>{
      if(Number(a.id) < Number(b.id))
        return -1
      else
        return 1  
    })
  }

  updateCurrentPage(){
    this.route.queryParamMap
    .map(params => params.get("page"))
    .subscribe(page => (this.config.currentPage = page));

    this.config = {
      currentPage: 1,
      itemsPerPage: this.pokemonPerPage
    };
  }

  pageChange(newPage: number) {
    this.updateCurrentPage();
    this.router.navigate([""], { queryParams: { page: newPage } });
  }



}
