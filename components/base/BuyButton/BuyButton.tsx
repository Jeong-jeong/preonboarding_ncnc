import { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import * as S from './Style';

interface Props {
  children: string;
  checkValue: boolean;
}

const BuyButton = ({ children, checkValue = true }: Props): ReactElement => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(checkValue);
  }, [checkValue]);

  return (
    <>
      <S.Button checkValue={checkValue} disabled={!check}>
        {children}
      </S.Button>
    </>
  );
};

export default BuyButton;
