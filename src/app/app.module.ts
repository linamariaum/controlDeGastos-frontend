import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
//import { AuthGuard } from './auth/auth.guard';
//import { AuthInterceptor } from './auth/auth.interceptor';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ItemComponent } from './components/item/item.component';
import { PuntoCompraComponent } from './components/punto-compra/punto-compra.component';
import { ProductoComponent } from './components/producto/producto.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';
import { CrearMovimientoComponent } from './components/movimiento/crear-movimiento/crear-movimiento.component';
import { ErrorComponent } from './components/shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    CategoriaComponent,
    ItemComponent,
    PuntoCompraComponent,
    ProductoComponent,
    MovimientoComponent,
    CrearMovimientoComponent,
    ErrorComponent
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
    SweetAlert2Module.forRoot()
  ],
  providers: [UsuarioService, /*AuthGuard,
    ,
    {
      provide : HTTP_INTERCEPTORS,
      //useClass : AuthInterceptor,
      multi : true
    }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
