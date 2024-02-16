import styles from './styles/bmi.module.css';
import { useState } from 'react';

export const BMICalculator = () => {
    const [data, setData] = useState({
        age: '',
        radio: '',
        height: '',
        weight: ''
    });

    const changeHandler = (ev) => {
        setData(oldState => ({
            ...oldState,
            [ev.target.name]: ev.target.value
        }))
    };

    const submitHandler = (ev, input) => {
        ev.preventDefault();

        let weight = Number(input.weight);
        let height = Number(input.height);
        let result = '';

        let bmi = weight / ((height / 100) ** 2);

        if (bmi < 18.5) {
            result = 'Underweight';
        } else if (18.5 <= bmi && bmi <= 24.9) {
            result = 'Healthy';
        } else if (25 <= bmi && bmi <= 29.9) {
            result = 'Overweight';
        } else if (30 <= bmi && bmi <= 34.9) {
            result = 'Obese';
        } else if (35 <= bmi) {
            result = 'Extremely obese';
        }

        setData(oldState => ({
            ...oldState,
            result: result,
            bmi: bmi.toFixed(2)
        }));
    };

    return (
        <section className={`${styles['bmi-section']}`}>
            <h3 className={`${styles['bmi']}`}>
                <b>B</b>ody <b>M</b>ass <b>I</b>ndex Calculator
            </h3>
            <form className={`${styles['bmi-form']}`} id="form" onSubmit={(ev) => submitHandler(ev, data)}>
                <div className={`${styles['row-one']}`}>
                    <input
                        type="text"
                        className={`${styles['text-input']}`}
                        name="age"
                        id="age"
                        autoComplete="off"
                        required={true}
                        value={data.age}
                        onChange={(e) => changeHandler(e)}
                    />
                    <p className={`${styles['text']}`}>Age</p>
                    <label className={`${styles['container']}`}>
                        <input type="radio" name="radio" id="f" value="f" onChange={(e) => changeHandler(e)} />
                        <p className={`${styles['text']}`}>Female</p>
                        <span className={`${styles['checkmark']}`} />
                    </label>
                    <label className={`${styles['container']}`}>
                        <input type="radio" name="radio" id="m" value="m" onChange={(e) => changeHandler(e)} />
                        <p className={`${styles['text']}`}>Male</p>
                        <span className={`${styles['checkmark']}`} />
                    </label>
                </div>
                <div className="row-two">
                    <input
                        type="text"
                        className={`${styles['text-input']}`}
                        id="height"
                        name='height'
                        autoComplete="off"
                        required=""
                        value={data.height}
                        onChange={(e) => changeHandler(e)}
                    />
                    <p className={`${styles['text']}`}>Height (cm)</p>
                    <input
                        type="text"
                        className={`${styles['text-input']}`}
                        id="weight"
                        name='weight'
                        autoComplete="off"
                        required=""
                        value={data.weight}
                        onChange={(e) => changeHandler(e)}
                    />
                    <p className={`${styles['text']}`}>Weight (kg)</p>
                </div>
                <button
                    className={`${styles['submit']}`}
                    id="submit"
                >
                    Submit
                </button>
            </form>

            <h1 className={`${styles['bmi']}`}>Result: {data.result ? data.result : 'TBD'}</h1>
            <h2 className={`${styles['bmi']}`}>Index: {data.bmi ? data.bmi : 'TBD'}</h2>
        </section>
    );
};