import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Restaurant } from '../../models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  API_URI = 'http://54.80.11.131/api/v1';

  constructor(private http: HttpClient) { }

  //METODOS
  getRestaurants() {    
    return this.http.get(`${this.API_URI}/restaurants/list`);
  }

  getRestaurant(id: string) {
    return this.http.get(`${this.API_URI}/restaurants/${id}`);
  }

  saveRestaurant(restaurant: Restaurant, headers:any){
    return this.http.post(`${this.API_URI}/restaurants/register`, restaurant, headers);
  }

  deleteRestaurant(id: string) {
    return this.http.delete(`${this.API_URI}/restaurants/delete/${id}`);
  }

  //para obtener la respuesta
  //Un observable que me retorna un objeto de tipo producto
  updateRestaurant(id:any , updatedRestaurant: Restaurant):Observable<Restaurant>{
    return this.http.put(`${this.API_URI}/games/${id}`, updatedRestaurant);
  }
}
