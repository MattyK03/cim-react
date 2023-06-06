import { NavLink } from "react-router-dom";

const New = (props) => {
    return (
        <div className="news__item">
            <NavLink to={`/news/${props.index}`}>
                <img src={props.img} alt="" className="news__img" />
                <div className="news__text">{props.text}</div>
                <div className="news__date">{props.date}</div>
                <img src={props.arrow} alt="" className="news__arrow" />
            </NavLink>
        </div>
    );
};

export default New;
