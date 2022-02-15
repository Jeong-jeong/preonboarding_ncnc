import React, { useState, useEffect } from 'react';
import { Pagination } from 'components/domain';
import { useSwipe, useWindowWidth } from 'hooks';
import axios from 'axios';
import { ISwipe } from 'types';
import * as S from './Style';

const Swiper = () => {
  const windowWidth = useWindowWidth();

  const [isLoading, setLoading] = useState(false);
  const [fetchData, setFetchData] = useState<ISwipe | any>({});

  const getSwipeList = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('../mock/slideList.json');
      setFetchData({ ...data });
      setLoading(false);
    } catch (e) {
      console.log('getSwiperList API 에러');
    }
  };

  useEffect(() => {
    getSwipeList();
  }, []);

  // const payload = {
  //   list: [
  //     'https://unsplash.it/800/201',
  //     'https://unsplash.it/800/202',
  //     'https://unsplash.it/800/203',
  //   ],
  //   windowWidth,
  // };
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
    handleTransitionEnd,
  } = useSwipe(fetchData);

  return (
    <S.WithPagination>
      <S.SwiperListWrapper>
        <S.SwiperList
          ref={swipeRef}
          isTransition={isTransition}
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
                <S.Image src={src} width={windowWidth} />
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
