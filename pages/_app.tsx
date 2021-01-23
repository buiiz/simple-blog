import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import { useStore } from '../store';

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

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
