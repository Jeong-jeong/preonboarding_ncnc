import * as S from './Style';
import Link from 'next/link';

interface mokType {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

interface CategoryProps {
  data: mokType;
  size: 43 | 36;
}

const Category = ({ data, size }: CategoryProps) => {
  return (
    <Link href={`#${data.id}`}>
      <S.Category size={size}>
        <S.ImgWrap size={size}>
          <img src={data.imageUrl} alt={data.name} />
        </S.ImgWrap>
        <S.Name size={size}>{data.name}</S.Name>
      </S.Category>
    </Link>
  );
};

export default Category;
