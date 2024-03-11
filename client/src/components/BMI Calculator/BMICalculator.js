import styles from './styles/bmi.module.css';
import resp from './styles/responsive.module.css';
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
        let bmi = 0;

        if (input.radio === 'm') {
            bmi = 66.47 + (13.75 * weight) + (5.003 * (height / 100)) - (6.755 * Number(input.age));
        } else {
            bmi = 655.1 + (9.563 * weight) + (1.850 * (height / 100)) - (4.676 * Number(input.age));
        }

        setData(oldState => ({
            ...oldState,
            bmi: bmi.toFixed(2)
        }));
    };

    return (
        <>
            <section className={`${styles['bmi-section']}`}>
                <h3 className={`${styles['bmi']}`}>
                    <b>B</b>asal <b>M</b>etabolic <b>R</b>ate
                </h3>
                <form className={`${styles['bmi-form']} ${resp['bmi-form-resp']}`} id="form" onSubmit={(ev) => submitHandler(ev, data)}>
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

                <h1 className={`${styles['bmi']}`}>Required daily calories: {data.bmi ? data.bmi : 'TBD'} kcal</h1>
            </section>
            <scrtion>
                
            </scrtion>
        </>
    );
};