import * as S from './Style';
import { ProductionItem } from '../index';
import React from 'react';
import { IConItem } from 'types';

interface ProductionListProps {
  conItems: IConItem[];
}

const ProductionList = ({ conItems }: ProductionListProps) => {
  return (
    <S.ProductionListWrapper>
      {React.Children.toArray(
        conItems.map(({ name, id, originalPrice, minSellingPrice, imageUrl, conCategory2 }) => (
          <ProductionItem
            productionId={id}
            productionName={name}
            originalPrice={originalPrice}
            minSellingPrice={minSellingPrice}
            imageUrl={imageUrl}
            brandName={conCategory2?.name}
          />
        )),
      )}
    </S.ProductionListWrapper>
  );
};

export default ProductionList;
