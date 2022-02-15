import { GetServerSideProps } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { IConItem } from 'types';
import { getConItem } from 'api';
import { MenuBar, OptionBox, BuyButton } from 'components/base';
import { ProductionItem } from 'components/domain';
import { IcoArrow } from 'public/images';
import { useOption } from 'hooks';
import Router from 'next/router';
import * as S from './Style';

interface ItemsPageProps {
  data: {
    conItem: IConItem;
  };
}

const ItemsPage = ({ data }: ItemsPageProps) => {
  const { conItem } = data;
  const { toggle, isActive, isChecked, setIsChecked } = useOption({ initialState: false });
  const { imageUrl, name, minSellingPrice, originalPrice, conCategory2, id, options, warning } =
    conItem;

  return (
    <S.ItemsPageWrapper>
      <MenuBar onClick={() => Router.back()}>
        <IcoArrow />
      </MenuBar>
      <S.ProductWrapper>
        <ProductionItem
          imageUrl={imageUrl}
          productionName={name}
          minSellingPrice={minSellingPrice}
          originalPrice={originalPrice}
          size="big"
          brandName={conCategory2.name}
          productionId={id}
        />
        {/*<OptionBox*/}
        {/*  options={options}*/}
        {/*  warning={warning}*/}
        {/*  originalPrice={originalPrice}*/}
        {/*  toggle={toggle}*/}
        {/*  isActive={isActive}*/}
        {/*  isChecked={isChecked}*/}
        {/*  setIsChecked={setIsChecked}*/}
        {/*/>*/}
      </S.ProductWrapper>
      <BuyButton checkValue={!isActive} toggle={toggle}>
        {isActive ? '구매하기' : isChecked ? '구매하기' : '옵션 선택하기'}
      </BuyButton>
    </S.ItemsPageWrapper>
  );
};

interface Params extends ParsedUrlQuery {
  itemId: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { itemId } = context.params as Params;
  const conItem = await getConItem(+itemId);

  return { props: { data: { conItem } } };
};

export default ItemsPage;
