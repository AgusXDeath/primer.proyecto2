import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { PantsComponent } from './pages/pants/pants.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { BuzosComponent } from './pages/buzos/buzos.component';


@NgModule({
  declarations: [
    ProductoComponent,
    PantsComponent,
    ShoesComponent,
    BuzosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
