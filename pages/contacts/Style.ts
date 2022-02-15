import styled from 'styled-components';
import { hideScrollbar } from 'styles/commonStyle';
import { font14, font16 } from 'styles/font';

export const ContactPageWrapper = styled.div`
  // @FIXME: scrollbar 숨기기
  ${hideScrollbar};
  margin-top: ${({ theme }) => `${theme.size.baseHeight}px`};
`;

export const ContactInfos = styled.section`
  padding: ${({ theme }) => `0 ${theme.gap.baseInner}px`};
  padding-top: ${({ theme }) => `${theme.gap.baseInner + 30}px`};
  padding-bottom: 110px;
  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    margin-bottom: 7px;
    ${font16(500)};
  }

  p {
    margin: 0;
    ${font14(500)};

    &:not(:last-child) {
      margin-bottom: 3px;
    }

    &.putGray {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;
