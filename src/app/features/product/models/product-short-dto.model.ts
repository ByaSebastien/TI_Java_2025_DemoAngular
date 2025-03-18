export interface ProductShortDtoModel {
  id: number;
  name: string;
  price: number;
  picture: string;
  isAvailable: boolean;
  gender: 'Male' | 'Female';
}
