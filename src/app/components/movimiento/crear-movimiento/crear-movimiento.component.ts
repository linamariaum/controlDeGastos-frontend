import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-movimiento',
  templateUrl: './crear-movimiento.component.html',
  styleUrls: ['./crear-movimiento.component.scss']
})
export class CrearMovimientoComponent implements OnInit {

  listaAlmacenes: any = [];
  productosCompra: any = [];
  productoCompra: any = {};
  productosNuevos: any = [];
  productoNuevo: any = {};
  productosAgrgadosCompleto: any = [];
  productoBuscado: any = {
    estado: null
  };
  compra: any = {
    neto: 0
  };
  esProductoNuevo = false;
  activarCamposCompra = false;
  productosNuevosGuardados = 0;
  cantidad = 0;
  infoProducCompleta = true;
  infoCompraCompleta = true;
  guardando = false;
  error = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarProducto(referencia: string, estado: string) {
    let referenciaAux: string;
    this.limbiarCampos();
  }

  agregarProducto() {
    this.productoBuscado.cantidadDisponible = this.cantidad;
    this.eliminarProducto(this.productoBuscado);
  }

  eliminarProducto(item: any) {
  }

  guardarCompra() {
    this.compra.fecha = this.obtenerFecha();
    this.guardando = true;
  }

  obtenerFecha() {
    const fecha = new Date();
    const dd = fecha.getDate();
    const mm = fecha.getMonth() + 1;
    const yyyy = fecha.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
  }

  limbiarCampos() {
    this.productoBuscado = {
      estado: null
    };
    this.cantidad = 0;
    this.esProductoNuevo = false;
    this.activarCamposCompra = false;
  }

}
