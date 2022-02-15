import styled from 'styled-components';
import { flexbox } from '../../../styles/commonStyle';

export const ProductionItemWrapper = styled.a`
  ${flexbox({ jc: 'start' })};
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: 20px 0 20px 30px;
`;
