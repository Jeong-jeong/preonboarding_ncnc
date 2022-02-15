import * as S from './Style';

interface OptionType {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

interface OptionProps {
  option: OptionType;
  setValue: (value: string) => void;
  toggle: () => void;
  setIsChecked: (checked: boolean) => void;
}

const Option = ({ option, setValue, toggle, setIsChecked }: OptionProps) => {
  const date = option.expireAt.split('T', 1) + ' 까지';
  const price = option.sellingPrice.toLocaleString() + '원';

  const handleClick = () => {
    setValue(`${date}/ ${price}`);
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
