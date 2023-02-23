import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";

import "./Insta.css"

const Insta = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="insta">
                    <div className="section__title light-title">Мы в Instagram</div>

                    <div className="insta__posts">
                        <img src={img1} alt="" className="insta__post" />
                        <img src={img2} alt="" className="insta__post" />
                        <img src={img3} alt="" className="insta__post" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Insta;