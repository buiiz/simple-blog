import { AppProps } from 'next/app';
import { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

// import { Provider } from 'react-redux';
import wrapper from '../store';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    background: #d8e2dc;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const App: FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
