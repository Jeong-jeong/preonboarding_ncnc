import { useState } from 'react';

interface useTabsProps<T> {
  initialIndex: number;
  allTabs: T[];
}

const useTabs = <Type extends {}>({ initialIndex, allTabs }: useTabsProps<Type>) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return {
    currentItem: allTabs[currentIndex],
    setCurrentIndex,
  };
};

export default useTabs;
