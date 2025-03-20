import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {FormErrorComponent} from '../../../../shared/components/form-error/form-error.component';
import {beforeTodayValidator} from '../../../../shared/validators/before-today.validator';

@Component({
  selector: 'app-product-create',
  imports: [
    ReactiveFormsModule,
    FormErrorComponent
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent {

  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _productService: ProductService = inject(ProductService);

  productForm: FormGroup;

  constructor() {
    this.productForm = this._fb.group({
      name: [null, [Validators.required,Validators.maxLength(50)]],
      description: [null, [Validators.maxLength(255)]],
      price: [null, [Validators.required,Validators.min(0)]],
      picture: [null,[]],
      birthday: [null, [Validators.required,beforeTodayValidator()]],
      isAvailable: [true, [Validators.required]],
      gender: ['Male', [Validators.required]],
    });
  }

  submit() {

    this.productForm.markAllAsTouched();

    if(this.productForm.invalid) {
      return;
    }

    this._productService.create(this.productForm.value).subscribe({
      next: () => {
        this._router.navigate(['/product']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}













