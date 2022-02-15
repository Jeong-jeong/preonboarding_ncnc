import * as S from './Style';
import NavigationItem from '../NavigationItem/NavigationItem';
import { useRouter } from 'next/router';
import React from 'react';
import { ICategory } from 'types';

interface NavigationBarProps {
  categories: ICategory[];
}
const NavigationBar = ({ categories }: NavigationBarProps) => {
  const { query } = useRouter();

  return (
    <S.NavigationBarWrapper>
      <S.SlideWrapper>
        {React.Children.toArray(
          categories.map(({ name, id }) => (
            <NavigationItem name={name} id={id} active={id === +query.categoryId!} />
          )),
        )}
      </S.SlideWrapper>
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
