import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Headroom from "react-headroom";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import { Link } from "react-router-dom";
import axios from "./axios";

export default function Home() {
    const [progetti, setProgetti] = useState([]);

    useEffect(() => {
        (async () => {
            window.scrollTo(0, 0);
            const { data } = await axios.get("/house");
            if (data) {
                setProgetti(data);
            } else {
                location.replace("/about");
            }
        })();
    }, []);

    const moverToContact = () => {
        document.getElementById("contact").scrollIntoView();
    };

    const moverToAbout = () => {
        document.getElementById("about").scrollIntoView();
    };

    const moverToProjects = () => {
        document.getElementById("projects").scrollIntoView();
    };

    return (
        <div className="whole">
            <div className="caroPlusHeader caroDesktop">
                <Carousel
                    indicators={false}
                    className="container-fluid caro"
                    style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        height: "91vh",
                    }}
                >
                    {progetti.map((progetto, idx) => {
                        return (
                            <Carousel.Item
                                key={idx}
                                style={{
                                    height: "91vh",
                                    backgroundColor: "black ",
                                }}
                                interval={4000}
                            >
                                <Link to={`/project/${progetto.id}`}>
                                    <img
                                        className="d-block w-100"
                                        src={progetto.preview}
                                        alt="project preview"
                                    />
                                    <Carousel.Caption
                                        style={{
                                            padding: "20px",
                                            fontSize: "larger",
                                            fontFamily: "Roboto",
                                            backgroundColor: "rgba(0,0,0,0.3)",
                                            height: "40%",
                                            position: "absolute",
                                            bottom: "10%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-evenly",
                                            alignItems: "center",
                                            top: "50%",
                                        }}
                                    >
                                        <h3 className="caroTitle">
                                            <strong>{progetto.name}</strong>
                                        </h3>
                                        <pre className="preDescription">
                                            <p>{progetto.description}</p>
                                        </pre>
                                        <p className="mobDescription">
                                            {progetto.description}
                                        </p>
                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>{" "}
                <Headroom>
                    <p className="navigators" onClick={moverToAbout}>
                        ABOUT
                    </p>
                    <p className="navigators" onClick={moverToProjects}>
                        RECENT WORKS
                    </p>
                    <p className="navigators" onClick={moverToContact}>
                        CONTACT
                    </p>
                </Headroom>
            </div>
            <div className="caroPlusHeader caroMobile">
                <Carousel
                    indicators={false}
                    className="container-fluid caro"
                    style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        // height: "91vh",
                    }}
                >
                    {progetti.map((progetto, idx) => {
                        return (
                            <Carousel.Item
                                key={idx}
                                style={{
                                    // height: "91vh",
                                    backgroundColor: "black ",
                                }}
                                interval={4000}
                            >
                                <Link to={`/project/${progetto.id}`}>
                                    <img
                                        className="d-block w-100"
                                        src={progetto.preview}
                                        alt="project preview"
                                    />
                                    <Carousel.Caption
                                        style={{
                                            padding: "20px",
                                            fontSize: "larger",
                                            fontFamily: "Roboto",
                                            backgroundColor: "rgba(0,0,0,0.3)",
                                            height: "40%",
                                            position: "absolute",
                                            bottom: "10%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-evenly",
                                            alignItems: "center",
                                            top: "30%",
                                        }}
                                    >
                                        <h3 className="caroTitle">
                                            <strong>{progetto.name}</strong>
                                        </h3>
                                        <pre className="preDescription">
                                            <p>{progetto.description}</p>
                                        </pre>
                                        <p className="mobDescription">
                                            {progetto.description}
                                        </p>
                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>{" "}
                <Headroom>
                    <p className="navigators" onClick={moverToAbout}>
                        ABOUT
                    </p>
                    <p className="navigators" onClick={moverToProjects}>
                        RECENT WORKS
                    </p>
                    <p className="navigators" onClick={moverToContact}>
                        CONTACT
                    </p>
                </Headroom>
            </div>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
