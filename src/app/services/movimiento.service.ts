import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  constructor(private http: HttpClient) { }

  crearMovimiento(movimiento): Observable<any> {
    return this.http.post(environment.APIUrl + '/api/movimientos/', {
      idUsuario: movimiento.idUsuario,
      idProductoServicio: movimiento.idProductoServicio,
      idPuntoDeCompra: movimiento.idPuntoDeCompra,
      tipoMovimiento: movimiento.tipoMovimiento,
      cantidad: movimiento.cantidad,
      valorUnitario: movimiento.valorUnitario,
      total: movimiento.total
    });
  }

  consultarMovimientos(usuario): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/movimientos/');
  }

  consultarMovimientoPorProducto(idUsuario: number, idProductoServicio: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/movimientos/' + idUsuario + '/' + idProductoServicio);
  }

  consultarMovimientoPorPunto(idUsuario: number, idPuntoCompra: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/movimientos/' + idUsuario + '/' + idPuntoCompra);
  }

  consultarMovimientoPorTipo(idUsuario: number, tipoMovimiento: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/movimientos/' + idUsuario + '/' + tipoMovimiento);
  }

  borrar(id: string) {
    return this.http.delete(environment.APIUrl + '/api/movimientos/' + id);
  }

  actualizarMovimiento(id: number, movimiento): Observable<any> {
    return this.http.put(environment.APIUrl + '/api/movimientos/' + id, {
      idUsuario: movimiento.idUsuario,
      idProductoServicio: movimiento.idProductoServicio,
      idPuntoDeCompra: movimiento.idPuntoDeCompra,
      tipoMovimiento: movimiento.tipoMovimiento,
      cantidad: movimiento.cantidad,
      valorUnitario: movimiento.valorUnitario,
      total: movimiento.total
    });
  }

}
