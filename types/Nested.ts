import { Category, Brand, ConItem } from 'types';

export default interface Nested extends Category {
  conCategory2s: (Brand & { conItems: ConItem[] })[];
}
