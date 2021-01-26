import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body > #__next {
	font-family: "Roboto";
	height: 100vh;
	background: whitesmoke;
	padding: 1em;
	overflow: hidden;
}
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    font-family: 'Eczar';
    font-size: 60vmax;
    color: #00949e;
    letter-spacing: 0.025em;
    margin: 0;
    transition: 750ms ease-in-out;
  }
`;

const Custom404 = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1 id="code">404</h1>
      </Wrapper>
    </>
  );
};

export default Custom404;
