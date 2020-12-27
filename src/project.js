import React, { useState, useEffect } from "react";
import axios from "./axios";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";

export default function Progetto(props) {
    const [progetto, setProgetto] = useState({});

    const id = props.match.params.id;

    useEffect(() => {
        (async () => {
            window.scrollTo(0, 0);
            const { data } = await axios.get(`/project/${id}.json`);
            if (data) {
                setProgetto({
                    name: data.name,
                    description: data.description,
                    longDescription: data.longdescription,
                    preview: data.preview,
                    imageOne: data.imageone,
                    imageTwo: data.imagetwo,
                    imageThree: data.imagethree,
                    imageFour: data.imagefour,
                    imageFive: data.imagefive,
                    imageSix: data.imagesix,
                    imageSeven: data.imageseven,
                    imageEight: data.imageeight,
                    imageNine: data.imagenine,
                });
            } else {
                location.replace("/");
            }
        })();
    }, []);

    if (progetto.imageNine !== null) {
        return (
            <div>
                <div className="projectPage progettiDesktop">
                    <div className="imageeContainer">
                        <img
                            className="d-block w-100 previewDesk"
                            src={progetto.preview}
                            alt="preview"
                        />
                    </div>
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                        <img src={progetto.imageFive} alt="fifth image" />
                        <img src={progetto.imageSix} alt="sixth image" />
                        <img src={progetto.imageSeven} alt="image seven" />
                        <img src={progetto.imageEight} alt="image eight" />
                        <img src={progetto.imageNine} alt="image nine" />
                    </div>
                </div>
                <div className="projectPage progettiMobile">
                    <img
                        className="d-block w-100 preview"
                        src={progetto.preview}
                        alt="preview"
                    />
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                        <img src={progetto.imageFive} alt="fifth image" />
                        <img src={progetto.imageSix} alt="sixth image" />
                        <img src={progetto.imageSeven} alt="image seven" />
                        <img src={progetto.imageEight} alt="image eight" />
                        <img src={progetto.imageNine} alt="image nine" />
                    </div>
                </div>
            </div>
        );
    }
    if (progetto.imageEight !== null) {
        return (
            <div>
                <div className="projectPage progettiDesktop">
                    <div className="imageeContainer">
                        <img
                            className="d-block w-100 previewDesk"
                            src={progetto.preview}
                            alt="preview"
                        />
                    </div>
                    <Headroom>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                        <img src={progetto.imageFive} alt="fifth image" />
                        <img src={progetto.imageSix} alt="sixth image" />
                        <img src={progetto.imageSeven} alt="image seven" />
                        <img src={progetto.imageEight} alt="image eight" />
                    </div>
                </div>
                <div className="projectPage progettiMobile">
                    <img
                        className="d-block w-100 preview"
                        src={progetto.preview}
                        alt="preview"
                    />
                    <Headroom>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                        <img src={progetto.imageFive} alt="fifth image" />
                        <img src={progetto.imageSix} alt="sixth image" />
                        <img src={progetto.imageSeven} alt="image seven" />
                        <img src={progetto.imageEight} alt="image eight" />
                    </div>
                </div>
            </div>
        );
    }
    if (progetto.imageSeven !== null) {
        return (
            <div>
                <div className="projectPage progettiDesktop">
                    <div className="imageeContainer">
                        <img
                            className="d-block w-100 previewDesk"
                            src={progetto.preview}
                            alt="preview"
                        />
                    </div>
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                        <img src={progetto.imageFive} alt="fifth image" />
                        <img src={progetto.imageSix} alt="sixth image" />
                        <img src={progetto.imageSeven} alt="image seven" />
                    </div>
                </div>
                <div className="projectPage progettiMobile">
                    <img
                        className="d-block w-100 preview"
                        src={progetto.preview}
                        alt="preview"
                    />
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                        <img src={progetto.imageFive} alt="fifth image" />
                        <img src={progetto.imageSix} alt="sixth image" />
                        <img src={progetto.imageSeven} alt="image seven" />
                    </div>
                </div>
            </div>
        );
    }

    if (progetto.imageSix !== null) {
        return (
            <div>
                <div className="projectPage progettiDesktop">
                    <div className="imageeContainer">
                        <img
                            className="d-block w-100 previewDesk"
                            src={progetto.preview}
                            alt="preview"
                        />
                    </div>
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                        <img src={progetto.imageFive} alt="fifth image" />
                        <img src={progetto.imageSix} alt="sixth image" />
                    </div>
                </div>
                <div className="projectPage progettiMobile">
                    <img
                        className="d-block w-100 preview"
                        src={progetto.preview}
                        alt="preview"
                    />
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                        <img src={progetto.imageFive} alt="fifth image" />
                        <img src={progetto.imageSix} alt="sixth image" />
                    </div>
                </div>
            </div>
        );
    }

    if (progetto.imageFive !== null) {
        return (
            <div>
                <div className="projectPage progettiDesktop">
                    <div className="imageeContainer">
                        <img
                            className="d-block w-100 previewDesk"
                            src={progetto.preview}
                            alt="preview"
                        />
                    </div>
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                        <img src={progetto.imageFive} alt="fifth image" />
                    </div>
                </div>
                <div className="projectPage progettiMobile">
                    <img
                        className="d-block w-100 preview"
                        src={progetto.preview}
                        alt="preview"
                    />
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                        <img src={progetto.imageFive} alt="fifth image" />
                    </div>
                </div>
            </div>
        );
    }

    if (progetto.imageFour !== null) {
        return (
            <div>
                <div className="projectPage progettiDesktop">
                    <div className="imageeContainer">
                        <img
                            className="d-block w-100 previewDesk"
                            src={progetto.preview}
                            alt="preview"
                        />
                    </div>
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                    </div>
                </div>
                <div className="projectPage progettiMobile">
                    <img
                        className="d-block w-100 preview"
                        src={progetto.preview}
                        alt="preview"
                    />
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                        <img src={progetto.imageFour} alt="fourth image" />
                    </div>
                </div>
            </div>
        );
    }

    if (progetto.imageThree !== null) {
        return (
            <div>
                <div className="projectPage progettiDesktop">
                    <div className="imageeContainer">
                        <img
                            className="d-block w-100 previewDesk"
                            src={progetto.preview}
                            alt="preview"
                        />
                    </div>
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                    </div>
                </div>
                <div className="projectPage progettiMobile">
                    <img
                        className="d-block w-100 preview"
                        src={progetto.preview}
                        alt="preview"
                    />
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                        <img src={progetto.imageThree} alt="third image" />
                    </div>
                </div>
            </div>
        );
    }

    if (progetto.imageTwo !== null) {
        return (
            <div>
                <div className="projectPage progettiDesktop">
                    <div className="imageeContainer">
                        <img
                            className="d-block w-100 previewDesk"
                            src={progetto.preview}
                            alt="preview"
                        />
                    </div>
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                    </div>
                </div>
                <div className="projectPage progettiMobile">
                    <img
                        className="d-block w-100 preview"
                        src={progetto.preview}
                        alt="preview"
                    />
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                        <img src={progetto.imageTwo} alt="second image" />
                    </div>
                </div>
            </div>
        );
    }

    if (progetto.imageOne !== null) {
        return (
            <div>
                <div className="projectPage progettiDesktop">
                    <div className="imageeContainer">
                        <img
                            className="d-block w-100 previewDesk"
                            src={progetto.preview}
                            alt="preview"
                        />
                    </div>
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                    </div>
                </div>
                <div className="projectPage progettiMobile">
                    <img
                        className="d-block w-100 preview"
                        src={progetto.preview}
                        alt="preview"
                    />
                    <Headroom pinStart={650}>
                        <Link to={"/home"} style={{ textDecoration: "none" }}>
                            <p className="navigators">HOME</p>
                        </Link>
                        <p className="navigators name">
                            <strong>{progetto.name}</strong>
                        </p>
                        <Link
                            to={"/Projects"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="navigators">WORKS</p>
                        </Link>
                    </Headroom>
                    <div className="desContainer">
                        <pre className="desktop">
                            <h4 className="description">
                                {progetto.description}
                            </h4>
                        </pre>
                        <h4 className="description mobile">
                            {progetto.description}
                        </h4>
                        <h6 className="longDes">{progetto.longDescription}</h6>
                    </div>
                    <div className="projectImages">
                        <img src={progetto.imageOne} alt="first image" />
                    </div>
                </div>
            </div>
        );
    }
}
