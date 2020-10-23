import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {  
    path: 'registro', component: UsuarioComponent,
    children: [{ path: '', component: RegistroComponent }]
  },
  {  
    path: 'login', component: UsuarioComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  { path: 'categoria', component: CategoriaComponent },
  { path: '', redirectTo:'/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }