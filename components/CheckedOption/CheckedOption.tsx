import * as S from './Style';
import { IcoPencil } from 'public/images';

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
        <S.ImgBox>
          <img src={IcoPencil.src} alt="연필아이콘" />
        </S.ImgBox>
      </S.innerBox>
    </S.Container>
  );
};

export default CheckedOption;
