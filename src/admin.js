import React, { useState } from "react";
import { useStatefulFields } from "./useStatefulFields";
import { useAuthSubmit } from "./useAuthSubmit";
import { otherAuthSubmit } from "./otherAuthSubmit";
import axios from "./axios";

export default function Admin() {
    const [todo, setTodo] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [errUpload, setErrUpload] = useState(false);
    const [values, handleChange] = useStatefulFields();
    const [error, isVisible, former, handleClick] = useAuthSubmit(
        "/verify",
        values
    );
    const [newError, visible, deleted, otherHandleClick] = otherAuthSubmit(
        "/delete",
        values
    );

    const uploader = async (e) => {
        e.preventDefault();
        setTodo(false);
        setUploading(true);
        console.log("smt happens");
        let formData = new FormData(myForm);
        console.log("esisto?", formData.entries());
        for (var pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }
        try {
            const { data } = await axios.post("/upload", formData);
            console.log("Finally", data);
            if (data.success) {
                setUploading(false);
                setUploaded(true);
            } else {
                setUploading(false);
                setErrUpload(true);
            }
        } catch (err) {
            console.log("ME?", err);
            setUploading(false);
            setErrUpload(true);
        }
    };

    const addAnother = (e) => {
        e.preventDefault();
        setUploaded(false);
        setTodo(true);
    };

    return (
        <div className="adminPage">
            {isVisible && (
                <div className="verify">
                    {error && (
                        <p className="error">
                            Something went wrong, please try again
                        </p>
                    )}
                    <input
                        className="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>Submit</button>
                </div>
            )}
            {former && todo && (
                <div className="uploadAndDelete">
                    <form
                        className="formerFields"
                        id="myForm"
                        name="myForm"
                        encType="multipart/form-data"
                        onSubmit={uploader}
                    >
                        <h2>INSERT PROJECT</h2>
                        <div className="allInputs">
                            <div className="textInputs">
                                <div className="inputLabel">
                                    <label htmlFor="name">Name: </label>
                                    <textarea
                                        name="name"
                                        id="name"
                                        cols="40"
                                        rows="1"
                                        onChange={handleChange}
                                    ></textarea>{" "}
                                </div>
                                <div className="inputLabel">
                                    <label htmlFor="description">
                                        Description:{" "}
                                    </label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        cols="40"
                                        rows="3"
                                        onChange={handleChange}
                                    ></textarea>{" "}
                                </div>
                                <div className="inputLabel">
                                    <label htmlFor="LongDescription">
                                        Long Description:{" "}
                                    </label>
                                    <textarea
                                        name="longDescription"
                                        id="longDescription"
                                        cols="40"
                                        rows="10"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="imageInputs">
                                <div className="inputLabel">
                                    <label htmlFor="preview">
                                        Preview: (landscape image)
                                    </label>
                                    <input
                                        name="preview"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputLabel">
                                    <label htmlFor="imageOne">
                                        Image One:{" "}
                                    </label>
                                    <input
                                        name="imageOne"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputLabel">
                                    <label htmlFor="imageTwo">
                                        Image Two:{" "}
                                    </label>
                                    <input
                                        name="imageTwo"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputLabel">
                                    <label htmlFor="imageThree">
                                        Image Three:{" "}
                                    </label>
                                    <input
                                        name="imageThree"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputLabel">
                                    <label htmlFor="imageFour">
                                        Image Four:{" "}
                                    </label>
                                    <input
                                        name="imageFour"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputLabel">
                                    <label htmlFor="imageFive">
                                        Image Five:{" "}
                                    </label>
                                    <input
                                        name="imageFive"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputLabel">
                                    <label htmlFor="imageSix">
                                        Image Six:{" "}
                                    </label>
                                    <input
                                        name="imageSix"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputLabel">
                                    <label htmlFor="imageSeven">
                                        Image Seven:{" "}
                                    </label>
                                    <input
                                        name="imageSeven"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputLabel">
                                    <label htmlFor="imageEight">
                                        Image Eight:{" "}
                                    </label>
                                    <input
                                        name="imageEight"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputLabel">
                                    <label htmlFor="imageNine">
                                        Image Nine:{" "}
                                    </label>
                                    <input
                                        name="imageNine"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Upload</button>
                    </form>
                </div>
            )}
            {uploading && (
                <div className="uploading">
                    <h2>Uploading Project</h2>
                    <p>please wait</p>
                </div>
            )}
            {uploaded && (
                <div className="success">
                    <h1>Project Succesfully Uploaded to Database!</h1>
                    <p>
                        Wait few minutes before pressing the button or doing any
                        action.
                    </p>
                    <p>
                        The software takes its time to upload all the images to
                        the cloud.
                    </p>
                    <p>
                        The biggest the project, the longer the time needed. My
                        suggestion is to wait up to 3 minutes.
                    </p>
                    <p>
                        Leave this page open for this amount of time or the
                        project will be uploaded partially.
                    </p>
                    <p>
                        If this happens, delete the project and upload it
                        again... nothing is lost! :)
                    </p>
                    <button onClick={addAnother}>BACK</button>
                </div>
            )}
            {visible && former && (
                <div className="uploadAndDelete">
                    <div className="deleteProject">
                        <h2>DELETE PROJECT</h2>
                        <div className="deleteForm">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                            />
                            <button onClick={otherHandleClick}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
            {deleted && (
                <div className="success">
                    <h1>Project Deleted</h1>
                </div>
            )}
            {errUpload && (
                <div>
                    <h1>Error in upload, refresh the page and try again</h1>
                </div>
            )}
            {newError && (
                <div>
                    <h1>
                        Error deleting project, refresh the page and try again
                    </h1>
                </div>
            )}
            {error && (
                <p className="error">Something went wrong, please try again</p>
            )}
        </div>
    );
}
