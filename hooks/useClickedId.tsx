import React, { useRef, useState } from 'react';

const useClickedId = (ParentElement: string) => {
  const checkClickedSameId = useRef(0);
  const [clickedId, setClickedId] = useState(0);

  const handleClickedId = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>,
  ) => {
    const parentList: HTMLElement | null = e.currentTarget.closest(ParentElement);
    const currentClickedId = Number(parentList?.dataset.id);

    if (checkClickedSameId.current === currentClickedId) {
      checkClickedSameId.current = 0;
      setClickedId(0);
    } else {
      checkClickedSameId.current = currentClickedId;
      setClickedId(currentClickedId);
    }
  };

  return { clickedId, setClickedId, handleClickedId };
};

export default useClickedId;
