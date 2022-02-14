import Image from 'next/image';

export interface ProductionImageProps {
  imageUrl: string;
  size?: 'big' | 'small';
}

const ProductionImage = ({ imageUrl, size = 'small' }: ProductionImageProps) => {
  const imageSize = size === 'small' ? 70 : 90;
  return (
    <Image
      width={imageSize}
      height={imageSize}
      src={'https://d2lfdrnysfmya6.cloudfront.net/032e1a0c-7b3c-4c18-bace-6b4ee09602fb.jpg'}
      alt={'상품 이미지'}
    />
  );
};

export default ProductionImage;
