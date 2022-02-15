import styled from 'styled-components';
import { font14, font16 } from 'styles/font';

export const ProductionInfoWrapper = styled.div`
  padding: 0 20px;
  > * {
    ${font16(600)};
  }
`;

export const BrandName = styled.h3`
  ${font14(400)};
  margin-bottom: 7px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const ProductionName = styled.h2``;

export const PriceTab = styled.div`
  margin-top: 14px;
`;

export const Discount = styled.span`
  color: ${({ theme }) => theme.colors.red};
  margin-right: ${({ theme }) => `${theme.gap.baseGap}px`};
`;

export const OriginalPrice = styled.span`
  margin-right: ${({ theme }) => `${theme.gap.baseGap}px`};
`;

export const MinPrice = styled.span`
  ${font14(400)};
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.gray};
`;
