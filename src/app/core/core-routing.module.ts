import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', pathMatch: 'full', loadChildren: () => import('../modules/welcome/welcome.module').then(m => m.WelcomeModule) },
    { path: 'pokedex', loadChildren: () => import('../modules/pokedex/pokedex.module').then(m => m.PokedexModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
