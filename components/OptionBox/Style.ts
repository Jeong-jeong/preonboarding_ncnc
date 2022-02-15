import styled from 'styled-components';
import { theme } from 'styles';
import { flexbox } from 'styles/commonStyle';
import { font14 } from 'styles/font';

interface isActiveType {
  isActive: boolean;
}

export const OptionBoxContainer = styled.div`
  width: 100%;
  height: 513px;
  position: relative;
  overflow: hidden;
`;

export const OptionBoxBackground = styled.div<isActiveType>`
  width: 100%;
  height: 100%;
  background: ${theme.colors.modalBackground};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
`;

export const OptionBox = styled.div<isActiveType>`
  width: 100%;
  height: 241px;
  overflow-y: auto;
  background: ${theme.colors.background};
  position: absolute;
  left: 0;
  bottom: ${({ isActive }) => (isActive ? 0 : '-50%')};
  transition: 0.3s ease;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1`
  ${font14(500)};
  padding: 16px 17px;
`;

export const OptionWrapper = styled.div`
  ${flexbox({ fd: 'column' })};
  background: ${theme.colors.white};
`;
