import React from 'react';
import myntra_header from "../images/myntra-header.png";

const Header = () => (
    <header className="App-header">
        <a href="#">
            <img src={myntra_header} className="App-header-img" alt="logo"/>
        </a>
    </header>
);

export default Header;