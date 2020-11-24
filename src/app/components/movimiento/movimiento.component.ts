import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.scss']
})
export class MovimientoComponent implements OnInit {

  elementos: any = [];
  busqueda: any = {
    tipo: 'codigo',
    busqueda: '',
    fecha: ''
  };
  error = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos() {
    this.busqueda = {
      tipo: 'codigo',
      busqueda: '',
      fecha: ''
    };
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
      case 'nombre':
        this.busquedaPorProducto();
        break;
      case 'fechas':
        this.busquedaPorFechas();
        break;
    }
  }

  busquedaPorCodigo() {
  }

  busquedaPorProducto() {
  }

  busquedaPorFechas() {
    let fechas = {
      startDate: `${this.busqueda.fecha[0].getFullYear()}/${this.busqueda.fecha[0].getMonth() + 1}/${this.busqueda.fecha[0].getDate()}`,
      endDate: `${this.busqueda.fecha[1].getFullYear()}/${this.busqueda.fecha[1].getMonth() + 1}/${this.busqueda.fecha[1].getDate()}`
    };
  }

  eliminarCompra(id: string) {
  }

}
