import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  crearCategoria(categoria): Observable<any> {
    return this.http.post(environment.APIUrl + '/api/categorias/', {
      nombre: categoria.nombre,
      descripcion: categoria.descripcion,
      tipoCreacion: categoria.tipoCreacion
    });
  }

  consultarCategorias(usuario): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/categorias/');
  }

  consultarCategoria(id: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/categorias/' + id);
  }

  borrar(id: string) {
    return this.http.delete(environment.APIUrl + '/api/categorias/' + id);
  }

  actualizarCategoria(id: number, categoria): Observable<any> {
    return this.http.put(environment.APIUrl + '/api/categorias/' + id, {
      nombre: categoria.nombre,
      descripcion: categoria.descripcion,
      tipoCreacion: categoria.tipoCreacion
    });
  }
}
