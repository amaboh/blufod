import React, {useEffect} from 'react'
import './header.css'
import logo from '../../assets/blufod-logo.png'

import {useTranslation} from "react-i18next";
import i18next from "i18next";


export const Header = () => {
const{i18n, t} = useTranslation(["main"])

useEffect(()=>{
  if(localStorage.getItem("i18nextLng")?.length > 2){
    i18next.changeLanguage("en");
  }
}, [])

const handleLanguageChange = (e) => {
  i18n.changeLanguage(e.target.value);
};

  return (
    <header>
      <div className="container container__header">
        <div class="logo__img">
          <img src={logo} alt="logo of blufod" class='logo__img-box'/>
        </div>
        <div class='header__site'>
          <li className="nav-item">
              <select
                className="nav-link bg-dark border-0 ml-1 mr-2"
                value={localStorage.getItem("i18nextLng")}
                onChange={handleLanguageChange}
              >
                <option value="en">EN🇬🇧</option>
                <option value="fr">FR🇫🇷</option>
              </select>
            </li>
          <a href="https://medium.com/@blufod">Blog</a>
        </div>
  
      </div>
    </header>
  )
}

export default Header
