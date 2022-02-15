import React from 'react';
import * as S from './Style';
import { Category } from 'components/base';
import { ICategory } from 'types';

interface CategoryListProps {
  categories: ICategory[];
  size: 43 | 36;
}

const CategoryList = ({ categories, size }: CategoryListProps) => {
  return (
    <S.CategoryContainer>
      {categories &&
        React.Children.toArray(
          categories.map((category) => <Category category={category} size={size} />),
        )}
    </S.CategoryContainer>
  );
};

export default CategoryList;
