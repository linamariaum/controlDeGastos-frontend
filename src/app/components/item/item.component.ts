import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  elementos: any = [];
  busqueda: any = {
    tipo: 'codigo',
    busqueda: ''
  };
  error = false;
  categorias: any = [];
  nuevoItem: any = {
    nombre: '',
    descripcion: ''
  };
  usuarioId: any;
  item: any = {};
  itemActualizado : any = {
    nombre: '',
    descripcion: ''
  };

  constructor(private router: Router, private categoriaService: CategoriaService, private itemService: ItemService) { }

  ngOnInit(): void {
    this.buscarTodos();
    /*this.elementos.forEach(elemento => {
      // Busqueda de nombre de cada categoria
      this.categoriaService.consultarCategoria(elemento.idCategoria).subscribe(data => {
        this.error = false;
        elemento.nombreCategoria = data[0].nombre;
      }, err => {
        this.error = true;
      });
    });*/
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

    this.elementos = [
      {
        idItem: '1',
        nombre: 'Item 1',
        descripcion: 'here comes the description',
        idCategoria: '1'
      },
      {
        idItem: '2',
        nombre: 'Item 2',
        descripcion: 'here comes the description',
        idCategoria: '1'
      },
      {
        idItem: '3',
        nombre: 'Item 3',
        descripcion: 'here comes the description',
        idCategoria: '2'
      }
    ];

    /*this.itemService.consultarItems(this.usuarioId).subscribe(data => {
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
      case 'categoria':
        this.busquedaPorCategoria();
        break;
    }
  }

  busquedaPorCodigo() {
    this.itemService.consultarItem(this.busqueda.categoriaid, this.busqueda.busqueda).subscribe(data => {
      this.error = false;
      this.elementos = data;
    }, err => {
      this.error = true;
    });
  }

  busquedaPorNombre() {
  }

  busquedaPorCategoria() {
    this.itemService.consultarItemsPorCategoria(this.busqueda.busqueda).subscribe(data => {
      this.error = false;
      this.elementos = data;
    }, err => {
      this.error = true;
    });
  }

  listarCategorias(){
    /*this.categoriaService.consultarCategorias(this.usuarioId).subscribe(data => {
      this.error = false;
      this.categorias = data;
    }, err => {
      this.error = true;
    });*/
  }

  crearItem(){
    console.log(this.nuevoItem);
    this.itemService.crearItem(this.nuevoItem).subscribe(data => {
      this.error = false;
    }, err => {
      this.error = true;
    });
  }

  capturar(item){
    this.item = item;
    console.log(this.item);
  }

  modificarItem(){
    this.itemActualizado.idCategoria = this.item.idCategoria;
    if (this.itemActualizado.nombre == '' ) {
      this.itemActualizado.nombre = this.item.nombre;
    }
    if (this.itemActualizado.descripcion == '' ) {
      this.itemActualizado.descripcion = this.item.descripcion;
    }
    console.log(this.itemActualizado);
    this.categoriaService.actualizarCategoria(this.item.idItem, this.itemActualizado).subscribe(data => {
      this.error = false;
    }, err => {
      this.error = true;
    });
  }
}
