import React from 'react'
import './footer.css'
import logo from '../../assets/blufod-logo.png'
import {ImFacebook} from "react-icons/im"
import {AiFillInstagram} from "react-icons/ai"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"

const Footer = () => {
  return (
    <section className="container container__footer">
    <main className="footer__text">
          <img src={logo} alt="blufod logo"/>
          <h3>Follow The Latest News About Blufod in our <span className="footer__blog"> <a href="/#">Blog</a></span></h3>
    </main>
     <div className="footer__social-media">
    <ul className="foooter__social-icons">
      <span>
          <a href="https://www.facebook.com/blufod" target="_blank">
           <ImFacebook/>
          </a>
          
        </span>
      <span>
          <a href="https://www.instagram.com/blufod_hq/" target="_blank">
            <AiFillInstagram/>
          </a>
        </span>
      <span>
          <a href="https://twitter.com/blufod_hq" target="_blank">
            <FaTwitter/>
          </a>
        
          </span>
      <span>
        <a href="https://www.linkedin.com/company/blufod/?viewAsMember=true" target="_blank">
            <FaLinkedinIn/>
        </a>
        </span>
    </ul>
  
    </div>
    <hr/>
    <div className="footer__all-rights">
      <small>© BluFod 2022</small>
      <small>Made remotely with ❤️</small>
    </div>
</section>
  )
}

export default Footer