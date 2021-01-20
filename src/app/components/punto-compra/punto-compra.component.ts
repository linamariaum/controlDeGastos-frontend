import { Component, OnInit } from '@angular/core';

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
      description: 'here comes the description'
    },
    {
      title: 'Punto 2',
      description: 'here comes the description'
    },
    {
      title: 'Punto 3',
      description: 'here comes the description'
    },
    {
      title: 'Punto 4',
      description: 'here comes the description'
    },
    {
      title: 'Punto 5',
      description: 'here comes the description'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  capturar(card){
    this.punto = card;
  }

  deleteFile(){}
}
