import React from "react";
import logo from '../../logo.svg';

const Header = ()=>{
  return (<div className="header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to Music Station</h2>
  </div>)
};

export default Header;