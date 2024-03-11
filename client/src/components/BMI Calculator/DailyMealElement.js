import styles from './styles/bmi.module.css';

export function DailyMealElement(props) {
    return (
        <>
            <article>
                <h5 className={styles['bmi']}>{props.day}</h5>
                <div className={styles['daily-meals']}>
                    <div className="card" style={{ width: "15rem", backgroundColor: "#19e79c" }}>
                        <div className="card-body">
                            <h5  style={{ width: "150px", height: "80px", fontSize: "21px" }}>{props.title}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <a className={styles['details-link']} href={props.sourceUrl} target='_blank'>Details</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </>
    );
}