import React, { useEffect, useRef } from 'react';
import { ICategory } from 'types';
import { NavigationItem } from 'components/base';
import * as S from './Style';

interface NavigationBarProps {
  categories: ICategory[] | undefined;
  categoryId: string;
}
const NavigationBar = ({ categories, categoryId }: NavigationBarProps) => {
  const scrolledRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // @NOTE: 렌더링 시 active된 DOM 요소로 navigation scroll
    const target = document.querySelector('[data-active="true"]');

    if (target) {
      target.scrollIntoView();
    }
  }, [categories]);

  return (
    <S.NavigationBarWrapper>
      <S.SlideWrapper ref={scrolledRef}>
        {React.Children.toArray(
          categories?.map(({ name, id }) => (
            <NavigationItem name={name} id={id} active={id === +categoryId ?? false} />
          )),
        )}
      </S.SlideWrapper>
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
