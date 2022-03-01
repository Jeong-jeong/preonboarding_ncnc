import styled from 'styled-components';
import { theme } from 'styles';
import { flexbox } from 'styles/commonStyle';
import { font12, font14 } from 'styles/font';

interface isActiveType {
  isActive: boolean;
}

export const OptionBoxContainer = styled.div`
  width: 100%;
  height: calc(100vh - 260px);
  min-height: 513px;
  position: relative;
  overflow: hidden;
  background: ${theme.colors.white};
  padding: 0 17px;
`;

export const Name = styled.h1`
  ${font14(400)};
  color: ${theme.colors.primary};
  margin: 18px 0 9px;
`;

export const Contents = styled.p`
  ${font12(400)};
  color: ${theme.colors.gray};
  position: relative;
  padding-left: 11px;
  margin: 0;
  margin-top: 4px;

  &:before {
    content: '';
    display: block;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: ${theme.colors.gray};
    position: absolute;
    top: 7px;
    left: 0;
  }
`;

export const OptionBoxBackground = styled.div<isActiveType>`
  width: 100%;
  height: 100%;
  background: ${theme.colors.modalBackground};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  left: 0;
`;

export const OptionBox = styled.div<isActiveType>`
  width: 100%;
  height: 300px;
  background: ${theme.colors.background};
  position: absolute;
  left: 0;
  bottom: ${({ isActive }) => (isActive ? 0 : '-50%')};
  transition: 0.3s ease;
`;

export const Title = styled.h1`
  ${font14(500)};
  padding: 16px 17px;
`;

export const OptionWrapper = styled.div`
  height: 100%;
  ${flexbox({ fd: 'column', jc: 'start' })};
  background: ${theme.colors.white};
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
