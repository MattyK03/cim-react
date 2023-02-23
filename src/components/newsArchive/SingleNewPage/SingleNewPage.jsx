import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";

import { newPage } from "./SingleNewPageState";
import leftArrow from "../../../leftArrow.png"
import './SingleNewPage.css'

const SingleNewPage = () => {
    const {id} = useParams();
    const singleNew = newPage[id];

    const [buttonClass, setButtonClass] = useState(false)
    
    const handleClick = () => {
        setButtonClass(buttonClass => !buttonClass)
    }
    
    let toggleClass = buttonClass ? 'active' : null

    return (
        <section className="section section-grey nopaddingtop">
            <div className="container--large">
                <div className="new">
                    <div className="new__header" onClick={handleClick}>
                        <img src={singleNew.newBg} alt="" className="new__header--bg" />
                        <div className="new__header--subtitle">новости</div>
                        <div className="new__header--title">{singleNew.newTitle}</div>
                        <div className="new__header--date">{singleNew.newDate}</div>
                        <NavLink to="/news">
                            <div className="new__header--toArchive">
                                <img src={leftArrow} alt="" className="leftArrow" />
                                <div className="new__header--toArchive-title">Архив новостей</div>
                            </div>
                        </NavLink>
                    </div>

                    <div className={`container animated ${toggleClass}`}>
                        <div className="new__content">
                            <div className="new__content--p">{singleNew.p1}</div>
                            <img src={singleNew.bigImg1} alt="cim" className="new__content--bigImg" />
                            <img src={singleNew.bigImg2} alt="cim" className="new__content--bigImg" />
                            <div className="new__content--p">{singleNew.p2}</div>
                            <div className="new__content--mediumImgs">
                                <img src={singleNew.mediumImg1} alt="cim" />
                                <img src={singleNew.mediumImg2} alt="cim" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SingleNewPage;
