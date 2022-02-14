import * as S from './Style';
import NavigationItem from '../NavigationItem/NavigationItem';
import { useRouter } from 'next/router';
import React from 'react';

const dummy = [
  { category: '카페', categoryId: 2 },
  { category: '땡러리', categoryId: 3 },
  { category: '빵, 아이스크림', categoryId: 4 },
  { category: '피자, 햄버거, 치킨', categoryId: 5 },
  { category: '문화, 게임, 영화', categoryId: 6 },
  { category: '외식, 분식', categoryId: 7 },
  { category: '백화점, 주유, 뷰티', categoryId: 8 },
];

const NavigationBar = () => {
  const { asPath } = useRouter();
  const currentPath = +asPath.split('#')[1];
  // 원래라면 pathname, query로 빼옴
  return (
    <S.NavigationBarWrapper>
      <S.SlideWrapper>
        {React.Children.toArray(
          dummy.map(({ category, categoryId }) => (
            <NavigationItem name={category} id={categoryId} active={categoryId === currentPath} />
          )),
        )}
      </S.SlideWrapper>
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
