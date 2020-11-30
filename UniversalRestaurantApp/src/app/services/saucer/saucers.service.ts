import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Saucer } from '../../models/Saucer';


@Injectable({
  providedIn: 'root'
})
export class SaucersService {
  API_URI = 'http://54.80.11.131/api/v1';

  constructor(private http: HttpClient) { }

  //METODOS // revisar lamdos a la api
  getSaucers() {    
    return this.http.get(`${this.API_URI}/restaurants/list`);
  }

  getSaucer(id: string) {
    return this.http.get(`${this.API_URI}/restaurants/${id}`);
  }

  saveSaucer(saucer: Saucer){
    return this.http.post(`${this.API_URI}/saucer/register`, saucer);
  }

  deleteSaucer(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  //para obtener la respuesta
  //Un observable que me retorna un objeto de tipo producto
  updateSaucer(id:any , updatedRestaurant: Saucer):Observable<Saucer>{
    return this.http.put(`${this.API_URI}/games/${id}`, updatedRestaurant);
  }
}
