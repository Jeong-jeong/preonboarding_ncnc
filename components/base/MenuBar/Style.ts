import styled from 'styled-components';
import { flexbox } from 'styles/commonStyle';
import { font15 } from 'styles/font';

export const HeaderInner = styled.div`
  ${flexbox({ jc: 'between' })};
  width: 100%;
  max-width: ${({ theme }) => `${theme.size.maxWidth}px`}
  position: fixed;
  left: 0;
  top: 0;
  margin: 0 auto;
  height: ${({ theme }) => `${theme.size.baseHeight}px`};
  padding: 7px 19px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h1`
  ${font15(600)};
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
