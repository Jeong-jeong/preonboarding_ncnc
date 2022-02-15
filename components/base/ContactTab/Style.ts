import styled from 'styled-components';
import { flexbox, hideScrollbar } from 'styles/commonStyle';
import { font16 } from 'styles/font';

export const TabsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  ${hideScrollbar};
`;

export const TabHeader = styled.header`
  padding: ${({ theme }) => `${theme.gap.baseInner - 1}px ${theme.gap.baseInner}px 0`};

  h2 {
    user-select: none;
    margin-bottom: 15px;
    ${font16(500)};
  }
`;

export const ButtonWrapper = styled.div`
  ${flexbox({ jc: 'between' })};
`;

export const Button = styled.button<{ isActive: boolean }>`
  width: 100%;
  height: 40px;
  color: ${({ isActive, theme }) => isActive && theme.colors.red};
  border-bottom: ${({ isActive, theme }) => isActive && `2px solid ${theme.colors.red}`};
`;
