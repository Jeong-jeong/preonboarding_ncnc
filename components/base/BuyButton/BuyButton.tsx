import { ReactElement } from 'react';
import * as S from './Style';

interface Props {
  children: string;
  red: boolean;
}

const BuyButton = ({ children, red = true }: Props): ReactElement => {
  return (
    <>
      <S.Button red={red}>{children}</S.Button>
    </>
  );
};

export default BuyButton;
