import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {  
    path: 'registro', component: UsuarioComponent,
    children: [{ path: '', component: RegistroComponent }]
  },
  {  
    path: 'login', component: UsuarioComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  { path: '', redirectTo:'/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }