import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoria : any = {};
  categorias : any = [];

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
    this.categorias = [
      {
        id: '1',
        nombre: 'Categoria 1',
        descripcion: 'here comes the description'
      },
      {
        id: '2',
        nombre: 'Categoria 2',
        descripcion: 'here comes the description'
      },
      {
        id: '3',
        nombre: 'Categoria 3',
        descripcion: 'here comes the description'
      }
    ];
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
        this.busquedaPorNombre();
        break;
      case 'fechas':
        this.busquedaPorFechas();
        break;
    }
  }

  busquedaPorCodigo() {
  }

  busquedaPorNombre() {
  }

  busquedaPorFechas() {
    let fechas = {
      startDate: `${this.busqueda.fecha[0].getFullYear()}/${this.busqueda.fecha[0].getMonth() + 1}/${this.busqueda.fecha[0].getDate()}`,
      endDate: `${this.busqueda.fecha[1].getFullYear()}/${this.busqueda.fecha[1].getMonth() + 1}/${this.busqueda.fecha[1].getDate()}`
    };
  }

  capturar(categoria){
    this.categoria = categoria;
  }

  modificarCategoria(){

  }

  eliminarCompra(id: string) {
  }

}
