import Link from 'next/link';
import * as S from './Style';

interface NavigationItemProps {
  name: string;
  id: number;
  active: boolean;
}

const NavigationItem = ({ name, id, active }: NavigationItemProps) => {
  return (
    <li data-active={active}>
      <Link href={`/categories/${id}`} passHref>
        <S.NavigationItemWrapper active={active}>{name}</S.NavigationItemWrapper>
      </Link>
    </li>
  );
};

export default NavigationItem;
