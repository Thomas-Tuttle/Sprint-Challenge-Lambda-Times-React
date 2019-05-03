import React from 'react';
import styled from "styled-components";
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const TopBar = () => {
  return (
    <Container>
      <Header>
        <LeftNavContainer>
          <LeftLink>TOPICS</LeftLink>
          <LeftLink>SEARCH</LeftLink>
        </LeftNavContainer>
            <CenterNavContainer>
              <CenterLink>GENERAL</CenterLink>
              <CenterLink>BROWNBAG</CenterLink>
              <CenterLink>RANDOM</CenterLink>
              <CenterLink>MUSIC</CenterLink>
              <CenterLink>ANNOUNCEMENTS</CenterLink>
            </CenterNavContainer>
        <LogInContainer>
          <LogIn>LOG IN</LogIn>
        </LogInContainer>
      </Header>
    </Container>
  )
}

export default TopBar;


const Container = styled.div`
  width: 100%;
  height: 45px;
  position: relitive;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #332f2f;
`;

const Header = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  color: white;
  letter-spacing: 1.25px;
  
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const LeftNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

const LeftLink = styled.h1`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
  font-size: 12px;
  font-family: 'PT Sans', sans-serif;

  &:hover {
    color: red;
  }
`;

const CenterNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

const CenterLink = styled.h1`
  cursor: pointer;
  margin: 2.5%;
  font-size: 8px;
  font-family: 'PT Sans', sans-serif;

  &:hover {
    text-decoration: underline;
    color: red;
  }
`;

const LogInContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  
`;

const LogIn = styled.h1`
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  font-family: 'PT Sans', sans-serif;

  &:hover {
    color: red;
  }
`;