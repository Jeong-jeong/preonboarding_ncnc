import styled from 'styled-components';
import { font16 } from 'styles/font';

export const Button = styled.button`
  width: 100%;
  max-width: 341px;
  height: ${({ theme }) => `${theme.size.baseHeight}px`};
  ${font16(500)};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => `${theme.size.borderRadius}px`};
`;
