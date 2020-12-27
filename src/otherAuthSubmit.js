import React, { useState } from "react";
import axios from "./axios";

export function otherAuthSubmit(path, values) {
    const [newError, setNewError] = useState(false);
    const [visible, setVisble] = useState(true);
    const [deleted, setDeleted] = useState(false);
    const otherHandleClick = () => {
        axios
            .post(path, values)
            .then(({ data }) => {
                if (!data.success) {
                    setNewError(true);
                } else {
                    setVisble(false);
                    setDeleted(true);
                }
            })
            .catch((err) => {
                console.log(err);
                setNewError(true);
            });
    };
    return [newError, visible, deleted, otherHandleClick];
}
