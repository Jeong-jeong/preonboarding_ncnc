import React, { useRef } from 'react';
// import Image from 'next/image';
import { useSwipe, useWindowWidth } from 'hooks';
import * as S from './Style';

const Swiper = () => {
  // https://unsplash.it/1000 / 400

  const windowWidth = useWindowWidth();
  const payload = {
    list: [
      'https://unsplash.it/1000/401',
      'https://unsplash.it/1000/402',
      'https://unsplash.it/1000/403',
    ],
    windowWidth,
  };
  const { itemList, swipeRef, isTransition, mouseStart, touchStart, dragMove, touchMove, dragEnd } =
    useSwipe(payload);

  return (
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
          itemList.map((src: string, index) => (
            <li data-id={index}>
              <S.Image src={src} width={windowWidth} />
            </li>
          )),
        )}
      </S.SwiperList>
    </S.SwiperListWrapper>
  );
};

export default Swiper;
