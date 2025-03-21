export interface ProductDetailsDtoModel {
  id: number;
  name: string;
  description?: string;
  price: number;
  picture: string;
  birthday: Date;
  isAvailable: boolean;
  gender: 'Male' | 'Female';
}
