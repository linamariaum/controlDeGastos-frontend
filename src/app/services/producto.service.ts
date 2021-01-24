import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  crearProductoServicio(productoServicio): Observable<any> {
    return this.http.post(environment.APIUrl + '/api/productoServicios/', {
      idItem: productoServicio.idItem,
      idCategoria: productoServicio.idCategoria,
      nombre: productoServicio.nombre,
      descripcion: productoServicio.descripcion,
      unidad: productoServicio.unidad
    });
  }

  consultarProductoServicios(usuario): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/productoServicios/');
  }

  consultarProductoServicio(id: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/productoServicios/' + id);
  }

  consultarProductoServicioPorCategoria(idCategoria: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/productoServicios/categoria/' + idCategoria);
  }

  consultarProductoServicioPorItem(idItem: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/productoServicios/item/' + idItem);
  }

  borrar(id: string) {
    return this.http.delete(environment.APIUrl + '/api/productoServicios/' + id);
  }

  actualizarProductoServicio(id: number, productoServicio): Observable<any> {
    return this.http.put(environment.APIUrl + '/api/productoServicios/' + id, {
      idItem: productoServicio.idItem,
      idCategoria: productoServicio.idCategoria,
      nombre: productoServicio.nombre,
      descripcion: productoServicio.descripcion,
      unidad: productoServicio.unidad
    });
  }

}
