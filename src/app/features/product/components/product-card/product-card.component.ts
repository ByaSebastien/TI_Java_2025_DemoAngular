import {Component, Input} from '@angular/core';
import {MoneyPipe} from '../../../../shared/pipes/money.pipe';
import {NgClass, NgStyle, TitleCasePipe} from '@angular/common';
import {ProductShortDtoModel} from '../../models/product-short-dto.model';

@Component({
  selector: 'app-product-card',
  imports: [
    MoneyPipe,
    TitleCasePipe,
    NgClass,
    NgStyle
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input({required:true})
  product!: ProductShortDtoModel;
}
