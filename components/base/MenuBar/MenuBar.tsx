import React, { ReactElement } from 'react';
import * as S from './Style';
import { MenuImage } from 'components/base';

import { IcoMenuBar, IcoClose } from 'public/images';

export interface MenuBarProps {
  img?: StaticImageData;
  children: string | ReactElement;
  onClick: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
  title?: string;
}

const MenuBar = ({ img, children, onClick, title }: MenuBarProps) => {
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
      ) : img === IcoMenuBar ? (
        <S.HeaderInner>
          <div>
            <MenuImage img={img} num={18} onClick={onClick} />
          </div>
          <S.Title>{children}</S.Title>
          <div></div>
        </S.HeaderInner>
      ) : (
        <S.HeaderInner>
          <S.SvgWrapper onClick={onClick}>{children}</S.SvgWrapper>
          {title && <S.Title>{title}</S.Title>}
          <div />
        </S.HeaderInner>
      )}
    </>
  );
};

export default MenuBar;
