import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductDetailsDtoModel} from '../../models/product-details-dto.model';

@Component({
  selector: 'app-delete-product-dialog',
  imports: [],
  templateUrl: './delete-product-dialog.component.html',
  styleUrl: './delete-product-dialog.component.scss'
})
export class DeleteProductDialogComponent {

  @Input({required: true})
  product!: ProductDetailsDtoModel;

  @Output()
  private readonly confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  emitConfirm(confirm: boolean) {
    this.confirm.emit(confirm);
  }
}
