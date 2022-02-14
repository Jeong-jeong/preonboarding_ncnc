export default interface Category {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
  createdAt?: string;
  priority?: number;
  info?: string;
}
