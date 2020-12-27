import React, { useState, useEffect } from "react";

export default function Welcome() {
    const [classname0, setClassname0] = useState("logoContainer0");
    const [classname1, setClassname1] = useState("logoContainer1");
    const [classname2, setClassname2] = useState("logoContainer2");
    const [classname3, setClassname3] = useState("logoContainer3");
    const [classname4, setClassname4] = useState("logoContainer4");
    const [classname5, setClassname5] = useState("logoContainer5");

    useEffect(() => {
        setTimeout(() => {
            setClassname1("logoContainer1 fadein");
        }, 1);
        setTimeout(() => {
            setClassname0("logoContainer0 fadeout");
        }, 1500);
        setTimeout(() => {
            setClassname2("logoContainer2 fadein");
        }, 1500);
        setTimeout(() => {
            setClassname1("logoContainer1 fadeout");
        }, 2000);
        setTimeout(() => {
            setClassname3("logoContainer3 fadein");
        }, 2000);
        setTimeout(() => {
            setClassname2("logoContainer2 fadeout");
        }, 2500);
        setTimeout(() => {
            setClassname4("logoContainer4 fadein");
        }, 2500);
        setTimeout(() => {
            setClassname3("logoContainer3 fadeout");
        }, 3500);
        setTimeout(() => {
            setClassname5("logoContainer5 fadein");
        }, 3500);
        setTimeout(() => {
            setClassname4("logoContainer4 fadeout");
        }, 4500);
        setTimeout(() => {
            setClassname5("logoContainer5 fadeout");
        }, 6000);
        setTimeout(() => {
            location.replace("/home");
        }, 6000);
    }, []);

    return (
        <div className="whole">
            <div className={classname0}></div>
            <div className={classname1}>
                <img
                    className="desky"
                    style={{ width: "49%", height: "auto" }}
                    src="images/lisa.jpeg"
                ></img>
                {/* <img
                    className="moby"
                    style={{ width: "89%", height: "auto" }}
                    src="images/lisa.jpeg"
                ></img> */}
            </div>
            <div className={classname2}>
                <img
                    className="desky"
                    style={{ width: "49%", height: "auto" }}
                    src="images/lisa2.jpeg"
                ></img>
                <img
                    className="moby"
                    style={{ width: "89%", height: "auto" }}
                    src="images/lisa2.jpeg"
                ></img>
            </div>
            <div className={classname3}>
                <img
                    className="desky"
                    style={{ width: "49%", height: "auto" }}
                    src="images/lisa3.jpeg"
                ></img>
                {/* <img
                    className="moby"
                    style={{ width: "89%", height: "auto" }}
                    src="images/lisa3.jpeg"
                ></img> */}
            </div>
            <div className={classname4}>
                <img
                    className="desky"
                    style={{ width: "49%", height: "auto" }}
                    src="images/lisa4.jpeg"
                ></img>
                <img
                    className="moby"
                    style={{ width: "89%", height: "auto" }}
                    src="images/lisa4.jpeg"
                ></img>
            </div>
            <div className={classname5}>
                <img
                    className="desky"
                    style={{ width: "20%", height: "auto" }}
                    src="images/logo.jpeg"
                ></img>
                <img
                    className="moby"
                    style={{ width: "45%", height: "auto" }}
                    src="images/logo.jpeg"
                ></img>
            </div>
        </div>
    );
}
