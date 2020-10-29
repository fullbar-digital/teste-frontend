import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  steps = [
    { index: 1, text: 'Go to pokedex page (clicking on the pokeball above or in the button below)' },
    { index: 2, text: 'Walkthrough the pokedex page' },
    { index: 3, text: 'Type the pokemon ID or  the pokemon name in the filter' },
    { index: 4, text: 'Click in the detail icon' },
    { index: 5, text: 'Find the information of the Pokemon' },
    { index: 6, text: 'Have Fun :)' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
