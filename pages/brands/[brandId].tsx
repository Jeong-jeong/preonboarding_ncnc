import { GetStaticProps } from 'next';
import { getCategories, getNested } from 'api';
import { ParsedUrlQuery } from 'querystring';
import { IBrand, IConItem, INested } from 'types';
import { MenuBar } from 'components/base';
import { ProductionList } from 'components/domain';
import * as S from './Style';
import { IcoArrow } from 'public/images';
import Router from 'next/router';
import React from 'react';

interface BrandsPageProps {
  data: {
    brandItemList: IBrand & { conItems: IConItem[] };
  };
}

const BrandsPage = ({ data }: BrandsPageProps) => {
  const { conItems, name } = data.brandItemList;

  return (
    <S.BrandsPageWrapper>
      <S.HeaderContainer>
        <MenuBar onClick={() => Router.back()} title={name}>
          <IcoArrow />
        </MenuBar>
        <S.ItemCount>
          {conItems.length}
          <span>개의 상품</span>
        </S.ItemCount>
      </S.HeaderContainer>
      <S.ArticleContainer>
        <ProductionList conItems={conItems} />
      </S.ArticleContainer>
    </S.BrandsPageWrapper>
  );
};

export const getStaticPaths = async () => {
  const categories = (await getCategories())!;
  const brandsInCategories = await Promise.all(categories.map(({ id }) => getNested(id)));

  const pathNumbers = getBrandPaths(brandsInCategories);

  const paths = pathNumbers.map((pathNumber) => ({
    params: { brandId: pathNumber.toString() },
  }));
  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  brandId: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { brandId } = context.params as Params;

  const categories = (await getCategories())!;
  const brandsInCategories = await Promise.all(categories.map(({ id }) => getNested(id)));

  let brandItemList;

  brandsInCategories.slice(1).some((category) => {
    brandItemList = category!.conCategory2s.find((brand) => brand.id === +brandId);
    return brandItemList;
  });

  return { props: { data: { brandItemList } }, revalidate: 60 };
};

export default BrandsPage;

const getBrandPaths = (brandsInCategories: (INested | undefined)[]) =>
  brandsInCategories
    .slice(1)
    .map((category) => category!.conCategory2s.map((brand) => brand.id))
    .flatMap((v) => v);
