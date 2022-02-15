import React, { useState } from 'react';
import * as S from './Style';
import { MenuImage } from 'components/base';

import { IcoMenuBar, IcoClose } from 'public/images';

export interface MenuBarProps {
  img: StaticImageData;
  children: string;
  onClick: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
}

const MenuBar = ({ img, children, onClick }: MenuBarProps) => {
  return (
    <>
      {img === IcoClose ? (
        <S.HeaderInner>
          <div></div>
          <S.Title>{children}</S.Title>
          <div>
            <MenuImage img={img} num={16} onClick={onClick} />
          </div>
        </S.HeaderInner>
      ) : (
        <S.HeaderInner>
          <div>
            <MenuImage img={img} num={18} onClick={onClick} />
          </div>
          <S.Title>{children}</S.Title>
          <div></div>
        </S.HeaderInner>
      )}
    </>
  );
};

export default MenuBar;
