import {NavLink} from "react-router-dom";
import { Link } from "react-scroll";
import { useRef } from "react";

import "./Header.css";
import contact from "./contact.png"
import burger from "./burger.png"
import close from "./close.png"

const Header = () => {

    const navRef = useRef()

    const showNav = () => {
        navRef.current.classList.toggle('navbar-mob-show')
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <NavLink to="/" className="logo"></NavLink>


                    <nav ref={navRef} className="navbar navbar-active">
                        <img src={close} alt="" className="navbar-close navbar-mob" onClick={showNav}/>

                        <NavLink to="/" className="navbar__item navbar__item-main">Главная</NavLink>
                        <NavLink to="/news" className="navbar__item">Новости</NavLink>
                        <NavLink to="/aboutus" className="navbar__item">О нас</NavLink>
                        <NavLink to="/projects" className="navbar__item">Проекты</NavLink>
                        <NavLink to="/science" className="navbar__item">Наука</NavLink>
                        <NavLink to="/partners" className="navbar__item">Партнеры</NavLink>
                    </nav>

                    <Link spy={true} smooth={true} offset={-200} duration={1500} to="contacts" className="contact-btn header-btn">
                        Связаться с нами
                    </Link>
                    <div className="navbar-group">
                        <Link spy={true} smooth={true} offset={-200} duration={1500} to="contacts" className="contact-btn-mob">
                            <img src={contact} alt="" className="contact-btn-mob-img" />
                        </Link>

                        <img src={burger} alt="" className="navbar-mob" onClick={showNav}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;