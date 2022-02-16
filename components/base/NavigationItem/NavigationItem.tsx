import Link from 'next/link';
import { MouseEventHandler } from 'react';
import * as S from './Style';

interface NavigationItemProps {
  name: string;
  id: number;
  active: boolean;
  onClick: MouseEventHandler<HTMLLIElement>;
}

const NavigationItem = ({ name, id, active, onClick }: NavigationItemProps) => {
  return (
    <li onClick={onClick}>
      <Link href={`/categories/${id}`} passHref>
        <S.NavigationItemWrapper active={active}>{name}</S.NavigationItemWrapper>
      </Link>
    </li>
  );
};

export default NavigationItem;
