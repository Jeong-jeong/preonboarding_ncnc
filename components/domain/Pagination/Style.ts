import styled from 'styled-components';
import { fontRoboto } from 'styles/font';

export const Pagination = styled.ul`
  user-select: none;
  position: absolute;
  bottom: 0;
  right: ${({ theme }) => `${theme.gap.baseGap}px`};
  ${fontRoboto()};
`;

export const PaginationItem = styled.span<{ isSameIndex: boolean }>`
  color: ${({ isSameIndex, theme }) => (isSameIndex ? theme.colors.primary : theme.colors.white)};
  transition: color 500ms ease;
`;
