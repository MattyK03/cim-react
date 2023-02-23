import { Link } from "react-scroll";
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <section className="section section-grey">
            <div className="container">
                <div className="contact">

                    <div className="contact__img"></div>

                    <h1 className="contact__title">Инжиниринговый центр инновационных материалов и технологий</h1>
                    <div className="contact__subtitle">Инжиниринговый центр инновационных материалов и технологий легкой промышленности создан 
                        с целью использования научного, технологического 
                        и кадрового потенциала РГУ им. А.Н. Косыгина
                    </div>

                    <Link spy={true} smooth={true} offset={-100} duration={1500} to="contacts" className="contact-btn invert-btn idk">
                        Связаться с нами
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;