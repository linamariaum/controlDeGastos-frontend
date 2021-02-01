import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppAuthGuard } from './shared/auth/app.authguard';
import { AppRoutingModule } from './app-routing.module';
import { initializeKeycloak } from './shared/auth/keycloak-initializer';
import { SeguroComponent } from './seguro/seguro.component';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ItemComponent } from './components/item/item.component';
import { PuntoCompraComponent } from './components/punto-compra/punto-compra.component';
import { ProductoComponent } from './components/producto/producto.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';
import { CrearMovimientoComponent } from './components/movimiento/crear-movimiento/crear-movimiento.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { ModificarMovimientoComponent } from './components/movimiento/modificar-movimiento/modificar-movimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriaComponent,
    ItemComponent,
    PuntoCompraComponent,
    ProductoComponent,
    MovimientoComponent,
    CrearMovimientoComponent,
    ErrorComponent,
    ModificarMovimientoComponent
    SeguroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot(),
    KeycloakAngularModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    AppAuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
