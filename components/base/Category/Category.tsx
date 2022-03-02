import * as S from './Style';
import Link from 'next/link';
import Image from 'next/image';
import { ICategory } from 'types';

interface CategoryProps {
  category: ICategory;
  size: 43 | 36;
}

const Category = ({ category, size }: CategoryProps) => {
  const { id, imageUrl, name } = category;

  return (
    <Link href={`${'conCategory1Id' in category ? `/brands/${id}` : `/categories/${id}`}`} passHref>
      <S.Category>
        <S.CategoryInner size={size}>
          <S.ContentsWrapper>
            <Image src={imageUrl} width={size} height={size} alt={`${name} 이미지`} />
            <S.Name size={size}>{name}</S.Name>
          </S.ContentsWrapper>
        </S.CategoryInner>
      </S.Category>
    </Link>
  );
};

export default Category;
