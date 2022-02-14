import Brand from './brand';

export default interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  information: string;
  tip: any;
  warning: string;
  discountRate: number;
  info: any;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: Brand;
  options: Option[];
}

interface Option {
  expireAt: string;
  count: number;
  sellingPrice: number;
}
