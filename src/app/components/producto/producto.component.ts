import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { ItemService } from '../../services/item.service';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  items: any = [];
  productos: any = [];
  busqueda: any = {
    tipo: 'codigo',
    busqueda: ''
  };
  error = false;
  categorias: any = [];
  nuevoProdSer: any = {
    nombre: '',
    descripcion: ''
  };
  usuarioId: any;
  producto: any = {};
  prodSerActualizado : any = {
    nombre: '',
    descripcion: '',
    unidad: ''
  };
  categoria: any = {};

  constructor(private categoriaService: CategoriaService, private itemService: ItemService, private productoService: ProductoService) { }
  
  ngOnInit() {
    this.productos = [
      {
        id: '1',
        nombre: 'Producto 1',
        descripcion: 'here comes the description',
        idItem: '1',
        idCategoria: '1',
        unidad: 'gramos'
      },
      {
        id: '2',
        nombre: 'Producto 2',
        descripcion: 'here comes the description',
        idItem: '3',
        idCategoria: '1',
        unidad: 'gramos'
      },
      {
        id: '3',
        nombre: 'Producto 3',
        descripcion: 'here comes the description',
        idItem: '1',
        idCategoria: '2',
        unidad: 'gramos'
      },
      {
        id: '4',
        nombre: 'Producto 4',
        descripcion: 'here comes the description',
        idItem: '2',
        idCategoria: '3',
        unidad: 'gramos'
      }
    ];
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

    this.items = [
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

    /*this.productoService.consultarProductoServicios(this.usuarioId).subscribe(data => {
      this.error = false;
      this.productos = data;
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
      case 'categoria':
        this.busquedaPorCategoria();
        break;
      case 'item':
        this.busquedaPorItem();
        break;
    }
  }

  busquedaPorCodigo() {
    this.productoService.consultarProductoServicio(this.busqueda.busqueda).subscribe(data => {
      this.error = false;
      this.productos = data;
    }, err => {
      this.error = true;
    });
  }

  busquedaPorCategoria() {
    this.productoService.consultarProductoServicioPorCategoria(this.busqueda.busqueda).subscribe(data => {
      this.error = false;
      this.productos = data;
    }, err => {
      this.error = true;
    });
  }

  busquedaPorItem() {
    this.productoService.consultarProductoServicioPorItem(this.busqueda.busqueda).subscribe(data => {
      this.error = false;
      this.productos = data;
    }, err => {
      this.error = true;
    });
  }

  capturar(producto){
    this.producto = producto;
    console.log(this.producto);
  }

  crearProdSer(){
    console.log(this.nuevoProdSer);
    this.productoService.crearProductoServicio(this.nuevoProdSer).subscribe(data => {
      this.error = false;
    }, err => {
      this.error = true;
    });
  }

  modificarProducto(){
    this.prodSerActualizado.idCategoria = this.producto.idCategoria;
    this.prodSerActualizado.idItem = this.producto.idItem;
    if (this.prodSerActualizado.nombre == '' ) {
      this.prodSerActualizado.nombre = this.producto.nombre;
    }
    if (this.prodSerActualizado.descripcion == '' ) {
      this.prodSerActualizado.descripcion = this.producto.descripcion;
    }
    if (this.prodSerActualizado.unidad == '' ) {
      this.prodSerActualizado.unidad = this.producto.unidad;
    }
    console.log(this.prodSerActualizado);
    this.productoService.actualizarProductoServicio(this.producto.id, this.prodSerActualizado).subscribe(data => {
      this.error = false;
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

  listarItems(){
    this.itemService.consultarItemsPorCategoria(this.categoria.id).subscribe(data => {
      this.error = false;
      this.items = data;
    }, err => {
      this.error = true;
    });
  }
}