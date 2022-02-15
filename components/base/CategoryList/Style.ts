import styled from 'styled-components';

export const CategoryContainer = styled.div`
  width: 100%;
  margin: auto;

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;
