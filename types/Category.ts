export default interface Category {
  id: number;
  name: string;
  imageUrl: string;
  discountRate?: number;
  createdAt?: string;
  priority?: number;
  info?: string;
}
