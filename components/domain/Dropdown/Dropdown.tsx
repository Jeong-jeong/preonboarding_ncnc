import React, { useState, useEffect, useRef } from 'react';
import { IcoArrow } from 'public/images';
import * as S from './Style';

interface DropdownProps {
  id: number;
  clickedId: number;
  question: string;
  answer: string;
  handleClickedId: any;
}

const Dropdown = ({ id, clickedId, question, answer, handleClickedId }: DropdownProps) => {
  const [isToggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(clickedId === id ? true : false);
  }, [clickedId]);

  return (
    <li data-id={id}>
      <S.Item onClick={handleClickedId}>
        <p>
          <S.IcoQuestion>Q. </S.IcoQuestion> {question}
        </p>
        <S.IcoArrowWrapper isToggle={isToggle}>
          <IcoArrow className="ico-arrow" />
        </S.IcoArrowWrapper>
      </S.Item>
      {isToggle && (
        <S.Dropbox>
          <p>{answer}</p>
        </S.Dropbox>
      )}
    </li>
  );
};

export default Dropdown;
