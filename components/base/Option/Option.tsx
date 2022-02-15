import { Dispatch, SetStateAction } from 'react';
import * as S from './Style';
import { Options } from 'types/ConItem';
import { getDiscount } from 'utils/fucntions';

interface OptionProps {
  option: Options;
  originalPrice: number;
  setValue: Dispatch<SetStateAction<string>>;
  toggle: () => void;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const Option = ({ option, originalPrice, setValue, toggle, setIsChecked }: OptionProps) => {
  let date = '';
  let expireAt = '';

  if (option.expireAt.indexOf('Z') > 0) {
    expireAt = option.expireAt.split('T', 1).join();
    date = `${expireAt.replace('-', '.').replace('-', '.')} 까지`;
  } else {
    const expireAt = option.expireAt.substring(4, 15).split(' ');
    const month = Month[expireAt[0]];
    date = `${expireAt[2]}.${month}.${expireAt[1]} 까지`;
  }

  const price = option.sellingPrice.toLocaleString() + '원';
  const value = `${date}/ ${price}`;
  const discount = getDiscount(originalPrice, option.sellingPrice);

  const handleClick = () => {
    setValue(value);
    setIsChecked((checked) => !checked);
    toggle();
  };
  return (
    <S.Option onClick={handleClick}>
      <div>
        <div>
          <S.TextGray>유효기간</S.TextGray>
          <S.TextBlack>{date}</S.TextBlack>
        </div>
        <div>
          <S.TextGray>할인가</S.TextGray>
          <S.TextBlack>{price}</S.TextBlack>
        </div>
      </div>
      <S.Discount>{discount}%</S.Discount>
    </S.Option>
  );
};

const Month = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

export default Option;
