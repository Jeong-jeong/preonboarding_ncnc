import styled from 'styled-components';
import { theme } from 'styles';
import { flexbox } from 'styles/commonStyle';
import { font14 } from 'styles/font';

export const OptionBoxBackground = styled.div`
  width: 375px; //100%로 수정하기
  height: 513px;
  background: ${theme.colors.modalBackground};
  position: relative;
`;

export const OptionBox = styled.div`
  width: 100%;
  height: 241px;
  background: ${theme.colors.background};
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Title = styled.h1`
  ${font14(500)};
  padding: 16px 17px;
`;

export const OptionWrapper = styled.div`
  ${flexbox({ fd: 'column' })};
  gap: 1px;
  overflow-y: auto;
`;
