import React from 'react';
import styled from "styled-components";
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <Date>MAY 2nd, 2019</Date>
      <Title>Lambda Times</Title>
      <Temp>710°</Temp>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 2px solid lightgrey;
  box-shadow: 0px 0px 5px black;
  margin-top: 45px;
  padding-bottom: 15px;

  @media (min-width: 1200px) {
    width: 84%;
  }
`;

const Date = styled.h2`
  align-self: flex-end;
  font-size: 10px;
  font-weight: bolder;
  letter-spacing: 1.25px;
  margin-left: 25px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 60px;
  font-family: Times New Roman, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: black;
`;


const Temp = styled.h2`
  align-self: flex-end;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;