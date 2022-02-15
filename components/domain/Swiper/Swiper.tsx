import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { ISwipe } from 'types';
import { Pagination } from 'components/base';
import { useSwipe, useWindowWidth } from 'hooks';
import * as S from './Style';

const Swiper = () => {
  const windowWidth = useWindowWidth();

  const [fetchData, setFetchData] = useState<ISwipe | any>({});

  const getSwipeList = async () => {
    try {
      const { data } = await axios.get('../mock/slideList.json');
      setFetchData(data);
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  };

  useEffect(() => {
    getSwipeList();
  }, []);

  const {
    COUNT_COPYIED_TOTAL,
    ORIGIN_LIST_LENGTH,
    itemList,
    swipeRef,
    currentIndex,
    isTransition,
    mouseStart,
    touchStart,
    dragMove,
    touchMove,
    dragEnd,
    handleTransitionEnd,
  } = useSwipe({ ...fetchData, windowWidth });

  return (
    <S.WithPagination>
      <S.SwiperListWrapper>
        <S.SwiperList
          ref={swipeRef}
          isTransition={isTransition}
          windowWidth={windowWidth}
          originListLength={ORIGIN_LIST_LENGTH}
          countCopiedTotal={COUNT_COPYIED_TOTAL}
          onTransitionEnd={handleTransitionEnd}
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
                <Image
                  className="swiper-image"
                  src={src}
                  width={windowWidth}
                  height={141}
                  priority
                />
              </li>
            )),
          )}
        </S.SwiperList>
      </S.SwiperListWrapper>
      <Pagination
        list={fetchData.list}
        currentIndex={currentIndex}
        countCopiedTotal={COUNT_COPYIED_TOTAL}
      />
    </S.WithPagination>
  );
};

export default Swiper;
