import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategorySaucer } from '../../models/CategorySaucer';

@Injectable({
  providedIn: 'root'
})
export class CategorySaucersSService {

  API_URI = 'http://54.80.11.131/api/v1';

  constructor(private http: HttpClient) { }

  //METODOS // revisar lamdos a la api
  getCategorySaucers() {    
    return this.http.get(`${this.API_URI}/restaurants/list`);
  }

  getCategorySaucer(id: string) {
    return this.http.get(`${this.API_URI}/restaurants/${id}`);
  }

  saveCategorySaucer(category_saucer: CategorySaucer, headers: any){
    return this.http.post(`${this.API_URI}/category_saucer/register`, category_saucer, headers);
  }

  deleteCategorySaucer(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  //para obtener la respuesta
  //Un observable que me retorna un objeto de tipo producto
  /*updateProduct(id:any , updatedRestaurant: Product):Observable<Product>{
    return this.http.put(`${this.API_URI}/games/${id}`, updatedRestaurant);
  }*/
}