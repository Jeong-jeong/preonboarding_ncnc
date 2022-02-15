import Category from './Category';

export default interface Brand {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  adminUserId: number;
  priority: number;
  createdAt: string;
  info: any;
  conCategory1: Category;
}
