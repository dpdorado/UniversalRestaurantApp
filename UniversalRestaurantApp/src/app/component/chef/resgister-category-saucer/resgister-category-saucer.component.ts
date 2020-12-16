import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorySaucersSService } from '../../../services/category-saucer/category-saucers-s.service';
import { UsersService } from '../../../services/auth/users.service';


@Component({
  selector: 'app-resgister-category-saucer',
  templateUrl: './resgister-category-saucer.component.html',
  styleUrls: ['./resgister-category-saucer.component.css']
})
export class ResgisterCategorySaucerComponent implements OnInit {
  category_saucer: any = {    
    name : '',   
  }
  
  myForm: FormGroup;

  edit: boolean = false;

  constructor(public userService: UsersService,private categorySaucersService: CategorySaucersSService,
    private router: Router, private activatedRoute: ActivatedRoute, public fb: FormBuilder
    ) {
      this.myForm = this.fb.group({
        name: ['', [Validators.required]],        
      });
    }

  ngOnInit(): void {
    
  }
  saveNewCategorySaucer(){     
    var headers = { 'Authorization': "Bearer " + this.userService.getToken()};            
    if (this.myForm.valid) {      
      this.categorySaucersService.saveCategorySaucer(this.category_saucer, headers).subscribe(res => { 
        console.log(res)
        alert("Category saucer registered");         
        this.router.navigateByUrl('/component/chef/category-product');
      },       
        err => console.log(err)        
        );  
    } else {
      alert("Field is required");
    }
    
  }


}
