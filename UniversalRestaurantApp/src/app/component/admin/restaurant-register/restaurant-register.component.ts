import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestaurantsService } from '../../../services/restaurant/restaurants.service';

@Component({
  selector: 'app-restaurant-register',
  templateUrl: './restaurant-register.component.html',
  styleUrls: ['./restaurant-register.component.css']
})
export class RestaurantRegisterComponent implements OnInit {

  restaurant: any = {
    name: '',
    description: '',
    address: '',
    phone: '',
    images: '' ,
    domain: '',
  }

  myForm: FormGroup;

  edit: boolean = false;

  constructor(private restaurantsService: RestaurantsService,
    private router: Router, private activatedRoute: ActivatedRoute, public fb: FormBuilder
    ) {
      this.myForm = this.fb.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        address: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        images: ['', [Validators.required]],
        domain: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params.id) {
      this.restaurantsService.getRestaurant(params.id)
      .subscribe(
        res => {
          console.log(res)
          this.restaurant = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }


  saveNewRestaurant (){         
    console.log(this.myForm.value);
    if (this.myForm.valid) {      
      this.restaurantsService.saveRestaurant(this.restaurant)
      .subscribe(res => { 
        console.log(res)
        alert("Restaurant registered"); 
        //redirigir a la ruta listar de chef para edittar
        this.router.navigateByUrl('/component/admin/a-restaurant-list');
      },       
        err => console.log(err)        
        );  
    } else {
      alert("Field is required");
    }
    
  }

  updateRestaurant (){
    
  }

}
