import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.scss']
})
export class SeguroComponent implements OnInit {

  constructor() {
    console.log('segurin creado')
   }

  ngOnInit(): void {
  }

}
