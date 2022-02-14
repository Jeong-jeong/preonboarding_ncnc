import React, { useRef, useState } from 'react';

const useClickedId = () => {
  const checkClickedSameId = useRef(0);
  const [clickedId, setClickedId] = useState(0);

  const handleClickedId = (e: React.MouseEvent<HTMLButtonElement>) => {
    const parentList = e.currentTarget.closest('li');
    const currentClickedId = Number(parentList?.dataset.id);

    if (checkClickedSameId.current === currentClickedId) {
      checkClickedSameId.current = 0;
      setClickedId(0);
    } else {
      checkClickedSameId.current = currentClickedId;
      setClickedId(currentClickedId);
    }
  };

  return { clickedId, handleClickedId };
};

export default useClickedId;
