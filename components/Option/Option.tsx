import * as S from './Style';

const Option = ({ option }) => {
  const date = option.expireAt.split('T', 1);
  return (
    <S.Option>
      <div>
        <S.TextWrapper>
          <S.TextGray>유효기간</S.TextGray>
          <S.TextBlack>{date} 까지</S.TextBlack>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.TextGray>할인가</S.TextGray>
          <S.TextBlack>{option.sellingPrice}원</S.TextBlack>
        </S.TextWrapper>
      </div>
      <S.Discount>{option.count.toLocaleString()}%</S.Discount>
    </S.Option>
  );
};

export default Option;
