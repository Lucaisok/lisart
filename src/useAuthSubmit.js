import React, { useState } from "react";
import axios from "./axios";

export function useAuthSubmit(path, values) {
    const [error, setError] = useState(false);
    const [isVisible, setIsVisble] = useState(true);
    const [former, setFormer] = useState(false);
    const handleClick = () => {
        axios
            .post(path, values)
            .then(({ data }) => {
                if (!data.success) {
                    setError(true);
                } else {
                    setIsVisble(false);
                    setFormer(true);
                }
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
    };
    return [error, isVisible, former, handleClick];
}
