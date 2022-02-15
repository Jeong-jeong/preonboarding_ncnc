import styled from 'styled-components';

export const ItemsPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth}px;
  height: 100vh;
  background: #fff;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

export const ProductWrapper = styled.div`
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
