import styled from 'styled-components';
import { hideScrollbar } from 'styles/commonStyle';

export const ItemsPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth}px;
  height: 100vh;
  background: #fff;
  position: relative;
  overflow: hidden;
  padding-top: 50px;
`;

export const ProductWrapper = styled.div`
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  overflow-y: auto;
  ${hideScrollbar};
`;
