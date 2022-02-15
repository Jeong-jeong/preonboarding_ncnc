import styled from 'styled-components';
import { hideScrollbar } from 'styles/commonStyle';

export const SwiperListWrapper = styled.div`
  width: 100%;
  height: 141px;
  overflow-x: auto;
  overflow-y: hidden;
  touch-action: pan-y;
  user-select: none;

  ${hideScrollbar};
`;

export const SwiperList = styled.ul<{ isTransition: boolean }>`
  width: 3000px;
  transition-duration: ${({ isTransition }) => (isTransition ? '300ms' : '0ms')};
  display: flex;
  flex-wrap: nowrap;
`;

export const Image = styled.img<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  height: 141px;
  user-select: none;
  -webkit-user-drag: none;
`;

export const WithPagination = styled.div`
  position: relative;
`;
