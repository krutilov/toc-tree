import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    font-family:'Open Sans', 'Helvetica', 'Arial', sans-serif;
  }
`;

export const AppWrapper = styled.div`
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: calc(100vh - 50px);
`;

export const Header = styled.div`
  height: 50px;
  background: #000;
  color: #fff;
`;

export const Content = styled.div`
  padding: 32px;
`;
