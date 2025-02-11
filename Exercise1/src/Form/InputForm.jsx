import React, { useState } from "react";
import Container from "../UI/Container";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

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

        setValue({ name: '', age: '' });

        props.onFormSave(value.name, value.age);
    }


    return (
        <div>
            <Container bg={"bg-amber-200"}>
                <form onSubmit={SubmitHandler} className="flex flex-col justify-around">
                    <label htmlFor="valueName" className="font-bold">Username</label>
                    <input
                        id="valueName"
                        onChange={nameChangeHandler}
                        value={value.name}
                        type="text"
                        className={`${correctInput.name ? 'bg-amber-400' : 'bg-red-400'}  p-2 mt-1 mb-3 border-2  rounded-2xl`}
                    />

                    <label htmlFor="valueAge" className="font-bold">Age (years)</label>
                    <input
                        id="valueAge"
                        onChange={ageChangeHandler}
                        value={value.age}
                        type="number"
                        className={`${correctInput.age ? 'bg-amber-400' : 'bg-red-400'}  p-2 mt-1 mb-6 border-2  rounded-2xl`}
                    />
                    <Button type={"submit"} text={"submit"} />
                </form>
            </Container>
            {correctInput.age || <ErrorModal title={"Enter a vallid User name "} errorMessage={"valid user names have 1-9 A-Z a-z characters."} />}
        </div>
    );
}

export default InputForm;