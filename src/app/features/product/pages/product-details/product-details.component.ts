import { Component } from '@angular/core';
import {ProductDetailsDtoModel} from '../../models/product-details-dto.model';
import {DatePipe} from '@angular/common';
import {MoneyPipe} from '../../../../shared/pipes/money.pipe';
import {DeleteProductDialogComponent} from '../../components/delete-product-dialog/delete-product-dialog.component';

@Component({
  imports: [
    DatePipe,
    MoneyPipe,
    DeleteProductDialogComponent
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  product: ProductDetailsDtoModel;
  cartItems: ProductDetailsDtoModel[] = [];
  showDialog: boolean = false;

  constructor() {
    console.log(this.cartItems);
    this.product = {
      id: 1,
      name: 'Rocko si bully',
      description: 'Croque moi',
      price: 5999,
      picture: './assets/images/Taureau_cul.jpg',
      birthday: new Date(1993,1,22),
    };
  }

  addToCart(): void {
    this.cartItems.push(this.product);
    console.log(this.cartItems);
  }

  askToDelete(): void {
    this.showDialog = true;
  }

  confirmDelete(wantToDelete: boolean): void {
    if(wantToDelete) {
      this.cartItems = [];
    }
    this.showDialog = false;
  }
}
