import styled from 'styled-components';
import { flexbox } from 'styles/commonStyle';
import { font12 } from 'styles/font';

export interface SizeProps {
  size: number;
}

export const Category = styled.a`
  float: left;
  width: calc(100% / 3);
  height: 112px;
  padding: 1px;
`;

export const CategoryInner = styled.div<SizeProps>`
  height: 100%;
  background: ${({ theme }) => `${theme.colors.white}`};
  border-radius: ${({ theme }) => `${theme.size.borderRadius}px`};
  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  height: 100%;
  ${flexbox({ fd: 'column' })};
  justify-content: space-evenly;
  transition: 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Name = styled.h1<SizeProps>`
  ${font12(500)};
  text-align: center;
`;
