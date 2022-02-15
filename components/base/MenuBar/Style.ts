import styled from 'styled-components';
import { flexbox } from 'styles/commonStyle';
import { font15 } from 'styles/font';

export const HeaderInner = styled.div`
  ${flexbox({ jc: 'between' })};
  max-width: 1440px;
  height: 50px;
  margin: 0 auto;
  padding: 7px 19px;
`;

export const Title = styled.h1`
  ${font15(600)}
`;

export const SvgWrapper = styled.div`
  transform: rotate(-90deg);
  cursor: pointer;

  > svg {
    width: 20px;
    height: 20px;

    > path {
      fill: ${({ theme }) => theme.colors.primary};
      transform: scale(1.1);
    }
  }
`;
