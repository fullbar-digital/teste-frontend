import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  links = [
    { displayName: `Kanto region's Pokedex`, path: '/pokedex', available: true },
    { displayName: `Johto region's Pokedex working in progress...`, path: '', available: false }
  ];

  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}
