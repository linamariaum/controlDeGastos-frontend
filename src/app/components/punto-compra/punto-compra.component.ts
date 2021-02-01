import { Component, OnInit } from '@angular/core';
import { PuntoCompraService } from '../../services/punto-compra.service';

@Component({
  selector: 'app-punto-compra',
  templateUrl: './punto-compra.component.html',
  styleUrls: ['./punto-compra.component.scss']
})
export class PuntoCompraComponent implements OnInit {

  punto: any = {};
  puntos: any = [];
  cards = [
    {
      nombre: 'Punto 1',
      id: '167',
      descripcion: 'here comes the description'
    },
    {
      nombre: 'Punto 2',
      id: '120',
      descripcion: 'here comes the description',
      estratoEconomico: '3'
    },
    {
      nombre: 'Punto 3',
      id: '016',
      descripcion: 'here comes the description',
      estratoEconomico: '3'
    },
    {
      nombre: 'Punto 4',
      id: '228',
      descripcion: 'here comes the description',
      estratoEconomico: '2'
    },
    {
      nombre: 'Punto 5',
      id: '072',
      descripcion: 'here comes the description',
      estratoEconomico: '3'
    }
  ];
  
  nuevoPunto: any = {
    nombre: '',
    descripcion: '',
    estratoEconomico: ''
  };

  puntoActualizado: any = {
    nombre: '',
    descripcion: '',
    estratoEconomico: ''
  };
  error = false;

  constructor(private puntoCompraService: PuntoCompraService) { }

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos() {
    this.puntoCompraService.consultarPuntosDeCompra().subscribe(data => {
      this.error = false;
      this.puntos = data;
    }, err => {
      this.error = true;
    });
  }

  capturar(card){
    this.punto = card;
  }

  crearPunto(){
    console.log(this.nuevoPunto);
    this.puntoCompraService.crearPuntoDeCompra(this.nuevoPunto).subscribe(data => {
      this.error = false;
    }, err => {
      this.error = true;
    });
  }

  modificarPunto(){
    if (this.puntoActualizado.nombre == '' ) {
      this.puntoActualizado.nombre = this.punto.nombre;
    }
    if (this.puntoActualizado.descripcion == '' ) {
      this.puntoActualizado.descripcion = this.punto.descripcion;
    }
    if (this.puntoActualizado.estratoEconomico == '' ) {
      this.puntoActualizado.estratoEconomico = this.punto.estratoEconomico;
    }
    console.log(this.puntoActualizado);
    this.puntoCompraService.actualizarPuntoDeCompra(this.punto.id, this.puntoActualizado).subscribe(data => {
      this.error = false;
    }, err => {
      this.error = true;
    });
  }

  deleteFile(){}
}
