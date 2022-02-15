import { css } from 'styled-components';

type Weight = 400 | 500 | 600;

export const font12 = (weight: Weight) => css`
  font-size: 12px;
  line-height: 1.6666666667;
  font-weight: ${weight};
`;

export const font14 = (weight: Weight) => css`
  font-size: 14px;
  line-height: 1.2;
  font-weight: ${weight};
`;

export const font15 = (weight: Weight) => css`
  font-size: 15px;
  line-height: 1.2;
  font-weight: ${weight};
  // @NOTE: line-height: 19.2, 20, 21일 땐 덮어씌우기
`;

export const font16 = (weight: Weight) => css`
  font-size: 16px;
  line-height: 1.1875;
  font-weight: ${weight};
`;

export const fontRoboto = (fs = 80, lh = 1.175, color = 'white') => css`
  font-family: 'Roboto', sans-serif;

  font-size: ${fs}px;
  line-height: ${lh};
  color: ${color};
`;
