import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const ManageMeals = () => {

    const [meals, setMeals] = useState([]);

    fetch('https://pure-meadow-86481.herokuapp.com/meals')
        .then(res => res.json())
        .then(data => {
            setMeals(data);
        });

    const handleDelete = (id) => {

        const proceed = window.confirm('Are You Suer To Delete This Meal');
        if (proceed) {

            fetch(`https://pure-meadow-86481.herokuapp.com/meals${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remainingMeal = meals.filter(meal => meal._id !== id);
                        setMeals(remainingMeal);
                    }

                });

        }

    };

    return (

        <div className="container">

            <div className="pt-20 flex justify-center">

                <div className="flex flex-col gap-y-7 items-center">

                    {
                        meals.map(meal => <div className="flex justify-between gap-5 border p-2 rounded-xl hover:shadow-lg transition duration-300 w-80 items-center" key={meal._id}>

                            <img width="100px" src={meal.img} alt="" />
                            <h1>{meal.name}</h1>
                            <button onClick={() => handleDelete(meal._id)} className="symbol-btn" >
                                <AiOutlineDelete className="text-xl" />
                            </button>

                        </div>)
                    }

                </div>

            </div>

        </div>

    );
};

export default ManageMeals;
