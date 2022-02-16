import styled from 'styled-components';

// @NOTE: 공통적인 컴포넌트 모아놓는 곳

export const Gapbox = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: ${({ theme }) => `${theme.gap.baseGap}px`};
`;
