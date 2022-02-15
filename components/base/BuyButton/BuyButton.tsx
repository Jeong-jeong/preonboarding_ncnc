import { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import * as S from './Style';

interface Props {
  children: string;
  checkValue: boolean;
  toggle: () => void;
}

const BuyButton = ({ children, checkValue = true, toggle }: Props): ReactElement => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(checkValue);
  }, [checkValue]);

  return (
    <>
      <S.Button checkValue={checkValue} disabled={!check} onClick={toggle}>
        {children}
      </S.Button>
    </>
  );
};

export default BuyButton;
