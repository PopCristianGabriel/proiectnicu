import { ProductDao } from './Product';

export class ShopDetailsDao{
  shopName: string;
  products: ProductDao[];

  constructor(shopDetails: any = {}){
    this.shopName = shopDetails.shopName;
    this.products = shopDetails.productDtos;
  }
}
