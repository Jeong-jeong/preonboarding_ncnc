import styled from 'styled-components';
import { font15 } from 'styles/font';
import { flexbox } from 'styles/commonStyle';

interface IcoArrowProps {
  isToggle: boolean;
}

export const Item = styled.button`
  ${flexbox({ jc: 'between', ai: 'start' })};
  width: 100%;
  padding: ${({ theme }) => `${theme.gap.baseInner}px`};
  margin-bottom: 1px;
  background-color: ${({ theme }) => theme.colors.white};
  ${font15(500)};
  text-align: start;

  & > p {
    margin: 0;
    ${flexbox({ jc: 'start', ai: 'start' })};
  }
`;

export const IcoArrowWrapper = styled.span<IcoArrowProps>`
  .ico-arrow {
    transform: ${({ isToggle }) => (isToggle ? `rotate(0deg)` : `rotate(180deg)`)};
  }
`;

export const IcoQuestion = styled.span`
  margin-right: ${({ theme }) => `${theme.gap.baseGap}px`};
  color: ${({ theme }) => theme.colors.red};
`;

export const Dropbox = styled.div`
  padding: ${({ theme }) => `${theme.gap.baseInner}px`};
  ${font15(400)};
  line-height: 1.4;
`;
