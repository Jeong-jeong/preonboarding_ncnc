import styled from 'styled-components';

export const Gapbox = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: ${({ theme }) => `${theme.gap.baseGap}px`};
`;
