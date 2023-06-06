import "./Place.css";

import location from "./location.png";

const Place = () => {
    return (
        <section className="section section-grey">
            <div className="container">
                <div className="place">
                    <div className="place_leftside">
                        <div className="section__title dark-title">
                            Где мы находимся
                        </div>
                        <div className="place__adress">
                            <img src={location} alt="" className="place-dot" />
                            <div className="place__adress-text">
                                г. Москва, 119071, ул. Малая Калужская, д.1
                            </div>
                        </div>
                    </div>

                    <iframe
                        title="_"
                        className="place__map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1889.6733944019581!2d37.600025166170035!3d55.720049646538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f1076c4e118c53%3A0xef773c97b6c0c4d9!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQmtC-0YHRi9Cz0LjQvdCw!5e0!3m2!1sru!2sru!4v1675005527968!5m2!1sru!2sru"
                        width="600"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Place;
