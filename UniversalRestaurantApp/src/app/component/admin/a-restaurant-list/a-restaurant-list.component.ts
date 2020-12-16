import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../../../services/restaurant/restaurants.service';

@Component({
  selector: 'app-a-restaurant-list',
  templateUrl: './a-restaurant-list.component.html',
  styleUrls: ['./a-restaurant-list.component.css']
})
export class ARestaurantListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  restaurants: any = [];

  constructor(private restaurantService: RestaurantsService, public router: Router) { }
  
  ngOnInit(): void {    
    this.getRestaurants();
  }
  
  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(
      (res:any) => { console.log(res),
        this.restaurants = res.data[0].retaurants;
      },
      err => console.log(err)
    )
  }

  deleteRestaurant(restaurant_id:string){    
    this.restaurantService.deleteRestaurant(restaurant_id).subscribe(
      (res:any) => { console.log(res)
        alert("Restaurante eliminado");     
        console.log("deberia redireccionar");
        this.router.navigateByUrl('/component/admin/a-restaurant-list');
      },
      err => console.log(err)
    )    
  }
}
