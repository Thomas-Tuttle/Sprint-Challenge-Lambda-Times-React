import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import styled from "styled-components";

const App = () => {
  return (
    <AppContainer>
      <TopBar />
      <Header />
      <Content />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: darkgrey;
  color: black;
`;