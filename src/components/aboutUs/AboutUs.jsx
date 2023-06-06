import React from "react";
import "./AboutUs.css";

import { aboutUs } from "./AboutUsState";

const AboutUs = () => {
    return (
        <section className="section section-grey">
            <div className="container">
                <div className="aboutUs">
                    <div className="section__title light-title page-title">
                        Команда Инжинирингового Центра
                    </div>

                    <div className="aboutUs__team">
                        {aboutUs.map((about, index) => {
                            return (
                                <div className="aboutUs__team-item">
                                    <img
                                        src={about.img}
                                        alt=""
                                        className="aboutUs__team-img"
                                    />
                                    <div className="aboutUs__team-name">
                                        {about.name}
                                    </div>
                                    <div className="aboutUs__team-post">
                                        {about.post}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
