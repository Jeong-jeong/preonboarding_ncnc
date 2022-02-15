import styled from 'styled-components';
import { font16 } from 'styles/font';

export const NavigationItemWrapper = styled.a<{ active: boolean }>`
  display: inline-block;
  width: auto;
  height: 41px;
  padding: 10px 14px;
  ${font16(400)};
  ${({ active, theme }) =>
    active
      ? `
  color: ${theme.colors.red}; 
  border-bottom: 2px solid ${theme.colors.red};
  padding-bottom: 9px;
  `
      : ''};
`;
