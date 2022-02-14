import { Category, Brand, ConItem } from 'types';

export interface Nested extends Category {
  conCategory2s: (Brand & { conItems: ConItem[] })[];
}
