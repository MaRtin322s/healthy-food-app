import styles from './styles/bmi.module.css';
import resp from './styles/responsive.module.css';
import { useState } from 'react';
import * as nutritionServices from '../../services/nutritionService';
import { DailyMealElement } from './DailyMealElement';

export const BMICalculator = () => {
    const [data, setData] = useState({
        age: '',
        radio: '',
        height: '',
        weight: ''
    });

    let days = {
        0: 'Breakfast',
        1: 'Lunch',
        2: 'Dinner',
    };

    const [recipes, setRecipes] = useState([]);

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
        let bmi = 0;

        if (input.radio === 'm') {
            bmi = (10 * weight) + (6.25 * height) - (5 * input.age) + 5;
        } else {
            bmi = (10 * weight) + (6.25 * height) - (5 * input.age) - 161;
        }

        nutritionServices.getNutritions(bmi.toString())
            .then(mealPlan => setRecipes(Object.entries(Object.values(mealPlan)[0])));

        setData(oldState => ({
            ...oldState,
            bmi: bmi.toFixed(2)
        }));
    };

    return (
        <div className={styles['recipes-section']}>
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
                            <input type="radio" required={true} name="radio" id="m" value="m" onChange={(e) => changeHandler(e)} />
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
                            required={true}
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
                            required={true}
                            value={data.weight}
                            onChange={(e) => changeHandler(e)}
                        />
                        <p className={`${styles['text']}`}>Weight (kg)</p>
                    </div>
                    <button
                        className={`${styles['submit']}`}
                        id="submit"
                    >
                        {recipes.length > 0 ? 'Generate new' : 'Generate Plan'}
                    </button>
                </form>

                <h1 className={`${styles['bmi']}`}>Recommended daily calories: {data.bmi ? data.bmi : 'TBD'} kcal</h1>
            </section>
            <section className={styles['result-recipes']}>
                <h1 className={`${styles['bmi-sec']}`}>Daily meal plan:</h1>
                <div className={styles['daily']}>
                    {
                        recipes[1] ?
                            (
                                recipes[1][1]?.meals?.map((x, i) => <DailyMealElement key={x.id} {...x} day={days[i]} />)
                            )
                            : <h3>Submit your credentials to access the plan</h3>
                    }
                </div>
            </section>
        </div>
    );
};