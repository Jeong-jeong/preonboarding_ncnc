import Brand from './brand';

export default interface SoonItem {
  id: number;
  name: string;
  originalPrice: number;
  createdAt: string;
  sfId: string;
  minSellingPrice: number;
  ncSellingPrice: number;
  count: number;
  information: any;
  tip: any;
  warning: string;
  discountRate: number;
  askingPrice: number;
  isRefuse: number;
  isBlock: number;
  info: any;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: Brand;
}
