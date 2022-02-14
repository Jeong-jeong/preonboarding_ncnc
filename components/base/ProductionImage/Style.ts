import styled from 'styled-components';
import { ProductionImageProps } from './ProductionImage';

export const ProductionImageWrapper = styled.img<Pick<ProductionImageProps, 'size'>>`
  ${({ size }) => (size === 'small' ? `width: 70px; height: 70px;` : `width: 90px; height: 90px;`)};
`;
