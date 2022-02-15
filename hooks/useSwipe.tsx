import React, { useEffect, useState, useRef, useMemo } from 'react';

interface useSwipeProps<T> {
  list: T[];
  windowWidth: number;
}

const useSwipe = <Type extends unknown>(payload: useSwipeProps<Type>) => {
  const { list, windowWidth } = payload;

  const ORIGIN_LIST_LENGTH = list.length;
  const COUNT_COPYIED_TOTAL = 3;

  const swipeRef = useRef<HTMLUListElement>(null);
  const lastPositionXRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(ORIGIN_LIST_LENGTH);
  const [itemList, setItemList] = useState<Type[]>([]);
  const [isTransition, setIsTransition] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [swipeStartX, setSwipeStartX] = useState(0);
  const [swipeEndX, setSwipeEndX] = useState(0);
  const [draggedX, setDraggedX] = useState(0);

  const initialIndexOforiginSlide = useMemo(() => {
    return Math.floor((ORIGIN_LIST_LENGTH * COUNT_COPYIED_TOTAL) / 2);
  }, [list]);

  useEffect(() => {
    // @NOTE: 초기화 작업
    setItemList([...list, ...list, ...list]);

    if (windowWidth) {
      setPosition((initialIndexOforiginSlide - 1) * -windowWidth);
      lastPositionXRef.current = (initialIndexOforiginSlide - 1) * -windowWidth;
    }
  }, [windowWidth]);

  useEffect(() => {
    //@NOTE: 드래그 될 때마다 transform 위치 변경
    if (!swipeRef.current) return;
    if (swipeRef.current && isDragging) {
      setPosition(lastPositionXRef.current - (swipeStartX - swipeEndX));
    }
  }, [swipeRef.current, swipeEndX]);

  useEffect(() => {
    //@NOTE: 바꿔치기
    if (!swipeRef.current) return;

    if (currentIndex === 0 || currentIndex === ORIGIN_LIST_LENGTH * 2) {
      if (!isTransition) {
        setPosition((initialIndexOforiginSlide - 1) * -windowWidth);
        lastPositionXRef.current = (initialIndexOforiginSlide - 1) * -windowWidth;
        setCurrentIndex(ORIGIN_LIST_LENGTH);
      }
    }
  }, [currentIndex, isTransition]);

  useEffect(() => {
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

  const setPosition = (scrolledValue: number) => {
    if (swipeRef.current) {
      swipeRef.current.style.transform = `
  		translate3d(${scrolledValue}px, 0, 0)`;
    }
  };

  const temporaryTransition = (time: number) => {
    setIsTransition(true);
    setTimeout(() => {
      setIsTransition(false);
    }, time);
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
    temporaryTransition(300);
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
    itemList,
    swipeRef,
    mouseStart,
    touchStart,
    dragMove,
    touchMove,
    dragEnd,
    isTransition,
  };
};

export default useSwipe;
