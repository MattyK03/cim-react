import { Suspense, lazy } from "react";
import { Link } from "react-scroll";
import "./Directions.css";
import { directions } from "./DirectionsState";

const DirectionItem = lazy(() => import("./Direction"));

const Directions = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="directions">
                    <div className="section__title light-title">
                        Направления
                    </div>

                    <div className="directions__group">
                        {directions.map((direction, index) => {
                            return (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <DirectionItem
                                        direction={direction}
                                        index={index}
                                    />
                                </Suspense>
                            );
                        })}
                    </div>

                    <Link
                        spy={true}
                        smooth={true}
                        offset={-450}
                        duration={1500}
                        to="contacts"
                        className="contact-btn direction-btn"
                    >
                        Связаться с нами
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Directions;
