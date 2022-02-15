import React from 'react';
import { Pagination } from 'components/domain';
import { useSwipe, useWindowWidth } from 'hooks';
import * as S from './Style';

const Swiper = () => {
  const windowWidth = useWindowWidth();
  const payload = {
    list: [
      'https://unsplash.it/800/201',
      'https://unsplash.it/800/202',
      'https://unsplash.it/800/203',
    ],
    windowWidth,
  };
  const {
    COUNT_COPYIED_TOTAL,
    itemList,
    swipeRef,
    currentIndex,
    isTransition,
    mouseStart,
    touchStart,
    dragMove,
    touchMove,
    dragEnd,
  } = useSwipe(payload);

  return (
    <S.WithPagination>
      <S.SwiperListWrapper>
        <S.SwiperList
          ref={swipeRef}
          isTransition={isTransition}
          onMouseDown={mouseStart}
          onTouchStart={touchStart}
          onMouseMove={dragMove}
          onTouchMove={touchMove}
          onTouchEnd={dragEnd}
          onMouseUp={dragEnd}
          onMouseLeave={dragEnd}
        >
          {React.Children.toArray(
            itemList.map((src: string) => (
              <li>
                <S.Image src={src} width={windowWidth} />
              </li>
            )),
          )}
        </S.SwiperList>
      </S.SwiperListWrapper>
      <Pagination
        list={payload.list}
        currentIndex={currentIndex}
        countCopiedTotal={COUNT_COPYIED_TOTAL}
      />
    </S.WithPagination>
  );
};

export default Swiper;
