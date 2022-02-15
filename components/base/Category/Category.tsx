import * as S from './Style';
import Link from 'next/link';
import { ICategory } from 'types';
import { useRouter } from 'next/router';

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
            <S.ImgWrap size={size}>
              <img src={imageUrl} alt={`${name} 이미지`} />
            </S.ImgWrap>
            <S.Name size={size}>{name}</S.Name>
          </S.ContentsWrapper>
        </S.CategoryInner>
      </S.Category>
    </Link>
  );
};

export default Category;
