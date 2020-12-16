import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/product/products.service';
import { UsersService } from '../../../services/auth/users.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

     
  product: any = {    
    name : '',
    description:'',
    cost:'',
    stock:0,
    restaurant_id:'',
    categories_product_id:'',
    image:'',
  }
  
  myForm: FormGroup;

  edit: boolean = false;

  constructor(public userService: UsersService,private productsService: ProductsService,
    private router: Router, private activatedRoute: ActivatedRoute, public fb: FormBuilder
    ) {
      this.myForm = this.fb.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        cost: ['', [Validators.required]],
        stock: ['', [Validators.required]],
        restaurant_id: ['', [Validators.required]],
        categories_product_id: ['', [Validators.required]],
        image: ['', [Validators.required]],      
      });
    }

  ngOnInit(): void {
    
  }


  saveNewProduct (){     
    var headers = '';//{ 'Authorization': "Bearer " + this.userService.getToken()};            
    if (this.myForm.valid) {    
      console.log(this.product);
      this.productsService.saveProduct(this.product, headers).subscribe(res => { 
        console.log(res)
        alert("Product registered");         
        this.router.navigateByUrl('/component/product_c');
      },       
        err => console.log(err)        
        );  
    } else {
      alert("Field is required");
    }
    
  }


}
