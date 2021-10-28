import React, { useEffect, useState } from 'react';
import Meal from './Meal';

const Foods = () => {

    const [meals, setMeals] = useState([]);
    const [tab, setTab] = useState('Breakfast');

    useEffect(() => {

        fetch("https://pure-meadow-86481.herokuapp.com/meals")
            .then(res => res.json())
            .then(data => setMeals(data));

    }, []);

    const handleClick = (type) => {

        setTab(type);

    };

    return (

        <>

            <div className="container">

                <div className="food-nav flex space-x-5 mt-10 justify-center">

                    <button onClick={() => handleClick('Breakfast')} className="tab-btn">Breackfast</button>
                    <button onClick={() => handleClick('Lunch')} className="tab-btn">Lunch</button>
                    <button onClick={() => handleClick('Dinner')} className="tab-btn">Dinner</button>

                </div>

                <div className="grid grid-cols-1 gap-x-20 gap-y-20 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-20 my-20">

                    {
                        meals.filter(meal => meal.type === tab).map(meal => <Meal key={meal._id} meal={meal} />)
                    }

                </div>

            </div>

        </>

    );
};

export default Foods;
