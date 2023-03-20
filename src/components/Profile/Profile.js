import styles from "./styles/profile.module.css";

const Profile = () => {
    return (
        <section className={styles["profile-section"]}>
            <h1 className={styles["profile-heading"]}>Personal Information:</h1>
            <article className={styles["profile-info"]}>
                <img
                    className={styles["profile-photo"]}
                    src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=861"
                    alt="user"
                />
                {/* eslint-disable-next-line */}
                <ul className={styles["personal-info"]} role={"list"}>
                    <li>First Name: Martin</li>
                    <li>Last Name: Sofroniev</li>
                    <li>Email: user@abv.bg</li>
                    <div className={styles["actions"]}>
                        <h1>Created Recipes: 0</h1>
                        <h1>Saved Recipes: 0</h1>
                        <h1>Created Products: 0</h1>
                    </div>
                </ul>
            </article>
            <div className={styles["empty"]}></div>
            <h1 className={styles["profile-heading"]}>My Publications:</h1>
            <section className={styles["user-actions"]}>
                <article className={styles["created-recipes"]}>
                    <h1>Created Recipes:</h1>
                </article>
                <article className={styles["created-products"]}>
                    <h1>Created products:</h1>
                </article>
                <article className={styles["saved-recipes"]}>
                    <h1>Saved Recipes:</h1>   
                </article>
            </section>
        </section>
    );
}

export default Profile;