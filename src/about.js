import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="aboutSection" id="about">
            <Fade top>
                <p className="about">
                    <span className="l">
                        <span className="initial">L</span>isa-Maria Thalmayr
                    </span>{" "}
                    is an Artist and international Floral Designer based in
                    Salzburg, Austria.
                </p>
            </Fade>
            <Fade top>
                <img
                    src="images/lisa.jpeg"
                    alt="profile pic"
                    className="profileImageMobile"
                />
            </Fade>
            <Fade top>
                <p className="about">
                    Her work is inspired and influenced by nature. With her
                    trade <span className="l big">LIS ART</span> she's working
                    in various fields. As Trendflorist she is experimenting with
                    new techniques and design visions. She is teaching students
                    on their way to become floral designers. With the Artist
                    Collective 'Follow the Circle' she is working on Various Art
                    Projects.
                </p>
            </Fade>
            <Fade top>
                <img
                    src="images/lisa3.jpeg"
                    alt="profile pic"
                    className="profileImageMobile"
                />
                <img
                    src="images/lisa11.jpg"
                    alt="profile pic"
                    className="profileImageDesktop"
                />
            </Fade>
            <Fade top>
                <p className="about">
                    <span className="virgo">"</span>My concept is pure and
                    simple. Providing people with flowers and see all of the
                    energies flowers can trigger. My strong point is
                    <span className="l"> Improvisation</span> and
                    <span className="l"> Transforming</span>. Creating something
                    new out of something which no longer serves its original
                    purpose. For me, flowers are thousands of different emotions
                    and it’s up to us which side we want to show. I’m in the
                    wonderful position that I'm able to express myself through
                    this amazing craftwork, being an ambassador of nature.
                    <span className="virgo">"</span>
                </p>
            </Fade>
            <div className="newHeader aboutHead">
                <Link to={"/home"} style={{ textDecoration: "none" }}>
                    <p className="navigators">Home</p>
                </Link>
                {/* <p className="navigators name">
                    <strong>{progetto.name}</strong>
                </p> */}
                <Link to={"/Projects"} style={{ textDecoration: "none" }}>
                    <p className="navigators">Works</p>
                </Link>
            </div>
        </div>
    );
}
