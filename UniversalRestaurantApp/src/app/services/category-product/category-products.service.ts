import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryProduct } from '../../models/CategoryProduct';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {
  API_URI = 'http://54.80.11.131/api/v1';

  constructor(private http: HttpClient) { }

  //METODOS // revisar lamdos a la api
  getCategoryProducts() {    
    return this.http.get(`${this.API_URI}/restaurants/list`);
  }

  getCategoryProduct(id: string) {
    return this.http.get(`${this.API_URI}/restaurants/${id}`);
  }

  saveCategoryProduct(category_product: CategoryProduct, headers: any){
    return this.http.post(`${this.API_URI}/category_product/register`, category_product, headers);
  }

  deleteCategoryProduct(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  //para obtener la respuesta
  //Un observable que me retorna un objeto de tipo producto
  /*updateProduct(id:any , updatedRestaurant: Product):Observable<Product>{
    return this.http.put(`${this.API_URI}/games/${id}`, updatedRestaurant);
  }*/
}
