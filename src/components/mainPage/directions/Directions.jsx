import { Link } from "react-scroll";
import { directions } from "./DirectionsState";
import "./Directions.css"

const Directions = () => {
    
    return (
        <section className="section">
            <div className="container">
                <div className="directions">
                    <div className="section__title light-title">Направления</div>

                    <div className="directions__group">
                        {directions.map((direction, index) => {
                            return (
                            <div id={index} className="directions__item">
                                <div className="directions__title">
                                    <img src={direction.img} alt="" className="directions__img" />
                                    <div className="directions__text">{direction.text}</div>
                                </div>

                                <div className={index % 2 === 1 ? "directions__more right" : "directions__more"}>
                                    <h2>{direction.moreTitle}</h2>
                                    <p>{direction.moreText}</p>
                                </div>
                            </div>
                            
                            )})}
                    </div>

                    <Link spy={true} smooth={true} offset={-450} duration={1500} to="contacts" className="contact-btn direction-btn">
                        Связаться с нами
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Directions;