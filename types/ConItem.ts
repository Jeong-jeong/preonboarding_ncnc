import Brand from './Brand';

export default interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  information: string;
  tip: null;
  warning: string;
  discountRate: number;
  info: string;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: Brand;
  options: Options[];
}

export interface Options {
  expireAt: string;
  count: number;
  sellingPrice: number;
}
