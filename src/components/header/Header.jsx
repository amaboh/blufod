import React, {useEffect} from 'react'
import './header.css'
import logo from '../../assets/blufod-logo.png'

import {useTranslation} from "react-i18next";
import i18next from "i18next";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'


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
        <Container>
            
            <Navbar expand="sm"
                    bg="ligth" 
                    collapseOnSelect 
                    fixed="top" >
              <Navbar.Brand href="/">
                <div className="logo__img">
                  <img src={logo} alt="logo of blufod" className='logo__img-box'/>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle className="coloring" />
              <Navbar.Collapse className="justify-content-end">

              <Nav>
                <li className="nav-item">
                    <select
                      className="nav-link bg-ligth border-0 ml-1 mr-2"
                      value={localStorage.getItem("i18nextLng")}
                      onChange={handleLanguageChange}
                    >
                      <option value="en">EN🇬🇧</option>
                      <option value="fr">FR🇫🇷</option>
                    </select>
                </li>
                <Nav.Link className="navBlog" href="https://medium.com/@blufod">Blog</Nav.Link>
           
              </Nav>
        
              </Navbar.Collapse>
                  

        </Navbar>
     

      {/* 
       
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
      */}
      </Container>
      </div> 
    </header>
  )
}

export default Header
