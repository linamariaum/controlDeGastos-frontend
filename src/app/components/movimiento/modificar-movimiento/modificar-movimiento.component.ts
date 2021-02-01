import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../../services/categoria.service';
import { ItemService } from '../../../services/item.service';
import { ProductoService } from '../../../services/producto.service';
import { PuntoCompraService } from '../../../services/punto-compra.service';
import { MovimientoService } from '../../../services/movimiento.service';

@Component({
  selector: 'app-modificar-movimiento',
  templateUrl: './modificar-movimiento.component.html',
  styleUrls: ['./modificar-movimiento.component.scss']
})
export class ModificarMovimientoComponent implements OnInit {

  items: any = [];
  item: any = {};
  productos: any = [];
  categorias: any = [];
  usuarioId: any;
  producto: any = {};
  categoria: any = {};
  movimiento: any = {
    total: 0
  };
  puntos: any = [];
  productosAgregados: any = [];
  productoAgregar: any = {
    cantidad: '',
    precioUnitario: ''
  };
  guardando = false;
  error = false;

  /**************************************************************************** */

  productoBuscado: any = {
    estado: null
  };

  constructor(private route: ActivatedRoute, private router: Router, private categoriaService: CategoriaService, private itemService: ItemService, private productoService: ProductoService, private puntoCompraService: PuntoCompraService, private movimientoService: MovimientoService) { }

  ngOnInit(): void {

    /** JSON */

    this.puntos = [
      {
        nombre: 'Punto 1',
        id: 167,
        descripcion: 'here comes the description'
      },
      {
        nombre: 'Punto 2',
        id: 120,
        descripcion: 'here comes the description',
        estratoEconomico: '3'
      },
      {
        nombre: 'Punto 3',
        id: 16,
        descripcion: 'here comes the description',
        estratoEconomico: '3'
      },
      {
        nombre: 'Punto 4',
        id: 28,
        descripcion: 'here comes the description',
        estratoEconomico: '2'
      },
      {
        nombre: 'Punto 5',
        id: 72,
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
    //this.listarPuntos();
    this.error = false;
    this.route.params.subscribe(params => {
      this.movimientoService.consultarMovimiento(params.id).subscribe(data => {
        this.movimiento = data;
        this.movimiento.items.forEach(producto => {
          this.productosAgregados.push(producto);
          //this.facturaCompleta.push(producto);
        })
      }, err => {
        this.error = true;
      });
    });
    this.puntos = this.puntos
      .filter(punto => ((punto.idPuntoDeCompra != this.movimiento.idPuntoDeCompra)));
  }

  buscarProducto(referencia: string, estado: string) {
    let referenciaAux: string;
    this.limpiarCampos();
  }

  agregarProducto() {
    /*this.productoService.consultarProductoServicio(this.productoAgregar.idProductoServicio).subscribe(data => {
      this.error = false;
      this.productoAgregar.nombre = data[0].nombre;
    }, err => {
      this.error = true;
    });*/
    this.productoAgregar.neto = this.productoAgregar.cantidad * this.productoAgregar.precioUnitario;
    this.productosAgregados.push(this.productoAgregar);
    console.log(this.productosAgregados);
    this.movimiento.total += this.productoAgregar.neto;
    //this.eliminarProducto(this.productoBuscado);
  }

  eliminarProducto(produc: any) {
    this.productosAgregados = this.productosAgregados
      .filter(producto => ((producto.idProductoServicio != produc.idProductoServicio)));
    this.movimiento.total -= produc.neto;
  }

  modificarMovimiento() {
    //this.compra.fecha = this.obtenerFecha();
    this.guardando = true;
    this.movimiento.items = this.productosAgregados;
    if (this.movimiento.tipoMovimiento == 'informativo') {
      this.movimiento.tipoMovimiento = 0;
    } else {
      this.movimiento.tipoMovimiento = 1;
    }
    console.log(this.movimiento);
    this.movimientoService.actualizarMovimiento(this.movimiento.id, this.movimiento).subscribe(data => {
      this.error = false;
      this.router.navigate(['/movimiento']);
    }, err => {
      this.guardando = false;
      this.error = true;
    });
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
    this.productoAgregar = {
      cantidad: '',
      precioUnitario: ''
    };
  }

  listarCategorias() {
    this.categoriaService.consultarCategorias(this.usuarioId).subscribe(data => {
      this.error = false;
      this.categorias = data;
    }, err => {
      this.error = true;
    });
  }

  listarItems() {
    this.itemService.consultarItemsPorCategoria(this.categoria.id).subscribe(data => {
      this.error = false;
      this.items = data;
    }, err => {
      this.error = true;
    });
  }

  listarProductos() {
    this.productoService.consultarProductoServicioPorItem(this.item.id).subscribe(data => {
      this.error = false;
      this.productos = data;
    }, err => {
      this.error = true;
    });
  }

  listarPuntos() {
    this.puntoCompraService.consultarPuntosDeCompra().subscribe(data => {
      this.error = false;
      this.puntos = data;
    }, err => {
      this.error = true;
    });
  }

}
