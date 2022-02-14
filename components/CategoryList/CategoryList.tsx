import React from 'react';
import * as S from './Style';
import { Category } from '/components';

interface mokType {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

interface CategoryListProps {
  data: mokType[];
  size: 43 | 36;
}

const CategoryList = ({ data, size }: CategoryListProps) => {
  return (
    <S.SampleBg>
      <S.CategoryContainer>
        {data &&
          React.Children.toArray(data.map((data) => <Category data={data} size={size}></Category>))}
      </S.CategoryContainer>
    </S.SampleBg>
  );
};

export default CategoryList;
