import React, { useEffect, useState } from 'react';
import { ICategory, IConItem, INested } from 'types';
import { ParsedUrlQuery } from 'querystring';
import { MenuBar, NavigationBar, Loading } from 'components/base';
import { ProductionList, CategoryList } from 'components/domain';
import { getCategories, getNested } from 'api';
import { IcoArrow } from 'public/images';

import * as S from 'pagesStyle/categoriesStyle';
import { GetServerSideProps } from 'next';
import Router from 'next/router';

interface Params extends ParsedUrlQuery {
  categoryId: string;
}

const CategoryPage = ({ categoryId }: Params) => {
  const [nestedData, setNestedData] = useState<INested>();
  const [categories, setCategories] = useState<ICategory[]>();
  const [isLoading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const categories = await getCategories();
        setCategories(categories);
        const nested = await getNested(+categoryId);
        setNestedData(nested);
      } catch (e) {
        throw new Error();
      }
      setLoading(false);
    };
    fetchData();
  }, [categoryId]);

  const conItems: IConItem[] = [];
  if (nestedData && nestedData.id === 1) {
    const { conCategory2s } = nestedData;
    conCategory2s.forEach((category) => {
      category.conItems.forEach((conItem) => conItems.push(conItem));
    });
  }

  return (
    <S.CategoryPageWrapper>
      <S.HeaderContainer>
        <MenuBar onClick={() => Router.push('/')} title={nestedData?.name}>
          <IcoArrow />
        </MenuBar>
        <NavigationBar categories={categories} categoryId={categoryId} />
      </S.HeaderContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <S.ArticleContainer>
          {nestedData?.id === 1 ? (
            <>
              <ProductionList conItems={conItems} />
            </>
          ) : (
            <CategoryList categories={nestedData?.conCategory2s} size={36} />
          )}
        </S.ArticleContainer>
      )}
    </S.CategoryPageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // @NOTE: router만 ssr로 전달
  const { categoryId } = context.params as Params;
  return {
    props: {
      categoryId,
    },
  };
};

export default CategoryPage;
