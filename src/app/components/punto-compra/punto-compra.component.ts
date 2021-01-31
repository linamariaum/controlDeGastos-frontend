import { Component, OnInit } from '@angular/core';
import { PuntoCompraService } from '../../services/punto-compra.service';

@Component({
  selector: 'app-punto-compra',
  templateUrl: './punto-compra.component.html',
  styleUrls: ['./punto-compra.component.scss']
})
export class PuntoCompraComponent implements OnInit {

  punto: any = {};
  cards = [
    {
      title: 'Punto 1',
      id: '167',
      description: 'here comes the description'
    },
    {
      title: 'Punto 2',
      id: '120',
      description: 'here comes the description'
    },
    {
      title: 'Punto 3',
      id: '016',
      description: 'here comes the description'
    },
    {
      title: 'Punto 4',
      id: '228',
      description: 'here comes the description'
    },
    {
      title: 'Punto 5',
      id: '072',
      description: 'here comes the description'
    }
  ];
  
  nuevoPunto: any = {
    nombre: '',
    descripcion: '',
    estratoEconomico: ''
  };
  error = false;

  constructor(private puntoCompraService: PuntoCompraService) { }

  ngOnInit(): void {
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


  deleteFile(){}
}
