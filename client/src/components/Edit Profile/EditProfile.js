import { useCallback, useEffect, useState } from "react";
import styles from "./styles/editProfile.module.css";
import useFileReader from "../../hooks/useFileReader";

const EditProfile = ({
    closeEditModal,
    firstName,
    lastName,
    email,
    imageUrl,
    _id,
    token,
    submitHandler
}) => {

    const [values, setValues] = useState({
        firstName: firstName,
        lastName: lastName,
        email: email,
        imageUrl: imageUrl
    });

    const [dataUrl, setUrl] = useFileReader();

    useEffect(() => {
        if (dataUrl.dataURL) {
            setValues(state => ({
                ...state,
                imageUrl: dataUrl.dataURL
            }))
        }
    }, [dataUrl]);

    const changeHandler = useCallback((ev) => {
        setValues(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }, []);

    return (
        <>
            <div className={styles["backdrop"]} onClick={() => closeEditModal()}></div>
            <div id={styles["delete-modal"]} className={styles["modal-container"]}>
                <form onSubmit={(ev) => submitHandler(ev, values, _id, token)}>
                    <h2>Edit profile:</h2>
                    <label htmlFor="firstName">First Name:</label>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={values.firstName}
                            onChange={(ev) => changeHandler(ev)}
                        />
                    </div>
                    <label htmlFor="lastName">Last Name:</label>
                    <div>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={values.lastName}
                            onChange={(ev) => changeHandler(ev)}
                        />
                    </div>
                    <label htmlFor="email">Email:</label>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={(ev) => changeHandler(ev)}
                        />
                    </div>
                    <label htmlFor="imageUrl">{dataUrl.dataURL ? 'New:' : 'Old:'} {values.imageUrl.length >= 35
                        ?
                        `${values.imageUrl.substr(0, 35)}...`
                        : values.imageUrl
                    }
                    </label>
                    <div>
                        <input
                            type="file"
                            id="imageUrl"
                            name={values.imageUrl}
                            onChange={(ev) => setUrl(ev)}
                        />
                    </div>
                    <button
                        id={styles["delete-confirm"]}
                    >
                        Edit profile
                    </button>
                    <button
                        id={styles["delete-cancel"]}
                        onClick={() => closeEditModal()}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </>
    );
}

export default EditProfile;