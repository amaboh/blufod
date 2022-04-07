import React from 'react'
import './header.css'
import logo from '../../assets/blufod-logo.png'


export const Header = () => {
  return (
    <header>
      <div className="container container__header">
        <div class="logo__img">
          <img src={logo} alt="logo of blufod" class='logo__img-box'/>
        </div>
        <div class='header__site'>
          <a href="/#">Blog</a>
        </div>
  
      </div>
    </header>
  )
}

export default Header
