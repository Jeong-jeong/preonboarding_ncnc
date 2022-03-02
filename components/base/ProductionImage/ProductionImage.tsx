import Image from 'next/image';

export interface ProductionImageProps {
  imageUrl: string;
  size?: 'big' | 'small';
}

const ProductionImage = ({ imageUrl, size = 'small' }: ProductionImageProps) => {
  const imageSize = size === 'small' ? 70 : 90;

  return <Image width={imageSize} height={imageSize} src={imageUrl} alt={'상품 이미지'} />;
};

export default ProductionImage;
