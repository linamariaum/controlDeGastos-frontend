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

  consultarMovimientos(idUsuario: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/movimientos/usuario/' + idUsuario);
  }

  consultarMovimiento(id: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/movimientos/' + id);
  }

  consultarMovimientosPorProducto(idUsuario: number, idProductoServicio: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/movimientos/usuario/' + idUsuario + '/producto/' + idProductoServicio);
  }

  consultarMovimientosPorPuntoDeCompra(idUsuario: number, idPuntoDeCompra: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/movimientos/usuario/' + idUsuario + '/punto-compra' + idPuntoDeCompra);
  }

  consultarMovimientosPorTipoMovimiento(idUsuario: number, tipoMovimiento: number): Observable<any> { /**ENDPOINT ? */
    return this.http.get(environment.APIUrl + '/api/movimientos/usuario/' + idUsuario + '/' + tipoMovimiento);
  }

  consultarMovimientosPorFechas(idUsuario: number, fechaInicial: string, fechaFinal: string): Observable<any> { /**ENDPOINT ? */
    return this.http.get(environment.APIUrl + '/api/movimientos/usuario/' + idUsuario + '/fecha-inicial/' + fechaInicial + '/fecha-final/' + fechaFinal);
  }

  consultarMovimientosHastaHoy(idUsuario: number, fechaInicial: string): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/movimientos/usuario/' + idUsuario + '/fecha-inicial/' + fechaInicial);
  }

  consultarMovimientosPorItem(idUsuario: number, idItem: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/movimientos/usuario/' + idUsuario + '/item/' + idItem);
  }

  consultarMovimientosPorCategoria(idUsuario: number, idCategoria: number): Observable<any> {
    return this.http.get(environment.APIUrl + '/api/movimientos/usuario/' + idUsuario + '/categoria/' + idCategoria);
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
