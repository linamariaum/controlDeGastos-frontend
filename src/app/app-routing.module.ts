import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ItemComponent } from './components/item/item.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PuntoCompraComponent } from './components/punto-compra/punto-compra.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';
import { CrearMovimientoComponent } from './components/movimiento/crear-movimiento/crear-movimiento.component';
import { ModificarMovimientoComponent } from './components/movimiento/modificar-movimiento/modificar-movimiento.component';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SeguroComponent } from './seguro/seguro.component';
import { AppAuthGuard } from './shared/auth/app.authguard';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: 'seguro',
    component: SeguroComponent,
    canActivate: [AppAuthGuard]
  },
  { path: 'home', component: HomeComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'item', component: ItemComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'puntoCompra', component: PuntoCompraComponent },
  { path: 'movimiento', component: MovimientoComponent },
  { path: 'movimiento/registrar', component: CrearMovimientoComponent },
  { path: 'movimiento/modificar/:id', component: ModificarMovimientoComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}