import React, { useState } from "react";
import axios from "./axios";

export function contactAuthSubmit(path, values) {
    const [thanks, setThanks] = useState(false);
    const [err, setErr] = useState(false);
    const [visible, setVisible] = useState(true);
    const contactHandleClick = () => {
        axios
            .post(path, values)
            .then(({ data }) => {
                if (!data.success) {
                    setErr(true);
                    setVisible(false);
                } else {
                    setThanks(true);
                    setVisible(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return [visible, err, thanks, contactHandleClick];
}
