import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokedexListComponent } from './components/pokedex-list/pokedex-list.component';
import { PokedexService } from './services/pokedex.service';
import { PokedexDetailsComponent } from './components/pokedex-details/pokedex-details.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokedexListComponent,
    PokedexDetailsComponent
  ],
  imports: [
    PokedexRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [PokedexService]
})
export class PokedexModule { }
