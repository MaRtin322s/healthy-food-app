import styles from './styles/bmi.module.css';

export function DailyMealElement(props) {
    return (
        <article className={styles['daily-meal']}>
            <h3>{props.day}</h3>
            <div className={styles['daily-meals']}>
                <div className="card" style={{ width: "15rem" }}>
                    <img src={props.sourceUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
        </article>
    );
}