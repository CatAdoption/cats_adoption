import React from 'react';
import "./style.css"
class Header extends React.Component {
state = {}
render(){
    return (
        <div className="header">
        <a href="#default" className="logo">Cats Adoption</a>
        <div className="header-right">
          <a className="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    )
}
}

export default Header