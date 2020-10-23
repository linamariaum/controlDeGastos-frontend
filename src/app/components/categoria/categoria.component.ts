import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

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
      case 'producto':
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
  }

  eliminarCompra(id: string) {
  }

}
