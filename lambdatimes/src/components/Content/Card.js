import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const Card = props => {
  return (
    <CardBody>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgContainer>
          <Img src={props.card.img} alt="Author" />
        </ImgContainer>
        <Credits>By {props.card.author}</Credits>
      </Author>
    </CardBody>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string
  }),
  'get key': PropTypes.func
}

export default Card;

const CardBody = styled.div`
  width: 26.5%;
  max-height: 100;
  padding: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  border: 2px solid lightgrey;
  border-radius: 20px;
  box-shadow: 0px 1px 7px black;

`;

const Headline = styled.div`
margin-top: -10px;
  font-size: 22px;
  font-weight: 600;
  &:hover {text-decoration: underline;
  cursor: pointer;
  }
`;

const Author = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  margin-top: 35px;
  font-family: 'PT Sans', sans-serif;
`;

const ImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const Img = styled.img`
  width: 45px;
  border-radius: 50%;
  box-shadow: 0px 0px 8px black;
  &:hover {box-shadow: 0px 0px 8px red;
  }
`;

const Credits = styled.h1`
  display: flex;
  justify-content: flex-end;
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 500;
`;