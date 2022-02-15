import * as S from './Style';
import { getDiscount } from '../../../utils/fucntions';

export interface ProductionInfoProps {
  brandName?: string;
  productionName: string;
  originalPrice: number;
  minSellingPrice: number;
}

const ProductionInfo = ({
  brandName,
  productionName,
  originalPrice,
  minSellingPrice,
}: ProductionInfoProps) => {
  return (
    <S.ProductionInfoWrapper>
      {brandName && <S.BrandName>{brandName}</S.BrandName>}
      <S.ProductionName>{productionName}</S.ProductionName>
      <S.PriceTab>
        <S.Discount>{getDiscount(originalPrice, minSellingPrice)}%</S.Discount>
        <S.OriginalPrice>{minSellingPrice.toLocaleString()}원</S.OriginalPrice>
        <S.MinPrice>{originalPrice.toLocaleString()}원</S.MinPrice>
      </S.PriceTab>
    </S.ProductionInfoWrapper>
  );
};

export default ProductionInfo;
