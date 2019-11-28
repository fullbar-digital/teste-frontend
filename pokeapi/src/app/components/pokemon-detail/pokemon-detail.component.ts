import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: any;
  moves: any[] = [];
  detailMoves: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
    ) { }

  ngOnInit() {
    this.getPokemon(this.activatedRoute.snapshot.paramMap.get('id'))
  }

  getPokemon(id) {
    this.pokemonService.getPokemon(id).subscribe((pokemon) => {
      console.log(pokemon)
      this.pokemon = pokemon;
      this.getMoves();
    });
  }

  getMoves() {
    this.pokemon.moves.forEach(move => {
      this.moves.push(move);
      this.movesSort();
    });
  }

  movesSort(){
    this.moves.sort((a,b)=>{
      if(Number(a.version_group_details[0].level_learned_at) > Number(b.version_group_details[0].level_learned_at))
        return 1;
      else
        return -1;  
    });
  }

  getDetailsMove(move){
    this.pokemonService.getDetailMove(move).subscribe(res => {
      this.detailMoves.push(res)
      console.log(this.detailMoves);
    })
  }
}
