import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

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

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot()
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
