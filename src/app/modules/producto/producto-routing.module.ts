import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { PantsComponent } from './pages/pants/pants.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { BuzosComponent } from './pages/buzos/buzos.component';

const routes: Routes = [
{
  path:"producto",component:ProductoComponent
},
{
  path:"pants",component:PantsComponent
},
{
  path:"shoes",component:ShoesComponent
},
{
  path:"buzos",component:BuzosComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
