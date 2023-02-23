

import "./Contacts.css";
import phone from "./Call.png";
import mail from "./Mail.png";
import { useState } from "react";

const Contacts = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [addClass, setAddClass] = useState(false);


    const handleSubmit = event => {
        event.preventDefault();

        setName('')
        setEmail('')
        setMessage('')
        setAddClass(true)

        setTimeout(() => {
            setAddClass(false)
        }, 3000)
        
    }
    
    return (
        <section className="section">
            <div className="container">
                <div className="contacts">
                    <div className="contacts__leftside">
                        <div className="section__title light-title">
                            Связаться с нами
                        </div>
                        <div className="contacts__info">
                            <img
                                src={phone}
                                alt=""
                                className="contacts__img-phone"
                            />
                            <div className="contacts__text light-title">
                                +7 (495) 955-33-64
                            </div>
                        </div>
                        <div className="contacts__info">
                            <img
                                src={mail}
                                alt=""
                                className="contacts__img-mail"
                            />
                            <div className="contacts__text light-title">
                                inmatteh@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="contacts__rightside">
                        <form onSubmit={handleSubmit} className="contacts__form">
                            <input
                                onChange={event => setName(event.target.value)}
                                value={name}
                                type="text"
                                className="contacts__form-input"
                                placeholder="Ваше имя"
                            />
                            <input
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                                type="e-mail"
                                className="contacts__form-input"
                                placeholder="E-mail"
                            />
                            <textarea
                                onChange={event => setMessage(event.target.value)}
                                value={message}
                                className="contacts__form-input big"
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Сообщение"
                            ></textarea>

                            <button
                                className="contact-btn long contacts-btn"
                                onClick={() => {handleSubmit(); setTimeout(setAddClass(false), 1000)}}
                                type="submit"
                            >
                                Свяжитесь со мной
                            </button>
                            <p id="submit-accept" className={ `contacts-submit-accept ${addClass && 'active-submit-accept'}`}>Ваша заявка принята</p>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
