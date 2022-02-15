import { Dispatch, SetStateAction } from 'react';
import * as S from './Style';

interface OptionType {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

interface OptionProps {
  option: OptionType;
  setValue: Dispatch<SetStateAction<string>>;
  toggle: () => void;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const Option = ({ option, setValue, toggle, setIsChecked }: OptionProps) => {
  const date = option.expireAt.split('T', 1) + ' 까지';
  const price = option.sellingPrice.toLocaleString() + '원';
  const value = `${date}/ ${price}`;

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
      <S.Discount>{option.count}%</S.Discount>
    </S.Option>
  );
};

export default Option;
