import React, { MouseEvent } from 'react';
import * as S from './Style';

interface mokType {
  imageUrl: string;
  name: string;
}

interface CategoryProps {
  data: mokType[];
  size: 43 | 36;
}

const CategoryList = ({ data, size }: CategoryProps) => {
  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    console.log('click');
  };

  return (
    <S.SampleBg>
      <S.CategoryContainer>
        {data &&
          React.Children.toArray(
            data.map((data) => (
              <S.Category size={size} onClick={clickHandler}>
                <S.Img size={size}>
                  <img src={data.imageUrl} alt={data.name} />
                </S.Img>
                <S.Name size={size}>{data.name}</S.Name>
              </S.Category>
            )),
          )}
      </S.CategoryContainer>
    </S.SampleBg>
  );
};

export default CategoryList;
