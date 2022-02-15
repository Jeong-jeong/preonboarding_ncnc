import styled from 'styled-components';
import { flexbox } from 'styles/commonStyle';
import { font15 } from 'styles/font';

export const HeaderInner = styled.div`
  ${flexbox({ jc: 'between' })};
  max-width: 1440px;
  height: ${({ theme }) => `${theme.size.baseHeight}px`};
  padding: 7px 19px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h1`
  ${font15(600)};
`;
