import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  crearItem(item): Observable<any> {
    return this.http.post(environment.APIUrl + '/api/items/', {
      idCategoria: item.idCategoria,
      nombre: item.nombre,
      descripcion: item.descripcion
    });
  }

  consultarItems(usuario): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/items/');
  }

  consultarItem(idCategoria: number, idItem: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/items/' + idCategoria + '/' + idItem);
  }

  consultarItemsPorCategoria(idCategoria: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/items/' + idCategoria);
  }

  borrar(id: string) {
    return this.http.delete(environment.APIUrl + '/api/items/' + id);
  }

  actualizarItem(idCategoria: number, idItem: number, item): Observable<any> {
    return this.http.put(environment.APIUrl + '/api/items/' + idCategoria + '/' + idItem, {
      idCategoria: item.idCategoria,
      nombre: item.nombre,
      descripcion: item.descripcion
    });
  }

}
