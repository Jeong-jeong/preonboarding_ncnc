import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/Link';
import * as S from './Style';
import { MenuBar } from 'components/base';
import { useWindowWidth } from 'hooks';
import { IcoMenuBar, IcoClose, IcoArrow } from 'public/images';

const Header = () => {
  const [slideToggle, setSlideToggle] = useState(false);

  const handleToggleMenu = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    const target = e.target as HTMLElement;
    const targetElem = target.closest('.toggle-button');
    if (targetElem) {
      setSlideToggle(!slideToggle);
    }
  };
  const handleCloseMenu = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    setSlideToggle(!slideToggle);
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
            <S.ContentWrapper>
              <S.ContentText>고객센터</S.ContentText>
              <S.IcoArrowWrapper>
                <Link href="/contacts" passHref>
                  <a>
                    {/* <Image
                      className="ico-arrow"
                      src={IcoArrow.src}
                      width={18}
                      height={18}
                      onClick={() => console.log('click')}
                    /> */}
                  </a>
                </Link>
              </S.IcoArrowWrapper>
            </S.ContentWrapper>
            <S.BlankBox />
          </S.MenuWrapper>
        </S.HeaderMenu>
      </S.MyPageWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
