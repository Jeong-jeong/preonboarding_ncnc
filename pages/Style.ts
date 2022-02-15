import styled from 'styled-components';
import { flexbox } from 'styles/commonStyle';
import { font13, font16 } from 'styles/font';

export const SwiperWrapper = styled.div`
  margin-top: 50px;
  height: 141px;
`;

export const CategoriesWrapper = styled.div`
  margin-top: 15.94px;
  margin-bottom: 28.9px;
`;

export const ItemListWrapper = styled.div``;

export const ProductionListWrapper = styled.ul`
  li {
    margin-top: 1px;
  }
`;

export const SubTitle = styled.h3`
  ${font13(500)};
  color: ${({ theme }) => theme.colors.red};
  padding: 0 17px 4.98px 17px;
`;

export const ItemTitle = styled.h1`
  ${font16(600)};
  padding: 0 17px 13.98px 17px;
`;
