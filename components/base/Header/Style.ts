import styled from 'styled-components';
import { flexbox } from 'styles/commonStyle';
import { font15 } from 'styles/font';

export const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 3;
  background: ${({ theme }) => theme.colors.white};
`;

export const HeaderInner = styled.div`
  ${flexbox({ jc: 'between' })};
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 7px 19px;
`;

export const Title = styled.h1`
  ${font15(600)}
`;

export const Hidden = styled.div`
  width: 30px;
  visibility: hidden;
`;

export const HamburgerContainer = styled.div``;

export const MyPageWrapper = styled.div`
  z-index: 6;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  &.hidden {
    width: 0;
    height: 100%;
  }
  &:not(.hidden) ul {
    width: 100%;
    transform: none;
  }
`;
export const Image = styled.div``;

export const HeaderMenu = styled.ul`
  ${flexbox({})};
  img {
    display: none;
  }
  ${flexbox({ fd: 'column', jc: 'start', ai: 'start' })};
  position: absolute;
  transition: 0.45s;
  transform: translateX(-280px);
  width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
`;

export const MenuWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 3;
  background: ${({ theme }) => theme.colors.white};
`;
