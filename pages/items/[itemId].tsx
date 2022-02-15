import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { IConItem } from 'types';
import { getConItem } from 'api';
import { MenuBar, OptionBox, BuyButton } from 'components/base';
import { ProductionItem } from 'components/domain';
import { IcoArrow } from 'public/images';
import { useOption } from 'hooks';

const ItemsPageWrapper = styled.div``;

interface ItemsPageProps {
  data: {
    conItem: IConItem;
  };
}

const ItemsPage = ({ data }: ItemsPageProps) => {
  const { conItem } = data;
  const { toggle, isActive, isChecked, setIsChecked } = useOption({ initialState: false });

  return (
    <ItemsPageWrapper>
      <MenuBar onClick={() => console.log('clicked')}>
        <IcoArrow />
      </MenuBar>
      <ProductionItem
        imageUrl={conItem.imageUrl}
        productionName={conItem.name}
        minSellingPrice={conItem.minSellingPrice}
        originalPrice={conItem.originalPrice}
        size="big"
        brandName={conItem.conCategory2.name}
        productionId={conItem.id}
      />
      <OptionBox
        data={conItem}
        toggle={toggle}
        isActive={isActive}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <BuyButton
        children={isActive ? '구매하기' : isChecked ? '구매하기' : '옵션 선택하기'}
        checkValue={!isActive}
        toggle={toggle}
      />
    </ItemsPageWrapper>
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
