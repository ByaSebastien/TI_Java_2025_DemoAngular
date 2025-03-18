import { Component } from '@angular/core';
import {ProductShortDtoModel} from '../../models/product-short-dto.model';
import {NgClass, NgForOf, NgIf, NgStyle, TitleCasePipe} from '@angular/common';
import {MoneyPipe} from '../../../../shared/pipes/money.pipe';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-index',
  imports: [
    NgForOf,
    MoneyPipe,
    TitleCasePipe,
    NgIf,
    NgClass,
    NgStyle,
    FormsModule
  ],
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.scss'
})
export class ProductIndexComponent {

  products: ProductShortDtoModel[];
  lowPrice: number = 0;
  highPrice: number = 100;

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Rocko si bully',
        price: 5999,
        picture: './assets/images/Taureau_cul.jpg',
        isAvailable: true,
        gender: 'Male',
      },
      {
        id: 2,
        name: 'Rockette si catty',
        price: 3599,
        picture: './assets/images/chat_cul.jpg',
        isAvailable: false,
        gender: 'Female',
      },
      {
        id: 3,
        name: 'Rocko si monkey',
        price: 7999,
        picture: './assets/images/babouin_cul.jpg',
        isAvailable: true,
        gender: 'Male',
      },
    ];
  }

  filter() {
    console.log(`min : ${this.lowPrice} | max : ${this.highPrice}`);
  }

}
