import styled from 'styled-components';
import { flexbox } from 'styles/commonStyle';
import { font12 } from 'styles/font';

export interface SizeProps {
  size: number;
}

export const Category = styled.a<SizeProps>`
  width: 112px;
  height: 94px;
  padding: ${({ size }) => (size === 43 ? '11px 0 14px' : '17px 0 13px')};
  background: ${({ theme }) => `${theme.colors.white}`};
  border-radius: ${({ theme }) => `${theme.size.borderRadiuss}px`};
  ${flexbox({ fd: 'column', jc: 'between' })};
  cursor: pointer;
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
  margin-top: ${({ size }) => (size === 43 ? '14px' : '15px')};
`;
