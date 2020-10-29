import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule} from '../shared/shared.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
