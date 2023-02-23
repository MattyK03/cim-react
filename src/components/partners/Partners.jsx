import React from 'react'

import { partners } from './PartnersState'
import "./Partners.css"

const Partners = () => {
  return (
    <section className="section section-grey">
        <div className="container">
            <div className="partners">
                <div className="section__title light-title">Партнеры</div>
                <div className="partners__groups">

                    {partners.map((partner, index) => {
                        return (
                            <div className="partners__groups--group">
                                <div className="partners__title">{partner.title}</div>
                                <div className={`${partner.items.length < 3 ? "partners__items-short" : "partners__items"}`}>
                                    {partner.items.map((partnerItem, index) => {
                                        return (
                                        <div className={`${partner.items.length < 3 ? "partners__items--item-short" : "partners__items--item"}`}>
                                            <img src={partnerItem.img} alt="" className="partners__img" />
                                            <div className="partners__name">{partnerItem.name}</div>
                                        </div>
                                    )})}
                                </div>
                            </div>
                    )})}

                </div>
            </div>
        </div>
    </section>
  )
}

export default Partners