import styled from 'styled-components';
import { font13, font16 } from 'styles/font';

export const SwiperWrapper = styled.div`
  margin-top: 50px;
  height: 141px;
`;

export const CategoriesWrapper = styled.div`
  margin: 15.94px 17px 28.9px 17px;
`;

export const ItemListWrapper = styled.div``;

export const ProductionListWrapper = styled.ul`
  li {
    margin-top: 1px;
  }
`;

export const SubTitle = styled.strong`
  ${font13(500)};
  color: ${({ theme }) => theme.colors.red};
  padding: 0 ${({ theme }) => `${theme.gap.baseInner}px`} 4.98px
    ${({ theme }) => `${theme.gap.baseInner}px`};
  user-select: none;
`;

export const ItemTitle = styled.h1`
  ${font16(600)};
  padding: 0 ${({ theme }) => `${theme.gap.baseInner}px`} 13.98px
    ${({ theme }) => `${theme.gap.baseInner}px`};
  user-select: none;
`;
