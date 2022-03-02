import React from 'react';
import Image from 'next/image';

export interface MenuBarProps {
  img: StaticImageData;
  num: number;
  onClick: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
}

const MenuImage = ({ img, num, onClick }: MenuBarProps) => {
  return (
    <div>
      <Image src={img} alt="메뉴보기" width={num} height={num} onClick={onClick} />
    </div>
  );
};

export default MenuImage;
