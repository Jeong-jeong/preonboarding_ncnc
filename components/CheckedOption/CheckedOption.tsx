import * as S from './Style';

interface CheckedOptionProps {
  value: string;
  isChecked: boolean;
  toggle: () => void;
}

const CheckedOption = ({ value, isChecked, toggle }: CheckedOptionProps) => {
  return (
    <S.Container isChecked={isChecked}>
      <S.innerBox onClick={toggle}>
        <S.Value>{value}</S.Value>
      </S.innerBox>
    </S.Container>
  );
};

export default CheckedOption;
