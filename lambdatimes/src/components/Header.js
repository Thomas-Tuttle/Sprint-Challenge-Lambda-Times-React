import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <div className="header">
      <span className="date">MAY 3, 2019</span>
      <h1>Lambda Times</h1>
      <span className="temp">710°</span>
    </div>
  )
}

export default Header