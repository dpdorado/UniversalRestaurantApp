import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryProductsService } from '../../../services/category-product/category-products.service';
import { UsersService } from '../../../services/auth/users.service';

@Component({
  selector: 'app-resgister-category-product',
  templateUrl: './resgister-category-product.component.html',
  styleUrls: ['./resgister-category-product.component.css']
})
export class ResgisterCategoryProductComponent implements OnInit {

  category_product: any = {    
    name : '',   
  }
  
  myForm: FormGroup;

  edit: boolean = false;

  constructor(public userService: UsersService,private categoryProductsService: CategoryProductsService,
    private router: Router, private activatedRoute: ActivatedRoute, public fb: FormBuilder
    ) {
      this.myForm = this.fb.group({
        name: ['', [Validators.required]],        
      });
    }

  ngOnInit(): void {
    
  }
  saveNewCategoryProduct (){     
    var headers = { 'Authorization': "Bearer " + this.userService.getToken()};            
    if (this.myForm.valid) {      
      this.categoryProductsService.saveCategoryProduct(this.category_product, headers).subscribe(res => { 
        console.log(res)
        alert("Category Product registered");         
        this.router.navigateByUrl('/component/chef/category-product');
      },       
        err => console.log(err)        
        );  
    } else {
      alert("Field is required");
    }
    
  }

}
