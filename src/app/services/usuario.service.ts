import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  crearUsuario(usuario): Observable<any> {
    return this.http.post(environment.APIUrl + '/api/usuarios/', {
      clave: usuario.clave,
      correo: usuario.correo,
      nombre: usuario.nombre,
      rol: usuario.rol
    });
  }

  consultarUsuarios(): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/usuarios/usuario/');
  }

  consultarUsuario(id: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/usuarios/' + id);
  }

  loginUser(body): Observable<any> {
    return this.http.post(environment.APIUrl + '/api/usuarios/login', {
      /************************************ */
    });
  }

  actualizarUsuario(id: number, usuario): Observable<any> {
    return this.http.post(environment.APIUrl + '/api/usuarios/' + id, {
      clave: usuario.clave,
      correo: usuario.correo,
      nombre: usuario.nombre,
      rol: usuario.rol
    });
  }

}