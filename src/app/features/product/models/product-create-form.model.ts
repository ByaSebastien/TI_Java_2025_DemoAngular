export interface ProductCreateFormModel {
  name: string;
  description?: string;
  price: number;
  picture?: string;
  birthday: Date;
  isAvailable: boolean;
  gender: 'Male' | 'Female';
}
