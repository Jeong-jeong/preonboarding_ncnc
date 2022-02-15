import React from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IConItem, INested } from 'types';
import { getNested } from 'api';
import { CategoryList, MenuBar, NavigationBar } from 'components/base';

import * as S from './Style';
import { IcoClose } from '../../public/images';
import { ProductionList } from '../../components/domain';

interface CategoryPageProps {
  data: {
    nested: INested;
  };
}

const CategoryPage = ({ data }: CategoryPageProps) => {
  const { nested } = data;
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
        <MenuBar img={IcoClose} onClick={() => {}} children={name} />
        <NavigationBar />
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

  return { props: { data: { nested } } };
};

export default CategoryPage;
