import {Component, inject} from '@angular/core';
import {ProductDetailsDtoModel} from '../../models/product-details-dto.model';
import {DatePipe} from '@angular/common';
import {MoneyPipe} from '../../../../shared/pipes/money.pipe';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  imports: [
    DatePipe,
    MoneyPipe,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  private readonly _productService: ProductService = inject(ProductService);
  private readonly _ar: ActivatedRoute = inject(ActivatedRoute);

  product!: ProductDetailsDtoModel;

  constructor() {
    let id = + this._ar.snapshot.params['id'];
    this._productService.findById(id).subscribe({
      next: datas => this.product = datas,
      error: err => console.log(err),
    });
  }
}
