import styled from 'styled-components';
import { hideScrollbar } from 'styles/commonStyle';

interface SwiperListProps {
  isTransition: boolean;
  windowWidth: number;
  originListLength: number;
  countCopiedTotal: number;
}

export const SwiperListWrapper = styled.div`
  width: 100%;
  height: 141px;
  overflow-x: auto;
  overflow-y: hidden;
  touch-action: pan-y;
  user-select: none;

  ${hideScrollbar};
`;

export const SwiperList = styled.ul<SwiperListProps>`
  width: ${({ windowWidth, originListLength, countCopiedTotal }) =>
    `${originListLength * countCopiedTotal * windowWidth}px`};
  transition-duration: ${({ isTransition }) => (isTransition ? '300ms' : '0ms')};
  display: flex;
  flex-wrap: nowrap;

  & > li {
    height: 141px;
  }

  .swiper-image {
    user-select: none;
    -webkit-user-drag: none;
  }
`;

// export const Image = styled.img<{ width: number }>`
//   width: ${({ width }) => `${width}px`};
//   height: 141px;

// `;

export const WithPagination = styled.div`
  position: relative;
`;
