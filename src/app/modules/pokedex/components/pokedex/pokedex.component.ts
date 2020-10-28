import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  links = [
    { displayName: `Kanto region's Pokédex (Generation III)`, path: '' }
  ];

  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}
