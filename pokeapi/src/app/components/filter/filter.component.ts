import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() interval = new EventEmitter(); 

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {

  }

  filter(initial, final, pokemonPerPage, pagination){
    console.log('paginator', pagination);
    this.interval.emit([initial, final, pokemonPerPage, pagination]);
  }

}
