import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import { theme } from 'styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>니콘내콘</title>
        <title>니콘내콘 - 국내 1위 기프티콘 플리마켓</title>
        <meta
          name="description"
          content="모바일 쿠폰 중고거래 사이트. 남들은 정가로 살 때, 나는 할인가로 산다"
        ></meta>
        <meta
          name="keywords"
          content="쿠폰,상품권,기프티콘,기프티콘판매,기프티콘구매,기프티콘추천,기프티콘앱,편의점기프티콘,기프티콘선물,기프티콘사용법,모바일쿠폰,모바일상품권,중고쿠폰,중고장터,e쿠폰,할인쿠폰"
        ></meta>
        <meta name="og:title" content="니콘내콘 - 국내 1위 기프티콘 플리마켓"></meta>
        <meta
          name="og:description"
          content="모바일 쿠폰 중고거래 사이트. 남들은 정가로 살 때, 나는 할인가로 산다"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
