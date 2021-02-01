import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ItemComponent } from './components/item/item.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PuntoCompraComponent } from './components/punto-compra/punto-compra.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';
import { CrearMovimientoComponent } from './components/movimiento/crear-movimiento/crear-movimiento.component';
import { ModificarMovimientoComponent } from './components/movimiento/modificar-movimiento/modificar-movimiento.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'item', component: ItemComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'puntoCompra', component: PuntoCompraComponent },
  { path: 'movimiento', component: MovimientoComponent },
  { path: 'movimiento/registrar', component: CrearMovimientoComponent },
  { path: 'movimiento/modificar/:id', component: ModificarMovimientoComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }