const Direction = (props) => {
    return (
        <div id={props.index} className="directions__item">
            <div className="directions__title">
                <img
                    src={props.direction.img}
                    alt=""
                    className="directions__img"
                />
                <div className="directions__text">{props.direction.text}</div>
            </div>

            <div
                className={
                    props.index % 2 === 1
                        ? `directions__more right`
                        : "directions__more"
                }
            >
                <h2>{props.direction.moreTitle}</h2>
                <p>{props.direction.moreText}</p>
            </div>
        </div>
    );
};

export default Direction;
