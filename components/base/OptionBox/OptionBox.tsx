import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import * as S from './Style';
import { Option, CheckedOption } from 'components/base';
import { IConItem } from 'types';

interface OptionBoxProps {
  data: IConItem;
  toggle: () => void;
  isActive: boolean;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const OptionBox = ({ data, toggle, isActive, isChecked, setIsChecked }: OptionBoxProps) => {
  const [value, setValue] = useState<string>('');
  const options = data.options;
  let [notice, refund] = data.warning.split('[환불규정]');

  notice = notice.split('\n').filter((el) => el[0] == ' ');
  refund = refund.split('\n');

  return (
    <S.OptionBoxContainer>
      <S.Name>유의사항</S.Name>
      {refund &&
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
