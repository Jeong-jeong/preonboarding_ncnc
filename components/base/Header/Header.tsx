import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/Link';
import * as S from './Style';
import { MenuBar } from 'components/base';
import { useWindowWidth } from 'hooks';
import { IcoMenuBar, IcoClose, IcoArrow } from 'public/images';
import { Gapbox } from 'styles/commonCompo';

interface HeaderProps {
  setImageState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setImageState }: HeaderProps) => {
  const [slideToggle, setSlideToggle] = useState(false);

  const handleToggleMenu = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    const target = e.target as HTMLElement;
    const targetElem = target.closest('.toggle-button');
    if (targetElem) {
      setSlideToggle(!slideToggle);
    }
    setImageState(false);
  };
  const handleCloseMenu = () => {
    setSlideToggle(!slideToggle);
    setImageState(true);
  };

  const windowWidth = useWindowWidth();

  return (
    <S.HeaderWrapper>
      <S.HeaderInner>
        <S.HamburgerContainer className={'toggle-button'}>
          <Image src={IcoMenuBar} width={30} height={30} onClick={handleToggleMenu} />
        </S.HamburgerContainer>
        <S.Title>니콘내콘</S.Title>
        <S.Hidden />
      </S.HeaderInner>
      <S.MyPageWrapper className={`toggle-button ${slideToggle ? 'show' : 'hidden'}`}>
        <S.HeaderMenu windowWidth={windowWidth}>
          <S.MenuWrapper>
            <MenuBar img={IcoClose} onClick={handleCloseMenu}>
              마이페이지
            </MenuBar>
            <Gapbox />
            <Link href="/contacts" passHref>
              <a>
                <S.ContentWrapper>
                  <S.ContentText>고객센터</S.ContentText>
                  <S.IcoArrowWrapper>
                    <IcoArrow className="ico-arrow" />
                  </S.IcoArrowWrapper>
                </S.ContentWrapper>
              </a>
            </Link>
            <S.BlankBox />
          </S.MenuWrapper>
        </S.HeaderMenu>
      </S.MyPageWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
