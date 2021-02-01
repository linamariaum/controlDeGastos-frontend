import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../services/categoria.service';
import { ItemService } from '../../../services/item.service';
import { ProductoService } from '../../../services/producto.service';
import { PuntoCompraService } from '../../../services/punto-compra.service';
import { MovimientoService } from '../../../services/movimiento.service';

@Component({
  selector: 'app-crear-movimiento',
  templateUrl: './crear-movimiento.component.html',
  styleUrls: ['./crear-movimiento.component.scss']
})
export class CrearMovimientoComponent implements OnInit {

  items: any = [];
  item: any = {};
  productos: any = [];
  categorias: any = [];
  usuarioId: any;
  producto: any = {};
  categoria: any = {};
  movimiento: any = {};
  puntos: any = [];
  productosAgregados: any = [];

  /**************************************************************************** */
  listaAlmacenes: any = [];
  productosCompra: any = [];
  productoCompra: any = {};
  productosNuevos: any = [];
  productoNuevo: any = {};
  productosAgrgadosCompleto: any = [];
  productoBuscado: any = {
    estado: null
  };
  compra: any = {
    neto: 0
  };
  esProductoNuevo = false;
  activarCamposCompra = false;
  productosNuevosGuardados = 0;
  cantidad = 0;
  infoProducCompleta = true;
  infoCompraCompleta = true;
  guardando = false;
  error = false;

  constructor(private router: Router, private categoriaService: CategoriaService, private itemService: ItemService, private productoService: ProductoService, private puntoCompraService: PuntoCompraService, private movimientoService: MovimientoService) { }

  ngOnInit(): void {

    /** JSON */

  this.puntos = [
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

  }

  buscarProducto(referencia: string, estado: string) {
    let referenciaAux: string;
    this.limpiarCampos();
  }

  agregarProducto() {
    this.productoBuscado.cantidadDisponible = this.cantidad;
    this.eliminarProducto(this.productoBuscado);
  }

  eliminarProducto(item: any) {
  }

  guardarCompra() {
    this.compra.fecha = this.obtenerFecha();
    this.guardando = true;
  }

  obtenerFecha() {
    const fecha = new Date();
    const dd = fecha.getDate();
    const mm = fecha.getMonth() + 1;
    const yyyy = fecha.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
  }

  limpiarCampos() {
    this.listarCategorias();
    this.productoBuscado = {
      estado: null
    };
    this.cantidad = 0;
    this.esProductoNuevo = false;
    this.activarCamposCompra = false;
  }


  listarCategorias(){
    this.categoriaService.consultarCategorias(this.usuarioId).subscribe(data => {
      this.error = false;
      this.categorias = data;
    }, err => {
      this.error = true;
    });
  }

  listarItems(){
    this.itemService.consultarItemsPorCategoria(this.categoria.id).subscribe(data => {
      this.error = false;
      this.items = data;
    }, err => {
      this.error = true;
    });
  }

  listarProductos(){
    this.productoService.consultarProductoServicioPorItem(this.item.id).subscribe(data => {
      this.error = false;
      this.productos = data;
    }, err => {
      this.error = true;
    });
  }

  listarPuntos(){
    this.puntoCompraService.consultarPuntosDeCompra().subscribe(data => {
      this.error = false;
      this.puntos = data;
    }, err => {
      this.error = true;
    });
  }

}
