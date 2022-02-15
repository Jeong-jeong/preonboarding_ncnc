import styled from 'styled-components';
import { hideScrollbar } from 'styles/commonStyle';

export const CategoryPageWrapper = styled.div`
  height: 100vh;
`;

export const HeaderContainer = styled.section`
  position: relative;
`;

export const ArticleContainer = styled.section`
  padding: 100px ${({ theme }) => `${theme.gap.baseInner}px`} 0;
  overflow-y: auto;
  ${hideScrollbar};
`;
