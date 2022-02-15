import * as S from './Style';
import Link from 'next/link';
import { ICategory } from 'types';

interface CategoryProps {
  category: ICategory;
  size: 43 | 36;
}

const Category = ({ category, size }: CategoryProps) => {
  const { id, imageUrl, name } = category;
  return (
    <Link href={`${id}`}>
      <S.Category size={size}>
        <S.ImgWrap size={size}>
          <img src={imageUrl} alt={`${name} 이미지`} />
        </S.ImgWrap>
        <S.Name size={size}>{name}</S.Name>
      </S.Category>
    </Link>
  );
};

export default Category;
