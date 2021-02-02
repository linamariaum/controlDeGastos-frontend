import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { ItemService } from '../../services/item.service';
import { ProductoService } from '../../services/producto.service';
import { PuntoCompraService } from '../../services/punto-compra.service';
import { MovimientoService } from '../../services/movimiento.service';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.scss']
})
export class MovimientoComponent implements OnInit {

  items: any = [];
  item: any = {};
  productos: any = [];
  categorias: any = [];
  usuarioId: any;
  producto: any = {};
  categoria: any = {};
  movimientos: any = [
    {
      id: '1',
      idUsuario: '1',
      idProductoServicio: '1',
      idPuntoDeCompra: '1',
      tipoMovimiento: '0',
      cantidad: 1,
      valorUnitario: 2000,
      total: 40000,
      fecha: '13/01/21'
    },
    {
      id: '2',
      idUsuario: '1',
      idProductoServicio: '1',
      idPuntoDeCompra: '1',
      tipoMovimiento: '0',
      cantidad: 1,
      valorUnitario: 25000,
      total: 2000,
      fecha: '19/01/21'
    },
    {
      id: '3',
      idUsuario: '1',
      idProductoServicio: '1',
      idPuntoDeCompra: '1',
      tipoMovimiento: '1',
      cantidad: 1,
      valorUnitario: 78000,
      total: 2000,
      fecha: '22/01/21'
    }
  ];

  busqueda: any = {
    tipo: 'codigo',
    busqueda: '',
    fecha: ''
  };
  error = false;

  constructor(private router: Router, private categoriaService: CategoriaService, private itemService: ItemService, private productoService: ProductoService, private puntoCompraService: PuntoCompraService, private movimientoService: MovimientoService) { }

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos() {
    this.busqueda = {
      tipo: 'codigo',
      busqueda: '',
      fecha: ''
    };
    /*this.movimientoService.consultarMovimientos(this.usuarioId).subscribe(data => {
      this.error = false;
      this.movimientos = data;
    }, err => {
      this.error = true;
    });*/
  }

  cambioDeBusqueda() {
    this.busqueda.busqueda = '';
    this.busqueda.fecha = '';
  }

  buscar() {
    switch (this.busqueda.tipo) {
      case 'codigo':
        this.busquedaPorCodigo();
        break;
      case 'tipo':
        this.busquedaPorTipo();
        break;
      case 'punto':
        this.busquedaPorPunto();
        break;
      case 'fechas':
        this.busquedaPorFechas();
        break;
    }
  }

  busquedaPorCodigo() {
    this.movimientoService.consultarMovimiento(this.busqueda.busqueda).subscribe(data => {
      this.error = false;
      this.movimientos = data;
    }, err => {
      this.error = true;
    });
  }

  busquedaPorTipo() {
    this.movimientoService.consultarMovimientosPorTipoMovimiento(this.usuarioId, this.busqueda.busqueda).subscribe(data => {
      this.error = false;
      this.movimientos = data;
    }, err => {
      this.error = true;
    });
  }

  busquedaPorPunto(){
    this.movimientoService.consultarMovimientosPorPuntoDeCompra(this.usuarioId, this.busqueda.busqueda).subscribe(data => {
      this.error = false;
      this.movimientos = data;
    }, err => {
      this.error = true;
    });
  }

  busquedaPorFechas() {
    
    let fechas = {
      startDate: `${this.busqueda.fecha[0].getFullYear()}/${this.busqueda.fecha[0].getMonth() + 1}/${this.busqueda.fecha[0].getDate()}`,
      endDate: `${this.busqueda.fecha[1].getFullYear()}/${this.busqueda.fecha[1].getMonth() + 1}/${this.busqueda.fecha[1].getDate()}`
    };
    console.log(fechas.startDate);
    this.movimientoService.consultarMovimientosPorFechas(this.usuarioId, fechas.startDate, fechas.endDate).subscribe(data => {
      this.error = false;
      this.movimientos = data;
    }, err => {
      this.error = true;
    });
  }

  modificarMovimiento(id: any) {
    this.router.navigate(['movimiento/modificar', id]);
  }

  eliminarCompra(id: string) {
  }

}
