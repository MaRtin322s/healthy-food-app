import { useContext, useEffect, useReducer } from 'react';
import styles from './styles/updatedProfile.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import * as service from "../../services/userServices";
import { initialState, reducer } from './data/data';

/* eslint-disable jsx-a11y/anchor-has-content */
function UpdatedProfile() {
    const { user } = useContext(AuthContext);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        Promise.all([
            service.getUser(user._id)
        ])
            .then(result => {
                dispatch({ type: "SET_DATA", data: result[0] });
            })
    }, [user._id, user.accessToken]);

    return (
        <>
            <div className="container-fluid newsfeed d-flex" id="wrapper">
                <div className="row newsfeed-size">
                    <div className="col-md-12 p-0">
                        <div className="row profile-right-side-content">
                            <div className={styles["user-profile"]}>
                                <div className={styles["profile-header-background"]}>
                                </div>
                                <div className="row profile-rows">
                                    <div className="col-md-3">
                                        <div className="profile-info-left">
                                            <div className="text-center">
                                                <div className="profile-img w-shadow">
                                                    <div className="profile-img-overlay" />
                                                    <img
                                                        src={state.data.imageUrl}
                                                        alt="Avatar"
                                                        className="avatar img-circle"
                                                    />
                                                    <div className="profile-img-caption">
                                                        <label htmlFor="updateProfilePic" className="upload">
                                                            <i className="bx bxs-camera" /> Update
                                                            <input
                                                                type="file"
                                                                id="updateProfilePicInput"
                                                                className="text-center upload"
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="profile-fullname mt-3">{`${state.data.firstName} ${state.data.lastName}`}</p>
                                                <p className="profile-username mb-3 text-muted">
                                                   {state.data.email}
                                                </p>
                                            </div>
                                            <div className="intro mt-5 mv-hidden">
                                                <div className="intro-item d-flex justify-content-between align-items-center">
                                                    <p className="intro-title text-muted">
                                                        <i className="bx bx-briefcase text-primary" />
                                                        Web Developer at <a href="/">Company Name</a>
                                                    </p>
                                                </div>
                                                <div className="intro-item d-flex justify-content-between align-items-center">
                                                    <Link
                                                        to="/"
                                                        className="btn btn-quick-link join-group-btn border w-100"
                                                    >
                                                        Edit Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9 p-0">
                                        <div className="profile-info-right">
                                            {/* Posts section */}
                                            <div className="row">
                                                <div className="col-md-9 profile-center">
                                                    <ul className="list-inline profile-links d-flex justify-content-between w-shadow rounded">
                                                        <li className="list-inline-item profile-active">
                                                            <a href="/">Timeline</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="/">About</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="friends.html">Friends</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="/">Photos</a>
                                                        </li>
                                                        <li className="list-inline-item dropdown">
                                                            <a
                                                                href="/"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="bx bx-dots-vertical-rounded" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="post border-bottom p-3 bg-white w-shadow">
                                                        <div className="media text-muted pt-3">
                                                            <img
                                                                src="/images/users/user-4.jpg"
                                                                alt="Online user"
                                                                className="mr-3 post-user-image"
                                                            />
                                                            <div className="media-body pb-3 mb-0 small lh-125">
                                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                                    <span className="post-type text-muted">
                                                                        <a
                                                                            href="/"
                                                                            className="text-gray-dark post-user-name mr-2"
                                                                        >
                                                                            Arthur Minasyan
                                                                        </a>{" "}
                                                                        updated his cover photo.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-block mt-3">
                                                            <img
                                                                src="/images/users/post/post-1.jpg"
                                                                className="w-100 mb-3"
                                                                alt="post"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdatedProfile;