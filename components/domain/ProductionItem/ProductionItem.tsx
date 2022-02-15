import * as S from './Style';
import { ProductionImage, ProductionInfo } from 'components/base';
import Link from 'next/link';
import { ProductionInfoProps } from '../../base/ProductionInfo/ProductionInfo';
import { ProductionImageProps } from '../../base/ProductionImage/ProductionImage';

type ProductionItemProps = ProductionImageProps & ProductionInfoProps & { productionId: number };

const ProductionItem = ({
  imageUrl,
  productionName,
  minSellingPrice,
  originalPrice,
  size,
  brandName,
  productionId,
}: ProductionItemProps) => {
  return (
    <li>
      <Link href={`/items/${productionId}`} passHref>
        <S.ProductionItemWrapper>
          <ProductionImage imageUrl={imageUrl} size={size} />
          <ProductionInfo
            productionName={productionName}
            brandName={brandName}
            minSellingPrice={minSellingPrice}
            originalPrice={originalPrice}
          />
        </S.ProductionItemWrapper>
      </Link>
    </li>
  );
};

export default ProductionItem;
