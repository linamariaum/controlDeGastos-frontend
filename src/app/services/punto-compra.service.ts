import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntoCompraService {

  constructor(private http: HttpClient) { }

  crearPuntoDeCompra(puntoDeCompra): Observable<any> {
    return this.http.post(environment.APIUrl + '/api/tiendas/', {
      nombre: puntoDeCompra.nombre,
      descripcion: puntoDeCompra.descripcion,
      estratoEconomico: puntoDeCompra.estratoEconomico
    });
  }

  consultarPuntosDeCompra(): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/tiendas/');
  }

  consultarPuntoDeCompra(id: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/tiendas/' + id);
  }

  borrar(id: string) {
    return this.http.delete(environment.APIUrl + '/api/tiendas/' + id);
  }

  actualizarPuntoDeCompra(id: number, puntoDeCompra): Observable<any> {
    return this.http.put(environment.APIUrl + '/api/tiendas/' + id, {
      nombre: puntoDeCompra.nombre,
      descripcion: puntoDeCompra.descripcion,
      estratoEconomico: puntoDeCompra.estratoEconomico
    });
  }

}
