import styled from 'styled-components';
import { flexbox } from 'styles/commonStyle';
import { font14 } from 'styles/font';

interface isCheckedType {
  isChecked: boolean;
}

export const Container = styled.div<isCheckedType>`
  width: 100%;
  padding: 17px;
  position: absolute;
  left: 0;
  bottom: ${({ isChecked }) => (isChecked ? '80px' : '-50%')};
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.background};
`;

export const innerBox = styled.div`
  width: 100%;
  height: 30px;
  padding: 0 8px 0 17px;
  ${flexbox({ jc: 'between' })};
  background: ${({ theme }) => theme.colors.background};
  cursor: pointer;
`;

export const Value = styled.h1`
  ${font14(500)}
`;

export const ImgBox = styled.div`
  width: 14px;
  height: 14px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
