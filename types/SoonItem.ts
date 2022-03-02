import Brand from './Brand';

export default interface SoonItem {
  id: number;
  name: string;
  originalPrice: number;
  createdAt: string;
  sfId: string;
  minSellingPrice: number;
  ncSellingPrice: number;
  count: number;
  information: string;
  tip: string;
  warning: string;
  discountRate: number;
  askingPrice: number;
  isRefuse: number;
  isBlock: number;
  info: string;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: Brand;
}
