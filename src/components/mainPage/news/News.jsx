import { NavLink } from "react-router-dom";

import New from "./New";
import "./News.css"
import { news } from "./NewsState.jsx";

const News = () => {
    
    const rightArrow = 
    <svg className="arrow rightArrow" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path className="arrow rightArrow" d="M14.2832 5L21.0003 12L14.2832 19" fill='none' stroke="#0074FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <line className="arrow rightArrow" x1="19.7324" y1="12.0317" x2="3.99936" y2="12.0317" stroke="#0074FC" stroke-width="2" stroke-linecap="round"/>
    </svg>
    
    return (

        <section className="section section-grey">
            <div className="container">
                <div className="news">
                    <div className="section__title light-title">Новости</div>

                    <div className="news__group">
                        {news.map((newItem, index) => {
                            return <New
                                        key={index}
                                        index={index}
                                        text={newItem.text}
                                        date={newItem.date}
                                        img={newItem.img}
                                        arrow={newItem.arrow}
                                    />
                        })}
                    </div>

                    <NavLink className="archive-btn long invert-btn btn-with-arrow" to="/news">
                        <p>Архив новостей</p>
                        {rightArrow}
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default News;