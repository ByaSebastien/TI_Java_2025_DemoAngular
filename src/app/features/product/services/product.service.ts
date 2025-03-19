import {inject, Injectable} from '@angular/core';
import {ProductDetailsDtoModel} from '../models/product-details-dto.model';
import {NotFoundError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProductShortDtoModel} from '../models/product-short-dto.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly _http: HttpClient = inject(HttpClient);

  constructor() {
  }

  findAll() {
    return this._http.get<ProductShortDtoModel[]>(environment.API_URL + '/products');
  }

  findById(id: number) {
    return this._http.get<ProductDetailsDtoModel>(environment.API_URL + `/products/${id}`);
  }

  delete(id: number) {
    return this._http.delete(environment.API_URL + `/products/${id}`);
  }
}
