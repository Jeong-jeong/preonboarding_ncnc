import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react';
import { ISwipe } from 'types';

const useSwipe = (fetchData: ISwipe) => {
  type List = ISwipe['list'];

  const { list, windowWidth } = fetchData;

  const COUNT_COPYIED_TOTAL = 3;
  const ORIGIN_LIST_LENGTH = list ? list.length : COUNT_COPYIED_TOTAL;
  const INTERVAL_TIME = 3000;

  const swipeRef = useRef<HTMLUListElement>(null);
  const lastPositionXRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(ORIGIN_LIST_LENGTH);
  const [itemList, setItemList] = useState<List>([]);
  const [isTransition, setIsTransition] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [swipeStartX, setSwipeStartX] = useState(0);
  const [swipeEndX, setSwipeEndX] = useState(0);
  const [draggedX, setDraggedX] = useState(0);

  const initialIndexOforiginSlide = useMemo(() => {
    return Math.floor((ORIGIN_LIST_LENGTH * COUNT_COPYIED_TOTAL) / 2);
  }, [list]);

  useEffect(() => {
    // @NOTE: 초기화 작업 담당

    if (list) {
      // @NOTE: 원본 배열을 가져와 앞 뒤로 복사함
      setItemList([...list, ...list, ...list]);
    }

    // @NOTE: 초기화 시 애니메이션을 끄고 원본 배열 첫번째 위치로 이동시킴
    if (windowWidth) {
      setIsTransition(false);
      setPosition((initialIndexOforiginSlide - 1) * -windowWidth);
      lastPositionXRef.current = (initialIndexOforiginSlide - 1) * -windowWidth;
    }

    const handleResize = () => {
      setIsTransition(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth, list]);

  useEffect(() => {
    // @NOTE: 드래그 될 때마다 transform 위치 변경
    if (!swipeRef.current) return;
    if (swipeRef.current && isDragging) {
      setPosition(lastPositionXRef.current - (swipeStartX - swipeEndX));
    }
  }, [swipeRef.current, swipeEndX]);

  useEffect(() => {
    //@NOTE: 현재 인덱스가 복붙한 배열의 인덱스일 때 바꿔치기 작업
    if (!swipeRef.current) return;
    let intervalId: NodeJS.Timer;

    if (!isTransition) {
      // @NOTE: Transition이 꺼지면 처음으로 옮김
      setPosition((initialIndexOforiginSlide - 1) * -windowWidth);
      lastPositionXRef.current = (initialIndexOforiginSlide - 1) * -windowWidth;
      setCurrentIndex(ORIGIN_LIST_LENGTH);

      setTimeout(() => {
        // @NOTE: 바꾸고 0.1초 후에 다시 애니메이션 넣어줌
        setIsTransition(true);
      }, 100);
    }

    if (!isDragging) {
      // @NOTE: 자동슬라이드
      intervalId = setTimeout(() => {
        shiftSlide('right');
      }, INTERVAL_TIME);
    }

    return () => clearTimeout(intervalId);
  }, [currentIndex, isTransition, isDragging]);

  useEffect(() => {
    // @NOTE: 드래그가 끝나면 스와이퍼 이동
    if (!isDragging && draggedX !== 0) {
      if (-draggedX <= -windowWidth / 4) {
        shiftSlide('right');
      } else if (-draggedX >= windowWidth / 4) {
        shiftSlide('left');
      } else {
        shiftSlide('none');
      }
    }
  }, [draggedX]);

  const handleTransitionEnd = useCallback(() => {
    console.log(currentIndex);

    if (currentIndex === 0 || currentIndex >= ORIGIN_LIST_LENGTH * 2) {
      // @NOTE: 현재 인덱스가 복붙한 인덱스일 때 transition을 끔
      setIsTransition(false);
    }
  }, [currentIndex]);

  const setPosition = (scrolledValue: number) => {
    if (swipeRef.current) {
      swipeRef.current.style.transform = `
  		translate3d(${scrolledValue}px, 0, 0)`;
    }
  };

  const shiftSlide = (direction: string) => {
    switch (direction) {
      case 'right': {
        setPosition(lastPositionXRef.current - windowWidth);
        lastPositionXRef.current -= windowWidth;
        setCurrentIndex((prevIndex) => prevIndex + 1);
        break;
      }
      case 'left':
        setPosition(lastPositionXRef.current + windowWidth);
        lastPositionXRef.current += windowWidth;
        setCurrentIndex((prevIndex) => prevIndex - 1);
        break;
      default:
        setPosition(lastPositionXRef.current);
    }
  };

  const mouseStart = (e: React.MouseEvent<HTMLUListElement>) => {
    // @NOTE: 왼쪽 마우스 클릭일 때만
    if (e.buttons === 1) {
      setSwipeStartX(e.clientX);
      setIsDragging(true);
    }
  };

  const touchStart = (e: React.TouchEvent<HTMLUListElement>) => {
    setSwipeStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const dragMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isDragging) return;

    if (e.buttons === 1) {
      setSwipeEndX(e.clientX);
    }
  };

  const touchMove = (e: React.TouchEvent<HTMLUListElement>) => {
    if (!isDragging) return;

    setSwipeEndX(e.touches[0].clientX);
  };

  const dragEnd = () => {
    setIsDragging(false);
    setDraggedX(swipeStartX - swipeEndX);
  };

  return {
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
  };
};

export default useSwipe;
