import { NavLink } from "react-router-dom";

import rightArrow from "../../../rightArrow.svg"
import New from "./New";
import "./News.css"
import { news } from "./NewsState.jsx";

const News = () => {
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

                    <NavLink to="/news">
                        <button className="archive-btn long invert-btn btn-with-arrow">
                            Архив новостей
                            <img src={rightArrow} alt="" className="arrow rightArrow" />
                        </button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default News;