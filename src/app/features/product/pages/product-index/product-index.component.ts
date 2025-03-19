import {Component, inject} from '@angular/core';
import {ProductShortDtoModel} from '../../models/product-short-dto.model';
import {FormsModule} from '@angular/forms';
import {ProductCardComponent} from '../../components/product-card/product-card.component';
import {ProductService} from '../../services/product.service';
import {RouterLink} from '@angular/router';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-product-index',
  imports: [
    FormsModule,
    ProductCardComponent,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.scss'
})
export class ProductIndexComponent {

  private readonly _productService: ProductService = inject(ProductService);

  products!: ProductShortDtoModel[];
  lowPrice: number = 0;
  highPrice: number = 100;

  constructor(
    // private readonly _productService: ProductService
  ) {
    this._productService.findAll().subscribe({
      next: datas => this.products = datas,
      error: err => console.log(err),
    });
  }

  filter() {
    console.log(`min : ${this.lowPrice} | max : ${this.highPrice}`);
  }

}
