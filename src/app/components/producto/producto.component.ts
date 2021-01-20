import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  elementos: any = [];
  busqueda: any = {
    tipo: 'codigo',
    busqueda: '',
    fecha: ''
  };
  error = false;

  constructor() { }

  cards = [
    {
      title: 'Producto 1',
      description: 'here comes the description',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Producto 2',
      description: 'here comes the description',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Producto 3',
      description: 'here comes the description',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Producto 4',
      description: 'here comes the description',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Producto 5',
      description: 'here comes the description',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    }
  ];

  slides: any = [[]];

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
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