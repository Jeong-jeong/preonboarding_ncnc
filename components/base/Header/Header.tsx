import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  const [contactState, setContactState] = useState(false);

  const handleToggleMenu = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    const target = e.target as HTMLElement;
    const targetElem = target.closest('.toggle-button');
    if (targetElem) {
      setContactState(true);

      setTimeout(() => {
        setSlideToggle(!slideToggle);
      }, 100);
    }
    setImageState(false);
  };
  const handleCloseMenu = () => {
    setSlideToggle(!slideToggle);
    setImageState(true);
    setContactState(false);
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
      {contactState && (
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
                      {/* <Image className="ico-arrow" src={IcoArrow} width={16} height={16} /> */}
                    </S.IcoArrowWrapper>
                  </S.ContentWrapper>
                </a>
              </Link>
              <S.BlankBox />
            </S.MenuWrapper>
          </S.HeaderMenu>
        </S.MyPageWrapper>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
