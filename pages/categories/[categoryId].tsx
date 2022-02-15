import React from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ICategory, IConItem, INested } from 'types';
import { getCategories, getNested } from 'api';
import { CategoryList, MenuBar, NavigationBar } from 'components/base';
import { ProductionList } from 'components/domain';
import { IcoArrow, IcoClose } from 'public/images';

import * as S from './Style';
import Router from 'next/router';

interface CategoryPageProps {
  data: {
    nested: INested;
    categories: ICategory[];
  };
}

const CategoryPage = ({ data }: CategoryPageProps) => {
  const { nested, categories } = data;
  const { conCategory2s, name } = nested;
  const conItems: IConItem[] = [];
  if (nested.id === 1) {
    conCategory2s.forEach((category) => {
      category.conItems.forEach((conItem) => conItems.push(conItem));
    });
  }

  return (
    <S.CategoryPageWrapper>
      <S.HeaderContainer>
        <MenuBar onClick={() => Router.push('/')} title={name}>
          <IcoArrow />
        </MenuBar>
        <NavigationBar categories={categories} />
      </S.HeaderContainer>
      <S.ArticleContainer>
        {nested.id === 1 ? (
          <>
            <ProductionList conItems={conItems} />
          </>
        ) : (
          <CategoryList categories={conCategory2s} size={36} />
        )}
      </S.ArticleContainer>
    </S.CategoryPageWrapper>
  );
};

interface Params extends ParsedUrlQuery {
  categoryId: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categoryId } = context.params as Params;
  const nested = await getNested(+categoryId);
  const categories = (await getCategories())!;

  return { props: { data: { nested, categories } } };
};

export default CategoryPage;
