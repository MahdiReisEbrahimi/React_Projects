import React, { useState } from "react";

const InputForm = (props) => {

    const [value, setValue] = useState({ name: '', age: '' });
    const [correctInput, setCorrectInput] = useState({ name: true, age: true });

    const nameChangeHandler = (event) => {
        setValue({ name: event.target.value, age: value.age });
        if (event.target.value.trim().length === 0) setCorrectInput({ name: false, age: correctInput.age, })
        else setCorrectInput({ name: true, age: correctInput.age, })
    }
    const ageChangeHandler = (event) => {
        setValue({ name: value.name, age: event.target.value });
        if (event.target.value.trim().length === 0) setCorrectInput({ name: correctInput.name, age: false, })
        else setCorrectInput({ name: correctInput.name, age: true, })
    }

    const SubmitHandler = (event) => {
        event.preventDefault();

        if (value.name.trim().length === 0) {
            setCorrectInput({ name: false, age: correctInput.age });
            return;
        } else if (value.age.trim().length === 0) {
            setCorrectInput({ name: correctInput.name, age: false });
            return;
        }

        const temp = {
            nameInput: value.name,
            ageInput: value.age,
        }

        setValue({ name: '', age: '' });

        props.onFormSave(temp);
    }


    return (
        <div className="bg-amber-200 mt-20 mb-10 p-10 rounded-2xl">
            <form onSubmit={SubmitHandler} className="flex flex-col justify-around">
                <section className="mb-4 mt-5  flex flex-col">
                    <label htmlFor="" className="font-bold">Username</label>
                    <input
                        onChange={nameChangeHandler}
                        value={value.name}
                        type="text"
                        className={`${correctInput.name ? 'bg-amber-400' : 'bg-red-400'}  p-2 mt-1 border-2  rounded-2xl`}
                    />
                </section>
                <section className="flex flex-col mb-5 ">
                    <label htmlFor="" className="font-bold">Age (years)</label>
                    <input onChange={ageChangeHandler} value={value.age} type="number" className={`${correctInput.age ? 'bg-amber-400' : 'bg-red-400'}  p-2 mt-1 border-2  rounded-2xl`} />
                </section>
                <button
                    className="
                        bg-amber-400 border-2 
                        hover:bg-amber-950 
                        hover:text-amber-50 
                        hover:cursor-pointer 
                        border-black rounded-2xl 
                        font-bold 
                        p-2 
                    "
                    type="submit">Submit</button>
            </form>
        </div>
    );

}

export default InputForm;