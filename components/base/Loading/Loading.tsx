import React from 'react';
import { ClipLoader } from 'react-spinners';
import { css } from 'styled-components';
import * as S from './Style';

const Loading = () => {
  return (
    <S.SpinContainer>
      <ClipLoader color="#3d66ba" size={30} />
    </S.SpinContainer>
  );
};

export default Loading;
