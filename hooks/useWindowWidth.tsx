import { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // @NOTE: 앱 마운트 후 window.innerWidth 값 가져오기
    setWindowWidth(innerWidth);
    const handleResize = () => {
      // @NOTE: 리사이즈마다 width값 재조정
      setWindowWidth(innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
