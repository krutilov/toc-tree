import React from "react";
import { GlobalStyle, AppWrapper, Wrapper, Header, Content } from "./styled";
import { TocList } from "../TocList";

export const App: React.FC = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <TocList />
        <Content />
      </Wrapper>
    </AppWrapper>
  );
};
