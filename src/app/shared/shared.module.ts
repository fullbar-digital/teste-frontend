import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { LazyLoadingImgDirective } from './directives/lazy-loading-img.directive';

const modules = [
  CommonModule,
  MaterialModule,
  FlexLayoutModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [LazyLoadingImgDirective],
  imports: [...modules],
  exports: [...modules, LazyLoadingImgDirective]
})
export class SharedModule { }
