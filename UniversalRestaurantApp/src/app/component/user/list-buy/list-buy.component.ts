import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
//import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductsService } from '../../../services/product/products.service';

@Component({
  selector: 'app-list-buy',
  templateUrl: './list-buy.component.html',
  styleUrls: ['./list-buy.component.css']
})
export class ListBuyComponent implements OnInit {

  //@HostBinding('class') classes = 'row';

  products: any = [];
  saucers: any = [];
  idRestaurante: any;
  //product: Product;

  //constructor(private productService: ProductsService,private shoppingCartservice: ShoppingCartService, private activatedRoute: ActivatedRoute) { }
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {      
    console.log("Entrando en la vista");
    var parametros = this.activatedRoute.snapshot.params;
    this.idRestaurante = parametros.id;   
    console.log(parametros.id);        
    console.log("Listando productos");
    this.getProducts(parametros.id);
    console.log("Listando saucer");
    this.getPlates(parametros.id);
  }



  getProducts(id: string){
    this.productService.getProducts(id).subscribe(
      (res:any) => { console.log(res),
        this.products = res.data[0].products;
      },
      err => console.log(err)
    )
  };

  getPlates(id: string){
    this.productService.getPlates(id).subscribe(
      (res:any) => { console.log(res),
        this.saucers = res.data[0].saucers;
      },
      err => console.log(err)
    )
  };

  /*addItem(idProducto: any){
    let productoEnv = {
      "product_id" : idProducto,
      "quantity" : 1
    };    

    this.shoppingCartservice.addItem(productoEnv).subscribe(
      (res:any) => { console.log(res)
      },
      err => console.log(err)
    )
  };*/
}
