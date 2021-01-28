import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoria : any = {};
  nuevaCategoria : any = {
    nombre: '',
    tipoCreacion: '1'
  };
  categoriaActualizada : any = {};
  categorias : any = [];
  elementos: any = [];
  busqueda: any = {
    tipo: 'codigo',
    busqueda: ''
  };
  error = false;
  usuarioId: any;
  
  constructor(private router: Router, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos() {
    this.busqueda = {
      tipo: 'codigo',
      busqueda: ''
    };
    this.categorias = [
      {
        id: '1',
        nombre: 'Categoria 1',
        descripcion: 'here comes the description',
        tipoCreacion: '1'
      },
      {
        id: '2',
        nombre: 'Categoria 2',
        descripcion: 'here comes the description',
        tipoCreacion: '1'
      },
      {
        id: '3',
        nombre: 'Categoria 3',
        descripcion: 'here comes the description',
        tipoCreacion: '1'
      }
    ];
    /*this.categoriaService.consultarCategorias(this.usuarioId).subscribe(data => {
      this.error = false;
      this.elementos = data;
    }, err => {
      this.error = true;
    });*/
  }

  cambioDeBusqueda() {
    this.busqueda.busqueda = '';
  }

  buscar() {
    switch (this.busqueda.tipo) {
      case 'codigo':
        this.busquedaPorCodigo();
        break;
      case 'nombre':
        this.busquedaPorNombre();
        break;
    }
  }

  busquedaPorCodigo() {
    this.categoriaService.consultarCategoria(this.busqueda.busqueda).subscribe(data => {
      this.error = false;
      this.elementos = data;
    }, err => {
      this.error = true;
    });
  }

  busquedaPorNombre() {
  }

  capturar(categoria){
    this.categoria = categoria;
    console.log(this.categoria);
  }

  modificarCategoria(){
    this.categoriaActualizada.tipoCreacion = this.categoria.tipoCreacion;
    console.log(this.categoriaActualizada);
    this.categoriaService.actualizarCategoria(this.categoria.id, this.categoria).subscribe(data => {
      this.error = false;
    }, err => {
      this.error = true;
    });
  }

  crearCategoria(){
    console.log(this.nuevaCategoria);
    this.categoriaService.crearCategoria(this.nuevaCategoria).subscribe(data => {
      this.error = false;
    }, err => {
      this.error = true;
    });
  }

}
