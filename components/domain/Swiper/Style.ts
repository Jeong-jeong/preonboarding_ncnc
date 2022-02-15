import styled from 'styled-components';
import { hideScrollbar } from 'styles/commonStyle';

interface SwiperListProps {
  isTransition: boolean;
}

interface ImageProps {
  width: number;
}

export const SwiperListWrapper = styled.div`
  width: 100vh;
  height: 300px;
  overflow-x: auto;
  overflow-y: hidden;
  touch-action: pan-y;
  user-select: none;

  ${hideScrollbar};
`;

export const SwiperList = styled.ul<SwiperListProps>`
  width: 3000px;
  transition-duration: ${({ isTransition }) => (isTransition ? '300ms' : '0ms')};
  display: flex;
  flex-wrap: nowrap;
`;

export const Image = styled.img<ImageProps>`
  width: ${({ width }) => `${width}px`};
  height: 300px;
  user-select: none;
  -webkit-user-drag: none;
`;
