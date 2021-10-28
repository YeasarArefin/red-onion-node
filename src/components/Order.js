import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderMeal from './OrderMeal';

const Order = () => {

    const [meals, setMeals] = useState([]);
    let { id } = useParams();

    useEffect(() => {

        fetch(`https://pure-meadow-86481.herokuapp.com/meals/${id}`)
            .then(res => res.json())
            .then(data => setMeals(data));

    }, []);
    console.log(meals);
    return (

        <>

            <div>

                {
                    meals.map(meal => <OrderMeal meal={meal} key={meal._id} />)
                }

            </div>

        </>
    );

};

export default Order;