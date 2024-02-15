import styles from './styles/bmi.module.css';

export const BMICalculator = () => {
    return (
        <section className={`${styles['bmi-section']}`}>
            <h3 className={`${styles['bmi']}`}>
                <b>B</b>ody <b>M</b>ass <b>I</b>ndex Calculator
            </h3>
            <form className={`${styles['bmi-form']}`} id="form">
                <div className={`${styles['row-one']}`}>
                    <input
                        type="text"
                        className={`${styles['text-input']}`}
                        id="age"
                        autoComplete="off"
                        required=""
                    />
                    <p className={`${styles['text']}`}>Age</p>
                    <label className={`${styles['container']}`}>
                        <input type="radio" name="radio" id="f" />
                        <p className={`${styles['text']}`}>Female</p>
                        <span className={`${styles['checkmark']}`} />
                    </label>
                    <label className={`${styles['container']}`}>
                        <input type="radio" name="radio" id="m" />
                        <p className={`${styles['text']}`}>Male</p>
                        <span className={`${styles['checkmark']}`} />
                    </label>
                </div>
                <div className="row-two">
                    <input
                        type="text"
                        className={`${styles['text-input']}`}
                        id="height"
                        autoComplete="off"
                        required=""
                    />
                    <p className={`${styles['text']}`}>Height (cm)</p>
                    <input
                        type="text"
                        className={`${styles['text-input']}`}
                        id="weight"
                        autoComplete="off"
                        required=""
                    />
                    <p className={`${styles['text']}`}>Weight (kg)</p>
                </div>
                <button type="button" id="submit">
                    Submit
                </button>
            </form>
        </section>
    );
};