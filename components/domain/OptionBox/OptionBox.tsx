import React, { useState, Dispatch, SetStateAction } from 'react';
import * as S from './Style';
import { Option, CheckedOption } from 'components/base';
import { Options } from 'types/ConItem';

interface OptionBoxProps {
  options: Options[];
  warning: string;
  originalPrice: number;
  toggle: () => void;
  isActive: boolean;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const OptionBox = ({
  options,
  warning,
  originalPrice,
  toggle,
  isActive,
  isChecked,
  setIsChecked,
}: OptionBoxProps) => {
  const [value, setValue] = useState<string>('');
  let notice = ['등록된 데이터가 없습니다.'];
  let refund = ['등록된 데이터가 없습니다.'];

  if (warning) {
    const warningData = warning.split('[환불규정]');
    notice = warningData[0].split('\n').filter((e) => e[0] === ' ');
    refund = warningData[1].split('\n');
  }

  return (
    <S.OptionBoxContainer>
      <S.Name>유의사항</S.Name>
      {notice &&
        React.Children.toArray(notice.map((el) => <S.Contents>{el.replace('-', '')}</S.Contents>))}
      <S.Name>환불규정</S.Name>
      {refund &&
        React.Children.toArray(refund.map((el) => <S.Contents>{el.replace('-', '')}</S.Contents>))}
      <S.OptionBoxBackground isActive={isActive} onClick={toggle} />
      <S.OptionBox isActive={isActive}>
        <S.Title>옵션 선택하기</S.Title>
        <S.OptionWrapper>
          {options &&
            React.Children.toArray(
              options.map((option) => (
                <Option
                  option={option}
                  originalPrice={originalPrice}
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
