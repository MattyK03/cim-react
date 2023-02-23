import React from 'react'

import { sciences } from './SciencesState'
import "./Sciences.css"
import PageNums from '../utils/PageNums'

const Sciences = () => {
  return (
    <section className="section section-grey">
        <div className="container--large">
            <div className="sciences">
                <div className="section__title light-title">Наука</div>
                
                <div className="sciences__group">
                    {sciences.map((science, index) => {
                        return (
                            <div className="sciences__item card__item">
                                <img src={science.img} alt="" className="card__img" />
                                <div className="science__name">{science.name}</div>
                                <div className="science__date">{science.date}</div>
                                <img src={science.arrow} alt="" className="sciences__arrow" />
                            </div>
                    )})}
                </div>

                <div className="sciences__pageNums">
                    <PageNums />
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Sciences