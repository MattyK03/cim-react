import React from 'react'

import "./Footer.css"
import instagram from "./images/instagram.png"
import vk from "./images/vk.png"
import facebook from "./images/facebook.png"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__content">
                <div className="footer__descr">
                    <div className="footer__descr-text">© 2021 Инжиниринговый центр инновационных материалов и технологий легкой промышленности. Все права защищены</div>
                </div>
                <div className="footer__info">
                    <div className="footer__info-item">г. Москва, 119071, ул. Малая Калужская, д.1</div>
                    <div className="footer__info-item">+7 (495) 955-33-64</div>
                    <div className="footer__info-item">inmatteh@gmail.com</div>
                </div>
                <div className="footer__socials">
                    <a href='/'><img src={instagram} alt="" className="footer__socials-img" /></a>
                    <a href='/'><img src={vk} alt="" className="footer__socials-img" /></a>
                    <a href='/'><img src={facebook} alt="" className="footer__socials-img" /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer