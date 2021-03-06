import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../../../services/restaurant/restaurants.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  restaurants: any = [];

  constructor(private restaurantService: RestaurantsService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
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

  listBuy(restaurant: any){
    this.router.navigateByUrl('/component/user/list-buy', restaurant);
  }

}
