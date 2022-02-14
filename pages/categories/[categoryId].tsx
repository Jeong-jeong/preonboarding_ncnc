import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { Nested } from '../../models/nested';
import { getNested } from '../../api';

const CategoryPageWrapper = styled.div``;

interface HomeProps {
  data: {
    nested: Nested;
  };
}

const Home = ({ data }: HomeProps) => {
  const { nested } = data;

  return <CategoryPageWrapper>CategoryPageWrapper</CategoryPageWrapper>;
};

interface Params extends ParsedUrlQuery {
  categoryId: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categoryId } = context.params as Params;
  const nested = await getNested(+categoryId);

  return { props: { data: { nested } } };
};

export default Home;
