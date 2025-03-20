import {Component, inject} from '@angular/core';
import {ProductShortDtoModel} from '../../models/product-short-dto.model';
import {FormsModule} from '@angular/forms';
import {ProductCardComponent} from '../../components/product-card/product-card.component';
import {ProductService} from '../../services/product.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-index',
  imports: [
    FormsModule,
    ProductCardComponent,
    RouterLink
  ],
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.scss'
})
export class ProductIndexComponent {

  private readonly _productService: ProductService = inject(ProductService);

  products!: ProductShortDtoModel[];

  constructor(
    // private readonly _productService: ProductService
  ) {
    this._productService.findAll().subscribe({
      next: datas => this.products = datas,
      error: err => console.log(err),
    });
  }

}
