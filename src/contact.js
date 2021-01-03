import React from "react";
import Fade from "react-reveal/Fade";
import { useStatefulFields } from "./useStatefulFields";
import { contactAuthSubmit } from "./contactAuthSubmit";

export default function Contact() {
    const [values, handleChange] = useStatefulFields();
    const [visible, err, thanks, contactHandleClick] = contactAuthSubmit(
        "/contact",
        values
    );

    return (
        <div className="contactCont" id="contact">
            <div className="impressum">
                <Fade right>
                    <h1>CONTACT</h1>
                </Fade>
                <Fade left>
                    <p>
                        <strong>LISA-MARIA THALMAYR</strong>
                    </p>
                    <p>‚Artist influenced by nature’</p>
                    <p>Creative Concepts and Installations</p>
                    <p>Salzburg, Austria</p>
                    <p>booking@lisart.earth</p>
                    <div id="icons">
                        <a
                            href="https://www.facebook.com/lisamariathamayr"
                            target="_blank"
                        >
                            <img
                                src="images/facebook.svg"
                                alt="facebook icon"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/lis___art/"
                            target="_blank"
                        >
                            <img
                                src="images/instagram.svg"
                                alt="Instagram icon"
                            />
                        </a>
                    </div>
                </Fade>
            </div>
            {/* <div className="contactForm"> */}
            {err && (
                <div className="contactForm">
                    <h1 className="contacted">OPS, SOMETHING WENT WRONG!</h1>
                </div>
            )}
            {thanks && (
                <div className="contactForm">
                    <h1 className="contacted">THANK YOU !</h1>
                </div>
            )}
            {visible && (
                <div className="contactForm">
                    <Fade left>
                        <h1 className="contactFormH1">GET IN TOUCH</h1>
                    </Fade>
                    <Fade right>
                        <input
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="title"
                            placeholder="Title"
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            id="content"
                            name="content"
                            onChange={handleChange}
                            required
                        />
                        <button onClick={contactHandleClick}>SEND</button>
                    </Fade>
                </div>
            )}
            {/* </div> */}
        </div>
    );
}
