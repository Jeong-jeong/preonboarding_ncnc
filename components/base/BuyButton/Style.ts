import styled from 'styled-components';
import { theme } from 'styles';
import { font16 } from 'styles/font';

interface IBtn {
  checkValue: boolean;
}

export const Button = styled.button<IBtn>`
  width: 100%;
  height: 80px;
  ${font16(500)};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ checkValue }) =>
    checkValue ? ({ theme }) => theme.colors.red : theme.colors.disableGray};
  position: absolute;
  left: 0;
  bottom: 0;

  &:disabled {
    cursor: not-allowed;
  }
`;
