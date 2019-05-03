import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Tabs = props => {
  return (
    <TopicTabs>
      <Topics>
        <TopicsTitle>TRENDING TOPICS:</TopicsTitle>
        {props.tabs.map(tab => {return <Tab key={tab}
          selectTabHandler={props.selectTabHandler} 
          selectedTab={props.selectedTab}
          tab={tab}></Tab>})}
      </Topics>
    </TopicTabs>
  );
};


Tabs.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;

const TopicTabs = styled.div`
  height: 45px;
  margin: 15px;
  border: 2px solid lightgrey;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 5px black;

  @media (min-width: 1200px) {
    width: 90%;
  }
`;

const Topics = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'PT Sans', sans-serif;
`;

const TopicsTitle = styled.h1`
  font-family: 'PT Sans', sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;
