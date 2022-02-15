import styled from 'styled-components';
import { hideScrollbar } from 'styles/commonStyle';

export const NavigationBarWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => `${theme.size.maxWidth}px`};
  background: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: ${({ theme }) => `${theme.size.baseHeight}px`};
  z-index: ${({ theme }) => theme.zIndex.navigationBar};
`;

export const SlideWrapper = styled.ul`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  ${hideScrollbar};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottom};
`;
