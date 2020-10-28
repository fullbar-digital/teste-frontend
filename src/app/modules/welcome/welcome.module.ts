import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    WelcomeRoutingModule,
    SharedModule
  ]
})
export class WelcomeModule { }
