import React from 'react'
import './footer.css'
import logo from '../../assets/blufod-logo.png'
import {ImFacebook} from "react-icons/im"
import {AiFillInstagram} from "react-icons/ai"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"

import{useTranslation} from "react-i18next"
import Image from "react-image-webp"

const Footer = () => {
  const {t} = useTranslation(["footer"])
  return (
    <section className="container container__footer">
    <main className="footer__text">
          <Image src={require('../../assets/blufod-logo.png')}
                  webp={require('../../assets/blufod-logo.webp')}
                  alt="blufod logo"/>
          <h3>{t("follow")} <span className="footer__blog"> <a href="https://medium.com/@blufod" target="_blank">Blog</a></span></h3>
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
      <small>{t("made_remotely")}</small>
    </div>
</section>
  )
}

export default Footer