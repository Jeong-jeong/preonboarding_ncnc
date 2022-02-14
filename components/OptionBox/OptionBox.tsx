import React from 'react';
import * as S from './Style';
import { Option } from 'components';

interface OptionType {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

interface OptionBoxProps {
  options: OptionType[];
}

const OptionBox = ({ options }: OptionBoxProps) => {
  return (
    <S.OptionBoxBackground>
      <S.OptionBox>
        <S.Title>옵션 선택하기</S.Title>
        <S.OptionWrapper>
          {options && React.Children.toArray(options.map((option) => <Option option={option} />))}
        </S.OptionWrapper>
      </S.OptionBox>
    </S.OptionBoxBackground>
  );
};

export default OptionBox;
