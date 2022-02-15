import React, { useState } from 'react';
import * as S from './Style';
import { Option, CheckedOption } from 'components';

interface OptionType {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

interface OptionBoxProps {
  options: OptionType[];
  toggle: () => void;
  isActive: boolean;
  isChecked: boolean;
  setIsChecked: () => void;
}

const OptionBox = ({ options, toggle, isActive, isChecked, setIsChecked }: OptionBoxProps) => {
  const [value, setValue] = useState(null);

  return (
    <S.OptionBoxContainer>
      <S.OptionBoxBackground isActive={isActive} onClick={toggle} />
      <S.OptionBox isActive={isActive}>
        <S.Title>옵션 선택하기</S.Title>
        <S.OptionWrapper>
          {options &&
            React.Children.toArray(
              options.map((option) => (
                <Option
                  option={option}
                  setValue={setValue}
                  setIsChecked={setIsChecked}
                  toggle={toggle}
                />
              )),
            )}
        </S.OptionWrapper>
      </S.OptionBox>
      <CheckedOption value={value} isChecked={isChecked} toggle={toggle} />
    </S.OptionBoxContainer>
  );
};

export default OptionBox;
