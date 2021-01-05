import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import axios from "./axios";

export default function Projects() {
    const [progetti, setProgetti] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("/house");
            if (data) {
                setProgetti(data);
            } else {
                location.replace("/");
            }
        })();
    }, []);

    return (
        <div className="fadeCont" id="projects">
            {/* <Fade top> */}
            <div className="projectsCont">
                {progetti.map((progetto, idx) => {
                    return (
                        <div key={idx}>
                            {/* <h2 className="nomeProgetto">{progetto.name}</h2> */}
                            <Link to={`/project/${progetto.id}`}>
                                {/* <div className="overl">
                                    <h1>{progetto.name}</h1>
                                </div> */}
                                <img
                                    className="proImg"
                                    height="350"
                                    width="500"
                                    src={progetto.preview}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
            {/* </Fade> */}
        </div>
    );
}
