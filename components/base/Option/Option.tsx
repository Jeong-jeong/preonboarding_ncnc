import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Options } from 'types/ConItem';
import { getDiscount } from 'utils/fucntions';
import * as S from './Style';

interface OptionProps {
  option: Options;
  originalPrice: number;
  setValue: Dispatch<SetStateAction<string>>;
  toggle: () => void;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const Option = ({ option, originalPrice, setValue, toggle, setIsChecked }: OptionProps) => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const expireAt = option.expireAt.split('T', 1).join();
    setDate(`${expireAt.replace('-', '.').replace('-', '.')}`);
  }, [option]);

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
          <S.TextBlack>{date} 까지</S.TextBlack>
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

export default Option;
