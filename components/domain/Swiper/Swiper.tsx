import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { ISwipe } from 'types';
import { Pagination } from 'components/base';
import { useSwipe, useWindowWidth } from 'hooks';
import { theme } from 'styles';
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

  const calcWindowWidth = useMemo(() => {
    return windowWidth >= theme.size.maxWidth ? theme.size.maxWidth : windowWidth;
  }, [windowWidth]);

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
  } = useSwipe({ ...fetchData, windowWidth: calcWindowWidth });

  return (
    <S.WithPagination>
      <S.SwiperListWrapper>
        <S.SwiperList
          ref={swipeRef}
          isTransition={isTransition}
          windowWidth={calcWindowWidth}
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
                  width={calcWindowWidth}
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
