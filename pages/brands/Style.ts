import styled from 'styled-components';
import { font14 } from 'styles/font';
import { flexbox } from 'styles/commonStyle';

export const BrandsPageWrapper = styled.div`
  > * {
    ${font14(400)};
  }
`;
export const HeaderContainer = styled.div`
  span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
export const ArticleContainer = styled.div`
  padding: 100px 0 0 0;
`;
export const ItemCount = styled.div`
  ${flexbox({ jc: 'start' })};
  max-width: ${({ theme }) => `${theme.size.maxWidth}px`};

  padding: ${({ theme }) => `${theme.gap.baseGap}px`};
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: ${({ theme }) => `${theme.size.baseHeight}px`};
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  z-index: ${({ theme }) => theme.zIndex.brand};
`;
