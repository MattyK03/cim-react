import React from 'react'
import { NavLink } from 'react-router-dom';

import PageNums from '../utils/PageNums';
import "./NewsArchive.css"
import { newsArchiveState } from './NewsArchiveState'

const NewsArchive = () => {
  
    return (
    <section className="section section-grey">
        <div className="container">
            <div className="newsArchive">
                <div className="section__title light-title">Архив новостей</div>

                <div className="newsArchive__group">

                    {newsArchiveState.map((archive, index) => {
                        return (
                            <div className="newsArchive__item">
                                <NavLink to={`/news/${index}`}>
                                    <img src={archive.img} alt="" className="newsArchive__img" />
                                    <div className="newsArchive__text">{archive.text}</div>
                                    <div className="newsArchive__date">{archive.date}</div>
                                    <img src={archive.arrow} alt="" className="newsArchive__arrow" />
                                </NavLink>
                            </div>
                        )})}

                </div>

                <div className="newsArchive__pageNumbers">
                    <PageNums />
                </div>


            </div>
        </div>
    </section>
  )
}

export default NewsArchive