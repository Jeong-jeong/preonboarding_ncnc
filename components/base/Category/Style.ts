import styled from 'styled-components';
import { flexbox } from 'styles/commonStyle';
import { font12 } from 'styles/font';

export interface SizeProps {
  size: number;
}

export const Category = styled.a<SizeProps>`
  float: left;
  width: calc(100% / 3);
  min-width: 112px;
  padding: 1px;
`;

export const CategoryInner = styled.div`
  padding: ${({ size }) => (size === 43 ? '11px 0 14px' : '17px 0 13px')};
  background: ${({ theme }) => `${theme.colors.white}`};
  border-radius: ${({ theme }) => `${theme.size.borderRadiuss}px`};
  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  height: 100%;
  ${flexbox({ fd: 'column', jc: 'between' })};
  transition: 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgWrap = styled.div<SizeProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
		event
  }
`;

export const Name = styled.h1<SizeProps>`
  ${font12(500)};
  text-align: center;
`;
