import React, { useState, useEffect } from "react";

export default function Welcome() {
    const [classname0, setClassname0] = useState("logoContainer0");
    const [classname1, setClassname1] = useState("logoContainer1");
    const [classname2, setClassname2] = useState("logoContainer2");
    const [classname3, setClassname3] = useState("logoContainer3");
    const [classname4, setClassname4] = useState("logoContainer4");
    const [classname5, setClassname5] = useState("logoContainer5");
    const [classname6, setClassname6] = useState("logoContainer6");
    const [classname7, setClassname7] = useState("logoContainer7");
    const [classname8, setClassname8] = useState("logoContainer8");
    const [classname9, setClassname9] = useState("logoContainer9");
    const [classname10, setClassname10] = useState("logoContainer10");

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
            setClassname6("logoContainer6 fadein");
        }, 4500);
        setTimeout(() => {
            setClassname5("logoContainer5 fadeout");
        }, 5000);
        setTimeout(() => {
            setClassname7("logoContainer7 fadein");
        }, 5000);
        setTimeout(() => {
            setClassname6("logoContainer6 fadeout");
        }, 6500);
        setTimeout(() => {
            setClassname8("logoContainer8 fadein");
        }, 6500);
        setTimeout(() => {
            setClassname7("logoContainer7 fadeout");
        }, 7000);
        setTimeout(() => {
            setClassname9("logoContainer9 fadein");
        }, 7000);
        setTimeout(() => {
            setClassname8("logoContainer8 fadeout");
        }, 7500);
        setTimeout(() => {
            setClassname10("logoContainer10 fadein");
        }, 8000);
        setTimeout(() => {
            setClassname9("logoContainer9 fadeout");
        }, 9000);
        setTimeout(() => {
            location.replace("/home");
        }, 11000);
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
                    style={{ width: "39%", height: "auto" }}
                    src="images/shades.jpeg"
                ></img>
                <img
                    className="moby"
                    style={{ width: "79%", height: "auto" }}
                    src="images/shades.jpeg"
                ></img>
            </div>
            <div className={classname6}>
                <img
                    className="desky"
                    style={{ width: "49%", height: "auto" }}
                    src="images/circle.jpeg"
                ></img>
                {/* <img
                    className="moby"
                    style={{ width: "89%", height: "auto" }}
                    src="images/circle.jpeg"
                ></img> */}
            </div>
            <div className={classname7}>
                <img
                    className="desky"
                    style={{ width: "49%", height: "auto" }}
                    src="images/wonder.jpeg"
                ></img>
                <img
                    className="moby"
                    style={{ width: "89%", height: "auto" }}
                    src="images/wonder.jpeg"
                ></img>
            </div>
            <div className={classname8}>
                <img
                    className="desky"
                    style={{ width: "49%", height: "auto" }}
                    src="images/lisa8.jpeg"
                ></img>
                {/* <img
                    className="moby"
                    style={{ width: "89%", height: "auto" }}
                    src="images/lisa8.jpeg"
                ></img> */}
            </div>
            <div className={classname9}>
                <img
                    className="desky"
                    style={{ width: "49%", height: "auto" }}
                    src="images/lisa9.jpeg"
                ></img>
                <img
                    className="moby"
                    style={{ width: "89%", height: "auto" }}
                    src="images/lisa8.jpeg"
                ></img>
            </div>
            <div className={classname10}>
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
