import * as S from './Style';

export interface ProductionImageProps {
  imageUrl: string;
  size?: 'big' | 'small';
}

const ProductionImage = ({ imageUrl, size = 'small' }: ProductionImageProps) => {
  return (
    <S.ProductionImageWrapper
      size={size}
      src={'https://d2lfdrnysfmya6.cloudfront.net/032e1a0c-7b3c-4c18-bace-6b4ee09602fb.jpg'}
    />
  );
};

export default ProductionImage;
