import { ICategory, IBrand, IConItem } from 'types';

export default interface Nested extends ICategory {
  conCategory2s: (IBrand & { conItems: IConItem[] })[];
}
