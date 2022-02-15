import styled from 'styled-components';
import { theme } from 'styles';
import { flexbox } from 'styles/commonStyle';
import { font12, font16 } from 'styles/font';

export const Option = styled.div`
  width: 100%;
  height: 61px;
  padding: 14px 22.5px 14.5px 17px;
  background: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.background};
  ${flexbox({ jc: 'between' })}
  cursor: pointer;
`;

export const TextGray = styled.span`
  display: inline-block;
  ${font12(400)};
  color: ${theme.colors.gray};
  min-width: 44px;
  margin-right: 9px;
`;

export const TextBlack = styled.span`
  display: inline-block;
  ${font16(400)};
  color: ${theme.colors.primary};
  min-width: 183px;
`;

export const Discount = styled.span`
  ${font16(400)};
  color: ${theme.colors.red};
`;
