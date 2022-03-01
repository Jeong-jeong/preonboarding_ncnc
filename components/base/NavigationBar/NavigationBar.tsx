import React, { useEffect, useRef } from 'react';
import { ICategory } from 'types';
import { NavigationItem } from 'components/base';
import { useLocalStorage } from 'hooks';
import * as S from './Style';

interface NavigationBarProps {
  categories: ICategory[] | undefined;
  categoryId: string;
}
const NavigationBar = ({ categories, categoryId }: NavigationBarProps) => {
  const scrolledRef = useRef<HTMLUListElement>(null);
  const [storedValue, setValue] = useLocalStorage('navigationAcitvedX', 0);

  const handleClick = (e: React.MouseEvent<HTMLLIElement> | React.TouchEvent<HTMLLIElement>) => {
    // @NOTE: 새로고침 후에도 actived 위치 유지
    const ul = e.currentTarget?.closest('ul');
    if (ul !== null) {
      setValue(ul.scrollLeft);
    }
  };

  useEffect(() => {
    if (scrolledRef.current) {
      scrolledRef.current.scrollTo(storedValue, 0);
    }
  }, [storedValue]);

  return (
    <S.NavigationBarWrapper>
      <S.SlideWrapper ref={scrolledRef}>
        {React.Children.toArray(
          categories?.map(({ name, id }) => (
            <NavigationItem
              name={name}
              id={id}
              active={id === +categoryId ?? false}
              onClick={handleClick}
            />
          )),
        )}
      </S.SlideWrapper>
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
