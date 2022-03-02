import React from 'react';
import Head from 'next/head';
import * as S from './Style';
import Script from 'next/script';

interface PaginationProps {
  list: string[];
  currentIndex: number;
  countCopiedTotal: number;
}

const Pagination = ({
  list = [],
  currentIndex = 0,
  countCopiedTotal = 0,
}: Partial<PaginationProps>) => {
  return (
    <S.Pagination>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
          rel="stylesheet preload"
          as="style"
        />
      </Head>
      {React.Children.toArray(
        list?.map((_, index) => (
          <S.PaginationItem isSameIndex={currentIndex % countCopiedTotal === index}>
            .
          </S.PaginationItem>
        )),
      )}
    </S.Pagination>
  );
};

export default Pagination;
