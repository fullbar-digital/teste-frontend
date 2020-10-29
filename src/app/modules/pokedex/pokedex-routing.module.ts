import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedexListComponent } from './components/pokedex-list/pokedex-list.component';
import { PokedexDetailsComponent } from './components/pokedex-details/pokedex-details.component';

const routes: Routes = [{
  path: '', component: PokedexComponent, children: [
    { path: '', pathMatch: 'full', component: PokedexListComponent },
    { path: ':pokemonId', component: PokedexDetailsComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
