import * as S from './Style';
import { ProductionItem } from '../index';
import React from 'react';

const dummy = [
  {
    brandName: '111',
    productionName: '큰거',
    originalPrice: 100000,
    minSellPrice: 5000,
    size: 'big',
  },
  { brandName: '111', productionName: '작은거', originalPrice: 100000, minSellPrice: 5000 },
  { productionName: '없는 거', originalPrice: 100000, minSellPrice: 5000 },
];

const ProductionList = () => {
  return (
    <S.ProductionListWrapper>
      {React.Children.toArray(
        dummy.map(({ brandName, productionName, originalPrice, minSellPrice, size }) => (
          <ProductionItem
            productionId={1}
            productionName={productionName}
            originalPrice={originalPrice}
            minSellingPrice={minSellPrice}
            brandName={brandName}
            imageUrl={''}
            size={size as 'big' | 'small' | undefined}
          />
        )),
      )}
    </S.ProductionListWrapper>
  );
};

export default ProductionList;
