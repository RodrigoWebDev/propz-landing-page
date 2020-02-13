import React from 'react'
import logo from '../assets/images/logo.png'
import "../assets/css/header.css"

const Header = () => (
    <header className="header">
        <h1>Beleza</h1>
        <a href="/" className="header-logo"><img src={logo} alt="Propz Logo"/></a>
    </header>
)

export default Header
