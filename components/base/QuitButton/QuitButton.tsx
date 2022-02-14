import { ReactElement } from 'react';
import * as S from './Style';

interface Props {
  children: string;
}

const QuitButton = ({ children }: Props): ReactElement => {
  return (
    <>
      <S.Button>{children}</S.Button>
    </>
  );
};

export default QuitButton;
