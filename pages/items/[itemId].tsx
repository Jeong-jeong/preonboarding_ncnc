import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { ConItem } from 'types';
import { getConItem } from 'api';

const ItemsPageWrapper = styled.div``;

interface ItemsPageProps {
  data: {
    conItem: ConItem;
  };
}

const ItemsPage = ({ data }: ItemsPageProps) => {
  const { conItem } = data;

  return <ItemsPageWrapper>ItemsPage</ItemsPageWrapper>;
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
