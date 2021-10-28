import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        axios.post('https://pure-meadow-86481.herokuapp.com/meals', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('Meal Added Successfuly');
                    reset();
                }

            });

    };

    return (

        <div className="flex h-screen items-center justify-center">

            <div className="flex flex-col gap-y-6">

                <div>

                    <h2 className="text-center text-3xl font-semibold mb-3">Add Meals</h2>
                    <div className="w-20 mx-auto h-1 rounded-full bg-red-600"></div>

                </div>
                {/* , { pattern: /^[A-Za-z]+$/i } */}
                <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>

                    <input className="input" {...register("name", { required: true, maxLength: 20 })} placeholder="Meal Name" />
                    <input className="input" type="number" {...register("price")} placeholder="Price" />
                    <input className="input" type="text" {...register("type")} placeholder="Meal Type" />
                    <input className="input" {...register("img")} placeholder="Image URL" />
                    <textarea className="input" {...register("description")} placeholder="Meal Description" />
                    <textarea className="input" {...register("moreDiscription")} placeholder="More Meal Description" />
                    <input className="btn w-40 mx-auto" type="submit" />

                </form>


            </div>

        </div>

    );

};

export default AddService;
